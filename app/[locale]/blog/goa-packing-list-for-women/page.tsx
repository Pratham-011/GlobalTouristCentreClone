import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import GoaPackingListClient from "./goa-packing-list-client";
import { faqSchema } from "./faq-schema";

type PageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = "Goa Packing List for Women: Stop Packing the Wrong Clothes!";
  const description =
    "Planning a trip to Goa? Explore this complete Goa packing list for women, covering clothes, beachwear, skincare, travel essentials, and safety tips for foreign travellers.";
  const image = "/assets/blog/goa/goa-packing-list-thumbnail.jpeg";
  const canonical = `https://globaltouristcentre.com/${locale}/blog/goa-packing-list-for-women/`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://globaltouristcentre.com/blog/goa-packing-list-for-women/",
        it: "https://globaltouristcentre.com/it/blog/goa-packing-list-for-women/",
        fr: "https://globaltouristcentre.com/fr/blog/goa-packing-list-for-women/",
        de: "https://globaltouristcentre.com/de/blog/goa-packing-list-for-women/",
        ru: "https://globaltouristcentre.com/ru/blog/goa-packing-list-for-women/",
        "x-default": "https://globaltouristcentre.com/blog/goa-packing-list-for-women/",
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

export default function GoaPackingListBlog() {
  return (
    <>
      <GoaPackingListClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
