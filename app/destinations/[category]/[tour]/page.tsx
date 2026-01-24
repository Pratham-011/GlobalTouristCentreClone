import { notFound } from "next/navigation";
import type { Metadata } from "next";

import TourClient from "./tour-detail-client";

import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";
import { getTranslations } from "@/lib/i18n/getTranslations";
import type { TripId } from "@/lib/i18n/translations/index";


/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */
type PageProps = {
  params: {
    locale: string;
    category: string;
    tour: string;
  };
};

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  const params: {
    locale: string;
    category: string;
    tour: string;
  }[] = [];

  for (const locale of LOCALES) {
    for (const [category, tours] of Object.entries(TOUR_CATEGORIES)) {
      for (const tour of tours) {
        params.push({ locale, category, tour });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, tour } = params;

  const t = getTranslations(locale);
  const data = t.tourData?.[tour]?.page?.metadata;

  if (!data) {
    const title = "Tour Package";
    return {
      title,
      description: "Explore curated tour packages with expert planning, trusted guides, and memorable experiences.",
      openGraph: {
        title,
        description: "Explore curated tour packages with expert planning, trusted guides, and memorable experiences.",
        siteName: "Global Tourist Centre",
        type: "website",
      },
    };
  }
  const title = data.title;
  const description = data.description;

  const image = t.tourData?.[tour]?.page?.hero?.backgroundImage;
  const canonical = `https://globaltouristcentre.com/${locale}/destinations`;


  return {
    title: title,
    description: description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: title,
      description: description,
      images: [image],
      siteName: t.metadata.brandname,
      type: "website",
      url: canonical,
    },
    twitter: {
      title: title,
      description: description,
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
  const { category, tour } = params;

  /* 1️⃣ Validate category */
  const validTours = TOUR_CATEGORIES[category as keyof typeof TOUR_CATEGORIES];

  if (!validTours) notFound();

  /* 2️⃣ Validate tour belongs to category */
  if (!(validTours as readonly string[]).includes(tour)) notFound();

  /* 3️⃣ Render client */
  return <TourClient tourId={tour as TripId} />;
}
