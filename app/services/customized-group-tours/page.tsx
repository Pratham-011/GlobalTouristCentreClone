import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import CustomizedGroupTripPage from "./customizedclient";

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

  const title = t.servicePages.groupTrip.metadata.title;
  const description = t.servicePages.groupTrip.metadata.title;

    /** 2️⃣ Page hero image (ABSOLUTE URL preferred) */
  const image = "/assets/services/group-tour-about.webp";

  /** 3️⃣ Canonical URL */
  const canonical = `https://globaltouristcentre.com/${locale}/customized-group-tours`;


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
  };
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function CustomizedGroupTripDocumentation() {
  return <CustomizedGroupTripPage />;
}