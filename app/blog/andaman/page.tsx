import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import AndamanBlogPage from "./andamanclent";

/* ------------------------------------------------------------------ */
/* TRANSLATIONS (ENGLISH SOURCE OF TRUTH) */
/* ------------------------------------------------------------------ */
const t = getTranslations("en");

/* ------------------------------------------------------------------ */
/* SEO METADATA (ENGLISH ONLY) */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: t.blogAndaman.metadata.title,
  description: t.blogAndaman.metadata.description,
  alternates: {
    canonical: "https://globaltouristcentre.com/blog/andaman",
          languages: {
        en: "https://globaltouristcentre.com/blog/andaman",
        it: "https://globaltouristcentre.com/it/blog/andaman",
        fr: "https://globaltouristcentre.com/fr/blog/andaman",
        de: "https://globaltouristcentre.com/de/blog/andaman",
        ru: "https://globaltouristcentre.com/ru/blog/andaman",
        "x-default": "https://globaltouristcentre.com/blog/andaman",
      },
  },
  openGraph: {
    title: t.blogAndaman.metadata.title,
    description: t.blogAndaman.metadata.description,
    type: "article",
    images: [
      {
        url: "/assets/hero/Andaman-hero.webp",
        width: 1200,
        height: 630,
        alt: t.blogAndaman.metadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.blogAndaman.metadata.title,
    description: t.blogAndaman.metadata.description,
    images: ["/assets/hero/Andaman-hero.webp"],
  },
};

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function AndamanBlog() {
  return <AndamanBlogPage />;
}
