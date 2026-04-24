import { LOCALES } from "@/lib/data/tour-slugs";
import DestinationsClient from "./DestinationsClient";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

type PageProps = {
  params: {
    locale: string;
  };
};




export async function generateMetadata(): Promise<Metadata> {
  const locale = "en";
  const t = getTranslations(locale);

  const image = "/assets/hero/Destinations-hero.webp";
  const canonical = `https://globaltouristcentre.com/destinations`;

  const meta = t.metadata.destinations;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [image],
      siteName: t.metadata.brandname,
      type: "website",
      url: canonical,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: "summary_large_image",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ---------- SERVER COMPONENT ---------- */
export default function DestinationsPage() {
  return <DestinationsClient />;
}
