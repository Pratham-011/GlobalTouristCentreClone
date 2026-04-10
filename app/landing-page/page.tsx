import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";

import { OfferBanner } from "@/components-eng/offer-banner";
import { getTranslations } from "@/lib/i18n/getTranslations";

import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"));
const Memories = dynamic(() => import("./Memories"));
const Services = dynamic(() => import("./Services"));
const CuratedTravel = dynamic(() => import("./CuratedTravel"));
import Signature from "./Signature";
import Hero from "./Hero";

/* ------------------------------------------------------------------ */
/* TRANSLATIONS (ENGLISH SOURCE OF TRUTH) */
/* ------------------------------------------------------------------ */
const t = getTranslations("en");

/* ------------------------------------------------------------------ */
/* METADATA (ENGLISH ONLY) */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: t.metadata.landingPage.title,
  description: t.metadata.landingPage.description,
  alternates: {
    canonical: "https://globaltouristcentre.com/landing-page",
  },
  openGraph: {
    title: t.metadata.landingPage.title,
    description: t.metadata.landingPage.description,
    images: ["/assets/luxury-travel-destination-mountains-sunset.webp"],
    siteName: t.metadata.brandname,
    type: "website",
    url: "https://globaltouristcentre.com/landing-page",
  },
  twitter: {
    title: t.metadata.landingPage.title,
    description: t.metadata.landingPage.description,
    card: "summary_large_image",
    images: [
      {
        url: "/assets/luxury-travel-destination-mountains-sunset.webp",
        width: 1200,
        height: 630,
        alt: t.metadata.landingPage.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function LandingPage() {
  return (
    <div className="bg-background">
      {/* Skip to main content link for accessibility */}
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
        Skip to booking form
      </a>

      {/* MAIN LANDMARK */}
      <main id="main-content">
        {/* JSON-LD Schema */}
        <Script
          id="landing-page-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://globaltouristcentre.com/#organization",
                  name: "Global Tourist Centre",
                  url: "https://globaltouristcentre.com",
                  logo: "https://globaltouristcentre.com/logo.webp",
                  foundingDate: "2010",
                  sameAs: [
                    "https://www.instagram.com/globaltouristcentre",
                    "https://www.facebook.com/globaltouristcentre",
                  ],
                },
                {
                  "@type": "TravelAgency",
                  "@id": "https://globaltouristcentre.com/#travelagency",
                  name: "Global Tourist Centre",
                  url: "https://globaltouristcentre.com/landing-page",
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Goa",
                    addressCountry: "IN",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "10000",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Free Airport Pickup with Every Tour",
                  description:
                    "Free luxury airport transfer included with every tour booking. Valid for new bookings only.",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@id": "https://globaltouristcentre.com/#travelagency",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Do Goa tour packages include airport pickup?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Yes. All Goa tour packages booked with Global Tourist Centre include free airport pickup for a safe and comfortable arrival.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long has Global Tourist Centre been operating?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Global Tourist Centre has been designing curated luxury travel experiences since 2010.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Are these tours suitable for families and couples?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Yes. Our tours are ideal for families, honeymoon couples, and travelers seeking premium experiences.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* Sections */}
        <Hero />
        <OfferBanner />
        <Signature />
        <CuratedTravel />
        <Services />
        <Testimonials />
        <Memories />
      </main>
    </div>
  );
}
