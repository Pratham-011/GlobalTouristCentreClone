import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import VisaAgentPage from "./visaclitent";

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
   SEO Metadata
================================ */
export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  /** 1️⃣ Page-specific SEO values */
  const title = t.servicePages.visaAgent.metadata.title;
  const description = t.servicePages.visaAgent.metadata.description;

  /** 2️⃣ Page hero image (ABSOLUTE URL preferred) */
  const image = "/assets/hero/visa-hero.webp";

  /** 3️⃣ Canonical URL */
  const canonical = `https://globaltouristcentre.com/${locale}/visa-agent`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      type: "article", // use "website" for landing pages
      url: canonical,
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
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ================================
   Page Component
================================ */
export default function VisaDocumentationPage() {
  return <VisaAgentPage />;
}
