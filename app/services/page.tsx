import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import ServicesClient from "./ServicesClient";


/* ================================
   Types
================================ */
type PageProps = {
  params: {
    locale: string;
  };
};



/* ================================
   SEO Metadata
================================ */
export function generateMetadata(): Metadata {
  const locale = "en";
  const t = getTranslations(locale);

  const title = t.metadata?.services?.title || "Our Services | Global Tourist Centre";
  const description = t.metadata?.services?.description || "Custom travel solutions with Global Tourist Centre - visa assistance, hotel bookings, and travel packages.";


  const image = "/assets/hero/Service-hero.webp";

  const canonical = `https://globaltouristcentre.com/services/`;
  return {
    title,
    description,

    alternates: {
      canonical,
                  languages: {
        en: "https://globaltouristcentre.com/services/",
        it: "https://globaltouristcentre.com/it/services/",
        fr: "https://globaltouristcentre.com/fr/services/",
        de: "https://globaltouristcentre.com/de/services/",
        ru: "https://globaltouristcentre.com/ru/services/",
        "x-default": "https://globaltouristcentre.com/services/",
      },
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

export default function ServicesPage() {
  return <ServicesClient />;
}
