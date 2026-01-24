import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import KeralaBlogPage from "./keralaclient";

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
export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.blogKerala.metadata.title;
  const description = t.blogKerala.metadata.description;
  const image = "/assets/hero/Kerala-hero.webp";
  const canonical = `https://globaltouristcentre.com/${locale}/blog/kerala`;

  return {
    title,
    description,
    alternates: {
      canonical,
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
          alt: title,
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
export default function KeralaBlog() {
  return <KeralaBlogPage />;
}
