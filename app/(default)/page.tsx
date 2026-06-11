import React from "react";
import type { Metadata } from "next";

import { HomeHero } from "./(home)/HomeHero";
import Homeintro from "./(home)/HomeIntro";
import HomeForm from "./(home)/HomeForm";
import { AboutTestimonials } from "./about/AboutTestimonials";

import { getTranslations } from "@/lib/i18n/getTranslations";

const t = getTranslations("en");


export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;

  const title =
    t.metadata?.home?.title ??
    "Global Tourist Centre | Your Journey Begins Here";

  const description =
    t.metadata?.home?.description ??
    "Plan your perfect vacation with GTC - Goa's leading travel agency.";
  const image = "/assets/hero/Index-hero.webp";
  const canonical = "https://globaltouristcentre.com/";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://globaltouristcentre.com/",
        it: "https://globaltouristcentre.com/it/",
        fr: "https://globaltouristcentre.com/fr/",
        de: "https://globaltouristcentre.com/de/",
        ru: "https://globaltouristcentre.com/ru/",
        "x-default": "https://globaltouristcentre.com/",
      },
    },

    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: t.metadata?.brandname,
      type: "website",
      url: canonical,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}


export default function Page() {
  return (
    <>
      <HomeHero />
      <Homeintro />
      <HomeForm />
      <AboutTestimonials />
    </>
  );
}
