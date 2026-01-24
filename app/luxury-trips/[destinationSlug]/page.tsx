import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LuxuryClient } from "./categoey-client";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { luxuryPageContent, LuxurySlug } from "@/lib/data/luxury-page-content";
/* ------------------------------------------------------------------ */
/* VALID SLUGS */
/* ------------------------------------------------------------------ */
const VALID_SLUGS = [
  "kerala-luxury",
  "mumbai-luxury",
  "golden-triangle-luxury",
  "rajasthan-luxury",
  "karnataka-luxury",
] as const;

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
export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const { locale, destinationSlug } = params;
  const t = getTranslations(locale);

  const pageData = t.luxuryPages?.[destinationSlug];

  if (!pageData) {
    return {
      title: "Luxury Tours",
      description:"Explore curated luxury travel experiences with premium stays and personalized service.",
    };
  }

  const image =  luxuryPageContent[destinationSlug].image;

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
      images: [image],
      siteName: t.metadata.brandname,
      type: "website",
      url: canonical,
    },
    twitter: {
      title: pageData.metadata.title,
      description: pageData.metadata.description,
      card: "summary_large_image",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageData.metadata.title,
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
export default function LuxuryDestinationPage({ params }: PageProps) {
  const { destinationSlug } = params;

  if (!VALID_SLUGS.includes(destinationSlug)) {
    notFound();
  }

return <LuxuryClient params={{ slug: destinationSlug as any }} />;
}
