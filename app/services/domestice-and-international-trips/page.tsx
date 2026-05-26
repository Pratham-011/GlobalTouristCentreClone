import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import DomesticInternationalTripsPage from "./domesticleint";

/* ================================
   Types
================================ */
type PageProps = {
  params: {
    locale: string;
  };
};

/* ================================
   Static Params (required for SSG)
================================ */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/* ================================
   SEO Metadata (i18n-aware)
================================ */
export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.servicePages.domesticInternational.metadata.title;
  const description = t.servicePages.domesticInternational.metadata.description;


  /** 2️⃣ Page hero image (ABSOLUTE URL preferred) */
  const image = "/assets/hero/domestic-international-hero.webp";

  /** 3️⃣ Canonical URL */
  const canonical = `https://globaltouristcentre.com/services/domestice-and-international-trips/`;


  return {
    title,
    description,
        alternates: {
      canonical,
      languages: {
        en: "https://globaltouristcentre.com/services/domestice-and-international-trips/",
        it: "https://globaltouristcentre.com/it/services/domestice-and-international-trips/",
        fr: "https://globaltouristcentre.com/fr/services/domestice-and-international-trips/",
        de: "https://globaltouristcentre.com/de/services/domestice-and-international-trips/",
        ru: "https://globaltouristcentre.com/ru/services/domestice-and-international-trips/",
        "x-default": "https://globaltouristcentre.com/services/domestice-and-international-trips/",
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: "/assets/hero/domestic-international-hero.webp",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/hero/domestic-international-hero.webp"],
    },
  };
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function DomesticInternationalTrips() {
  return <DomesticInternationalTripsPage />;
}