import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";
import DestinationsClient from "./DestinationsClient";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

type PageProps = {
  params: {
    locale: string;
  };
};

/* ---------- STATIC PARAMS (REQUIRED FOR EXPORT) ---------- */
export async function generateStaticParams() {
  const params: { locale: string }[] = [];

  for (const locale of LOCALES) {
    for (const category of Object.keys(TOUR_CATEGORIES)) {
      params.push({ locale });
    }
  }

  return params;
}


export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const locale = params.locale || "en";
  const t = getTranslations(locale);

  const image ="/assets/hero/Destinations-hero.webp";
  const canonical = `https://globaltouristcentre.com/${locale}/destinations`;

  const meta = t.metadata.destinations;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [image],
      siteName: t.metadata.brandname,
      type: "website",
      url: canonical,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: "summary_large_image",
      images: [ 
        {
          url: image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ---------- SERVER COMPONENT ---------- */
export default function DestinationsPage() {
  return <DestinationsClient />;
}
