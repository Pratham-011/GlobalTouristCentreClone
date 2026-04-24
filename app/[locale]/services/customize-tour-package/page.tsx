import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import CustomizeTripPackagePage from "./customizedtripclient";


/* ================================
   Static Params (required for SSG)
================================ */
type PageProps = {
  params: {
    locale: string;
  };
};
/* ================================
   SEO Metadata
================================ */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.servicePages.customizeTripPackage.metadata.title;
  const description = t.servicePages.customizeTripPackage.metadata.description;

    /** 2️⃣ Page hero image (ABSOLUTE URL preferred) */ 
  const image = "/assets/services/custom-tour-about.webp";

  /** 3️⃣ Canonical URL */
  const canonical = `https://globaltouristcentre.com/${locale}/customized-trip-package`;


  return {
    title,  
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "article",
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
  };
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function CustomizeTripPackage() {
  return <CustomizeTripPackagePage />;
}