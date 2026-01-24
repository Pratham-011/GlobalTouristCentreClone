import React from 'react'
import { HomeHero } from './(home)/HomeHero'
import Homeintro from './(home)/HomeIntro'
import HomeForm from './(home)/HomeForm'
import { AboutTestimonials } from './about/AboutTestimonials'
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";

type PageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const t = getTranslations(params.locale);
  const title = t.metadata?.home?.title || "Global Tourist Centre | Your Journey Begins Here";
  const description = t.metadata?.home?.description || "Plan your perfect vacation with GTC - Goa's leading travel agency. From domestic tours to international holidays, we offer personalized packages.";
  const image = "/assets/hero/Index-hero.webp";
  const canonical = `https://globaltouristcentre.com/${params.locale}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      images: [image],
      siteName: t.metadata?.brandname,
      type: "website",
      url: canonical,
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
    robots: {
      index: true,
      follow: true,
    },
  };
}
const page = () => {
  return (
    <>
      <HomeHero />
      <Homeintro />
      <HomeForm />
      <AboutTestimonials />
    </>
  )
}

export default page