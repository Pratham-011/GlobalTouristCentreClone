import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import HotelBookingPage from "./hotelclient";

/* ================================
   Types
================================ */
type PageProps = {
  params: {
    locale: string;
  };
};

/* ================================
   Static Params (required for SSG)
================================ */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/* ================================
   SEO Metadata
================================ */
export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.servicePages.hotelBooking.metadata.title;
  const description = t.servicePages.hotelBooking.metadata.description;

  /** 2️⃣ Page hero image (ABSOLUTE URL preferred) */
  const image = "/assets/hero/hotel-booking-hero.webp";

  /** 3️⃣ Canonical URL */
  const canonical = `https://globaltouristcentre.com/services/hotel-booking/`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://globaltouristcentre.com/services/hotel-booking/",
        it: "https://globaltouristcentre.com/it/services/hotel-booking/",
        fr: "https://globaltouristcentre.com/fr/services/hotel-booking/",
        de: "https://globaltouristcentre.com/de/services/hotel-booking/",
        ru: "https://globaltouristcentre.com/ru/services/hotel-booking/",
        "x-default": "https://globaltouristcentre.com/services/hotel-booking/",
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
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
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ================================ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function HotelBooking() {
  return <HotelBookingPage />;
}