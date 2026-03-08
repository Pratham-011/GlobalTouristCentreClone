import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LuxuryClient } from "./categoey-client";
import { TrainJourneyClient } from "../components/train-journey/train-journey-client";

import { getTranslations } from "@/lib/i18n/getTranslations";
import { luxuryPageContent } from "@/lib/data/luxury-page-content";

/* ------------------------------------------------------------------ */
/* SLUG GROUPS */
/* ------------------------------------------------------------------ */

const DESTINATION_SLUGS = [
  "kerala-luxury",
  "mumbai-luxury",
  "golden-triangle-luxury",
  "rajasthan-luxury",
  "karnataka-luxury",
] as const;

const TRAIN_SLUGS = [
  "mahraja-train-tour-package",
] as const;

const VALID_SLUGS = [...DESTINATION_SLUGS, ...TRAIN_SLUGS] as const;

type DestinationSlug = (typeof DESTINATION_SLUGS)[number];
type TrainSlug = (typeof TRAIN_SLUGS)[number];
type LuxurySlug = (typeof VALID_SLUGS)[number];

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

type PageProps = {
  params: {
    locale: string;
    destinationSlug: LuxurySlug;
  };
};

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return VALID_SLUGS.map((destinationSlug) => ({
    destinationSlug,
  }));
}

/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, destinationSlug } = params;

  const t = getTranslations(locale);

  const isTrain = TRAIN_SLUGS.includes(destinationSlug as TrainSlug);

  const pageData = isTrain
    ? t.luxuryTrain?.[destinationSlug]
    : t.luxuryPages?.[destinationSlug];

  if (!pageData) {
    return {
      title: "Luxury Tours",
      description:
        "Explore curated luxury travel experiences with premium stays and personalized service.",
    };
  }

  const image = isTrain
    ? t.luxuryTrain?.[destinationSlug]?.image
    : luxuryPageContent[destinationSlug as DestinationSlug]?.image;

  const canonical = `https://globaltouristcentre.com/${locale}/luxury-trips/${destinationSlug}`;

  return {
    title: pageData.metadata.title,
    description: pageData.metadata.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: pageData.metadata.title,
      description: pageData.metadata.description,
      images: image ? [image] : [],
      siteName: t.metadata.brandname,
      type: "website",
      url: canonical,
    },

    twitter: {
      title: pageData.metadata.title,
      description: pageData.metadata.description,
      card: "summary_large_image",
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: pageData.metadata.title,
            },
          ]
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

export default function LuxuryDestinationPage({ params }: PageProps) {
  const { destinationSlug } = params;

  if (!VALID_SLUGS.includes(destinationSlug)) {
    notFound();
  }

  const isTrain = TRAIN_SLUGS.includes(destinationSlug as TrainSlug);

  if (isTrain) {
    return <TrainJourneyClient slug={destinationSlug as any} />;
  }

  return <LuxuryClient params={{ slug: destinationSlug  as any}} />;
}