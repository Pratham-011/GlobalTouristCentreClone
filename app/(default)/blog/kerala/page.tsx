import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import KeralaBlogPage from "./keralaclient";

/* ------------------------------------------------------------------ */
/* TRANSLATIONS (ENGLISH SOURCE OF TRUTH) */
/* ------------------------------------------------------------------ */
const t = getTranslations("en");

/* ------------------------------------------------------------------ */
/* SEO METADATA (ENGLISH ONLY) */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: t.blogKerala.metadata.title,
  description: t.blogKerala.metadata.description,
  alternates: {
    canonical: "https://globaltouristcentre.com/blog/kerala/",
              languages: {
        en: "https://globaltouristcentre.com/blog/kerala/",
        it: "https://globaltouristcentre.com/it/blog/kerala/",
        fr: "https://globaltouristcentre.com/fr/blog/kerala/",
        de: "https://globaltouristcentre.com/de/blog/kerala/",
        ru: "https://globaltouristcentre.com/ru/blog/kerala/",
        "x-default": "https://globaltouristcentre.com/blog/kerala/",
      },
  },
  openGraph: {
    title: t.blogKerala.metadata.title,
    description: t.blogKerala.metadata.description,
    type: "article",
    images: [
      {
        url: "/assets/hero/Kerala-hero.webp",
        width: 1200,
        height: 630,
        alt: "Traditional Kerala houseboat surrounded by palm trees and pink water lilies in the backwaters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.blogKerala.metadata.title,
    description: t.blogKerala.metadata.description,
    images: ["/assets/hero/Kerala-hero.webp"],
  },
};

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function KeralaBlog() {
  return <KeralaBlogPage />;
}
