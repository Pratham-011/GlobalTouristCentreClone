import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import ServicesClient from "./ServicesClient";
import { LOCALES } from "@/lib/data/tour-slugs";

/* ================================
   Types
================================ */
type PageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/* ================================
   SEO Metadata
================================ */
export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.metadata?.services?.title || "Our Services | Global Tourist Centre";
  const description = t.metadata?.services?.description || "Custom travel solutions with Global Tourist Centre - visa assistance, hotel bookings, and travel packages.";
 

    const image = "/assets/hero/Service-hero.webp";

    const canonical = `https://globaltouristcentre.com/${locale}/services`;
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

export default function ServicesPage() {
  return <ServicesClient />;
}
