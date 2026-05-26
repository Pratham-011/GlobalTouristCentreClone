import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import TourClient from "./luxury-tour-client";
import { LOCALES } from "@/lib/data/tour-slugs";

import {
  luxuryPageContent,
  LuxurySlug,
  LuxuryTourSlug,
  DESTINATION_TOURS,
} from "@/lib/data/luxury-page-content";

/* ------------------------------------------------------------------ */
/* TRAIN SLUGS — handled by [destinationSlug] page only, not here      */
/* ------------------------------------------------------------------ */
const TRAIN_SLUGS = ["mahraja-train-tour-package"] as const;
type TrainSlug = (typeof TRAIN_SLUGS)[number];

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

  // Exclude train slugs — they have no nested [tourSlug] routes
  const destinationSlugs = (Object.keys(luxuryPageContent) as LuxurySlug[]).filter(
    (slug) => !TRAIN_SLUGS.includes(slug as TrainSlug)
  );

  for (const locale of LOCALES) {
    for (const destinationSlug of destinationSlugs) {
      const toursForDestination = DESTINATION_TOURS[destinationSlug] ?? [];

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

/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, destinationSlug, tourSlug } = params;

  // Train slugs are not handled at this level
  if (TRAIN_SLUGS.includes(destinationSlug as TrainSlug)) {
    return {
      title: "Luxury Tours",
      description: "Explore curated luxury travel experiences with premium stays and personalized service.",
    };
  }

  const t = getTranslations(locale);

  /* Validate destination */
  if (!(destinationSlug in luxuryPageContent)) {
    return {
      title: "Luxury Tours",
      description: "Explore curated luxury travel experiences with premium stays and personalized service.",
    };
  }

  /* Validate tour belongs to destination */
  const tours = DESTINATION_TOURS[destinationSlug] ?? [];

  if (!tours.includes(tourSlug)) {
    return {
      title: "Luxury Tours",
      description: "Explore curated luxury travel experiences with premium stays and personalized service.",
    };
  }

  const pageData = t.luxuryTourPackages?.[tourSlug];

  if (!pageData) {
    return {
      title: "Luxury Tours",
      description: "Explore curated luxury travel experiences with premium stays and personalized service.",
    };
  }

  const title =
    pageData.metadata?.title ||
    "Our Services | Global Tourist Centre";

  const description =
    pageData.metadata?.description ||
    "Custom travel solutions with Global Tourist Centre.";

  const image = pageData.hero_section?.background_image;

  const canonical = `https://globaltouristcentre.com/${locale}/luxury-trips/${destinationSlug}/${tourSlug}/`;

  return {
    title,
    description,

    alternates: {
      canonical,
                            languages: {
        en: `https://globaltouristcentre.com/luxury-trips/${destinationSlug}/${tourSlug}/`,
        it: `https://globaltouristcentre.com/it/luxury-trips/${destinationSlug}/${tourSlug}/`,
        fr: `https://globaltouristcentre.com/fr/luxury-trips/${destinationSlug}/${tourSlug}/`,
        de: `https://globaltouristcentre.com/de/luxury-trips/${destinationSlug}/${tourSlug}/`,
        ru: `https://globaltouristcentre.com/ru/luxury-trips/${destinationSlug}/${tourSlug}/`,
        "x-default": `https://globaltouristcentre.com/luxury-trips/${destinationSlug}/${tourSlug}/`,
      },
    },

    openGraph: {
      title,
      description,
      siteName: title,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : [],
    },

    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : [],
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
  const { destinationSlug, tourSlug } = params;

  // Train slugs own their rendering at the [destinationSlug] level — do nothing here
  if (TRAIN_SLUGS.includes(destinationSlug as TrainSlug)) {
    notFound();
  }

  /* Validate destination */
  if (!(destinationSlug in luxuryPageContent)) {
    notFound();
  }

  /* Validate tour belongs to destination */
  const tours = DESTINATION_TOURS[destinationSlug] ?? [];

  if (!tours.includes(tourSlug)) {
    notFound();
  }

  return <TourClient tourSlug={tourSlug} />;
}