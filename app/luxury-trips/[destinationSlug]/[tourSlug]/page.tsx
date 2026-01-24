import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import TourClient from "./luxury-tour-client";
import { LOCALES } from "@/lib/data/tour-slugs";
import {
  LUXURY_TOUR_SLUGS,
  luxuryPageContent,
  LuxurySlug,
  LuxuryTourSlug,
  DESTINATION_TOURS,
} from "@/lib/data/luxury-page-content";


/* ================================
   Types
================================ */
type PageProps = {
  params: {
    locale: string;
    destinationSlug: LuxurySlug;
    tourSlug: LuxuryTourSlug;
  };
};

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  const params: {
    locale: string;
    destinationSlug: LuxurySlug;
    tourSlug: LuxuryTourSlug;
  }[] = [];

  const destinationSlugs = Object.keys(luxuryPageContent) as LuxurySlug[];

  for (const locale of LOCALES) {
    for (const destinationSlug of destinationSlugs) {
      // Only generate routes for tours that belong to this destination
      const toursForDestination = DESTINATION_TOURS[destinationSlug] || [];
      for (const tourSlug of toursForDestination) {
        params.push({
          locale,
          destinationSlug,
          tourSlug,
        });
      }
    }
  }

  return params;
}


export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
 const { locale, destinationSlug,tourSlug } = params;
  const t = getTranslations(locale);

  const pageData = t.luxuryTourPackages?.[tourSlug];
    if (!pageData) {
      return {
        title: "Luxury Tours",
        description:
          "Explore curated luxury travel experiences with premium stays and personalized service.",
      };
    }


const title = t.luxuryTourPackages?.[tourSlug]?.metadata?.title || "Our Services | Global Tourist Centre";
const description = t.luxuryTourPackages?.[tourSlug]?.metadata?.description || "Custom travel solutions with Global Tourist Centre - visa assistance, hotel bookings, and travel packages.";
 
    const image = t.luxuryTourPackages?.[tourSlug]?.hero_section?.background_image ;

    const canonical = `https://globaltouristcentre.com/${locale}/luxury-trips/${destinationSlug}/${tourSlug}`;
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      siteName: title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    // keywords: t.metadata.keywords,
    robots: {
      index: true,
      follow: true,
    },
  };
}
/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function TourDetailPage({ params }: PageProps) {
  const { tourSlug } = params;

  /* 1️⃣ Validate tour slug */
  if (!LUXURY_TOUR_SLUGS.includes(tourSlug)) {
    notFound();
  }

  /* 2️⃣ Render client */
  return <TourClient tourSlug={tourSlug} />;
}
