import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import GoaBlogPage from "./goaclient";

type PageProps = {
  params: {
    locale: string;
  };
};

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/* ------------------------------------------------------------------ */
/* SEO METADATA (i18n-aware) */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.blogGoa.metadata.title;
  const description = t.blogGoa.metadata.description;
  const image = "/assets/blog/goa/Basilica.png";
  const canonical = `https://globaltouristcentre.com/${locale}/blog/colonial-heritage-of-goa-and-india/`;

  return {
    title,
    description,
    alternates: {
      canonical,
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
      title,
      description,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: t.blogGoa.introImageAlt,
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
export default function GoaBlog() {
  return <GoaBlogPage />;
}
