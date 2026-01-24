import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import FlightBookingPage from "./flightclient";

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

  const title = t.servicePages.flightBooking.metadata.title;
  const description = t.servicePages.flightBooking.metadata.description;

  /** 2️⃣ Page hero image (ABSOLUTE URL preferred) */
  const image = "/assets/hero/flight-booking-hero.webp";

  /** 3️⃣ Canonical URL */
  const canonical = `https://globaltouristcentre.com/${locale}/flight-booking`;

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
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ================================ */
/* PAGE */
/* ================================ */
export default function FlightBooking() {
  return <FlightBookingPage />;
}