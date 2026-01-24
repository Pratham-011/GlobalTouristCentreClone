import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

import { getDestinationBySlug } from "../get-destination";
import { DestinationsGridSection } from "./DestinationsGridSection";
import { HeroSection } from "@/components/hero-section";
import HomeForm from "../../(home)/HomeForm";

import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */
type PageProps = {
  params: {
    locale: string;
    category: string;
  };
};

/* ------------------------------------------------------------------ */
/* STATIC PARAMS (REQUIRED FOR output: "export") */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  const categories = Object.keys(TOUR_CATEGORIES);

  return LOCALES.flatMap((locale) =>
    categories.map((category) => ({
      locale,
      category,
    }))
  );
}

function getCategoryContent(
  category: string,
  t: ReturnType<typeof getTranslations>
) {
  switch (category) {
    case "domestic":
      return {
        heroTitle: t.destinations.domesticTitle,
        subtitle: t.destinations.domesticSubtitle,
      };

    case "international":
      return {
        heroTitle: t.destinations.internationalTitle,
        subtitle: t.destinations.internationalSubtitle,
      };

    case "day-trips":
      return {
        heroTitle: t.destinations.dayTripsTitle,
        subtitle: t.destinations.dayTripsSubtitle,
      };

    default:
      return null;
  }
}

function getMetaContent(
  category: string,
  t: ReturnType<typeof getTranslations>
) {
  switch (category) {
    case "domestic":
      return {
        title: t.metadata.domestic.title,
        description: t.metadata.domestic.description,
      };

    case "international":
      return {
        title: t.metadata.international.title,
        description: t.metadata.international.description,
      };

    case "day-trips":
      return {
        title: t.metadata["day-trips"].title,
        description: t.metadata["day-trips"].description,
      };

    default:
      return null;
  }
}
function getHeroContent(
  category: string,
  t: ReturnType<typeof getTranslations>
) {
  switch (category) {
    case "domestic":
      return {
        heroTitle: t.destinations.domestichero,
      };

    case "international":
      return {
        heroTitle: t.destinations.internationalhero,
      };

    case "day-trips":
      return {
        heroTitle: t.destinations.dayhero,
      };

    default:
      return null;
  }
}


/* ------------------------------------------------------------------ */
/* SEO METADATA (i18n-aware, slug-based) */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, category } = params;
  const t = getTranslations(locale);

  const content = getMetaContent(category, t);
  const data = getDestinationBySlug(category);

  if (!content || !data) {
    return {
      title: t.common?.notFoundTitle ?? "Destinations Not Found",
      description:
        t.common?.notFoundDescription ?? "The requested destination category does not exist.",
    };
  }

  const image = `/assets/hero/${data.heroImageQuery}`;
  const canonical = `https://globaltouristcentre.com/${locale}/destinations/${category}`;


  return {
    title: `${content.title}`,
    description: content.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${content.title}`,
      description: content.description,
      images: [image],
      type: "website",
      url: canonical,
    },
    twitter: {
      title: `${content.title}`,
      description: content.description,
      card: "summary_large_image",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}




/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function DestinationsCategoryPage({ params }: PageProps) {
  const { category, locale } = params;

  const data = getDestinationBySlug(category);
  if (!data) notFound();

  const t = getTranslations(locale);
  const content = getHeroContent(category, t);
  if (!content) notFound();

  return (
    <main>
      {/* HERO SECTION */}
      <HeroSection
        title={content.heroTitle}
        backgroundQuery={data.heroImageQuery}
      />

      {/* DESTINATIONS GRID */}
      <DestinationsGridSection
        slug={category as keyof typeof TOUR_CATEGORIES}
        title={data.title}
        subtitle={data.subtitle}
        items={data.items}
      />

      {/* REACH OUT FORM */}
      <HomeForm />
    </main>
  );
}

