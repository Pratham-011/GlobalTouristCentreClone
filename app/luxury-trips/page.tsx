import LuxuryDestinationsPage from "./luxury-client"

import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

/* ================================
   Types
================================ */
type PageProps = {
  params: {
    locale: string;
  };
};

/* ---------- STATIC PARAMS (REQUIRED FOR EXPORT) ---------- */
export async function generateStaticParams() {
  const params: { locale: string}[] = [];

  for (const locale of LOCALES) {
    for (const category of Object.keys(TOUR_CATEGORIES)) {
      params.push({ locale });
    }
  }

  return params;
}


export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.metadata?.luxuryDestinations?.title || "Luxury Destinations | Global Tourist Centre";
  const description = t.metadata?.luxuryDestinations?.description || "Discover luxury destinations with Global Tourist Centre - the perfect blend of comfort and style.";

  const image = "/assets/dubai-skyline-burj-khalifa-luxury-evening.jpg";
  const canonical = `https://globaltouristcentre.com/${locale}/luxury-trips`;

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
}
}
export default function Page() {
  return <LuxuryDestinationsPage />;
}
