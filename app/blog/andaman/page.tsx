import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import AndamanBlogPage from "./andamanclent";

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

  const title = t.blogAndaman.metadata.title;
  const description = t.blogAndaman.metadata.description;
  const image = "/assets/hero/Andaman-hero.webp";
  const canonical = `https://globaltouristcentre.com/${locale}/blog/andaman`;

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
export default function AndamanBlog() {
  return <AndamanBlogPage />;
}
