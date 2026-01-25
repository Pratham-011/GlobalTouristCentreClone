import React from "react";
import type { Metadata } from "next";

import { HomeHero } from "./(home)/HomeHero";
import Homeintro from "./(home)/HomeIntro";
import HomeForm from "./(home)/HomeForm";
import { AboutTestimonials } from "./about/AboutTestimonials";

import { getTranslations } from "@/lib/i18n/getTranslations";

const t = getTranslations("en");

export const metadata: Metadata = {
  title:
    t.metadata?.home?.title ??
    "Global Tourist Centre | Your Journey Begins Here",
  description:
    t.metadata?.home?.description ??
    "Plan your perfect vacation with GTC - Goa's leading travel agency.",
  alternates: {
    canonical: "https://globaltouristcentre.com/",
  },
  openGraph: {
    title: t.metadata?.home?.title,
    description: t.metadata?.home?.description,
    images: ["/assets/hero/Index-hero.webp"],
    siteName: t.metadata?.brandname,
    type: "website",
    url: "https://globaltouristcentre.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: t.metadata?.home?.title,
    description: t.metadata?.home?.description,
    images: [
      {
        url: "/assets/hero/Index-hero.webp",
        width: 1200,
        height: 630,
        alt: t.metadata?.home?.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
