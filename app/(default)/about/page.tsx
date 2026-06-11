import { AboutHero } from "./AboutHero";
import { AboutIntro } from "./AboutIntro";
import { AboutValues } from "./AboutValues";
import { AboutTeam } from "./AboutTeam";
import { AboutTestimonials } from "./AboutTestimonials";

import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

/* ------------------------------------------------------------------ */
/* TRANSLATIONS (ENGLISH SOURCE OF TRUTH) */
/* ------------------------------------------------------------------ */
const t = getTranslations("en");

/* ------------------------------------------------------------------ */
/* METADATA (ENGLISH ONLY) */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    t.metadata?.about?.title ||
    "About Us | Global Tourist Centre",
  description:
    t.metadata?.about?.description ||
    "Learn about Global Tourist Centre - your trusted travel partner since 2010.",
  alternates: {
    canonical: "https://globaltouristcentre.com/about/",
      languages: {
        en: "https://globaltouristcentre.com/about/",
        it: "https://globaltouristcentre.com/it/about/",
        fr: "https://globaltouristcentre.com/fr/about/",
        de: "https://globaltouristcentre.com/de/about/",
        ru: "https://globaltouristcentre.com/ru/about/",
        "x-default": "https://globaltouristcentre.com/about/",
      },
  },
  openGraph: {
    title:
      t.metadata?.about?.title ||
      "About Us | Global Tourist Centre",
    description:
      t.metadata?.about?.description ||
      "Learn about Global Tourist Centre - your trusted travel partner since 2010.",
    images: ["/assets/hero/About-hero.webp"],
    siteName: t.metadata?.brandname,
    type: "website",
    url: "https://globaltouristcentre.com/about",
  },
  twitter: {
    title:
      t.metadata?.about?.title ||
      "About Us | Global Tourist Centre",
    description:
      t.metadata?.about?.description ||
      "Learn about Global Tourist Centre - your trusted travel partner since 2010.",
    card: "summary_large_image",
    images: [
      {
        url: "/assets/hero/About-hero.webp",
        width: 1200,
        height: 630,
        alt: "About Global Tourist Centre",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutTeam />
      <AboutTestimonials />
    </>
  );
}
