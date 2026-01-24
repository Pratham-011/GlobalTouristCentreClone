import { AboutHero } from "./AboutHero";
import { AboutIntro } from "./AboutIntro";
import { AboutValues } from "./AboutValues";
import { AboutTeam } from "./AboutTeam";
import { AboutTestimonials } from "./AboutTestimonials";
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
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = getTranslations(params.locale);
  const title = t.metadata?.about?.title || "About Us | Global Tourist Centre";
  const description = t.metadata?.about?.description || "Learn about Global Tourist Centre - your trusted travel partner since 2010.";
  const image = "/assets/hero/About-hero.webp";
  const canonical = `https://globaltouristcentre.com/${params.locale}/about`; 

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
