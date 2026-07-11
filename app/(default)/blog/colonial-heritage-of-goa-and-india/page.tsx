import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import GoaBlogPage from "./goaclient";

/* ------------------------------------------------------------------ */
/* TRANSLATIONS (ENGLISH SOURCE OF TRUTH) */
/* ------------------------------------------------------------------ */
const t = getTranslations("en");

/* ------------------------------------------------------------------ */
/* SEO METADATA (ENGLISH ONLY) */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: t.blogGoa.metadata.title,
  description: t.blogGoa.metadata.description,
  alternates: {
    canonical:
      "https://globaltouristcentre.com/blog/colonial-heritage-of-goa-and-india/",
    languages: {
      en: "https://globaltouristcentre.com/blog/colonial-heritage-of-goa-and-india/",
      it: "https://globaltouristcentre.com/it/blog/colonial-heritage-of-goa-and-india/",
      fr: "https://globaltouristcentre.com/fr/blog/colonial-heritage-of-goa-and-india/",
      de: "https://globaltouristcentre.com/de/blog/colonial-heritage-of-goa-and-india/",
      ru: "https://globaltouristcentre.com/ru/blog/colonial-heritage-of-goa-and-india/",
      "x-default":
        "https://globaltouristcentre.com/blog/colonial-heritage-of-goa-and-india/",
    },
  },
  openGraph: {
    title: t.blogGoa.metadata.title,
    description: t.blogGoa.metadata.description,
    type: "article",
    images: [
      {
        url: "/assets/blog/goa/Basilica.png",
        width: 1200,
        height: 630,
        alt: t.blogGoa.introImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.blogGoa.metadata.title,
    description: t.blogGoa.metadata.description,
    images: ["/assets/blog/goa/Basilica.png"],
  },
};

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function GoaBlog() {
  return <GoaBlogPage />;
}
