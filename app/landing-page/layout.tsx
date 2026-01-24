import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { PromoPopup } from "@/components/promo-popup";

// Moved OfferBanner and PromoPopup to root layout to avoid conflicts

export const metadata: Metadata = {
  title:
    "Luxury India & Dubai Holiday Packages | Up to 35% OFF | Global Tourist Centre",
  description:
    "Book your dream vacation with Global Tourist Centre. Exclusive deals on India tours, Dubai packages, Kerala backwaters, Goa beaches, and more. Best price guarantee, personalized service, 15+ years of expertise. Get free quotes now!",
  keywords:
    "India tours, Dubai holiday packages, luxury travel India, Kerala backwaters tour, Goa beach vacation, Taj Mahal tour, Rajasthan tour packages, international travel packages, customized holidays, travel agency India, best travel deals, honeymoon packages, family vacation India, adventure tours India, luxury resorts India",
  authors: [{ name: "Global Tourist Centre" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
    shortcut: "/assets/favicon/favicon.ico",
  },
  manifest: "/assets/favicon/site.webmanifest",
  alternates: {
    canonical: "https://globaltouristcentre.com/landing-page",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "it_IT", "fr_FR", "de_DE"],
    url: "https://globaltouristcentre.com/lp",
    siteName: "Global Tourist Centre",
    title: "Luxury India & Dubai Holiday Packages | Up to 35% OFF",
    description:
      "Book your dream vacation with exclusive deals. Kerala, Goa, Dubai, Rajasthan & more. Best price guarantee + personalized service.",
    images: [
      {
        url: "/og-landing.jpg",
        width: 1200,
        height: 630,
        alt: "Global Tourist Centre - Luxury Travel Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury India & Dubai Holiday Packages | Up to 35% OFF",
    description:
      "Book your dream vacation with exclusive deals. Best price guarantee + personalized service.",
    images: ["/og-landing.jpg"],
  },
  alternates: {
    canonical: "https://globaltouristcentre.com/en/landing-page",
    languages: {
      "en-US": "https://globaltouristcentre.com/en/landing-page",
      "ru-RU": "https://globaltouristcentre.com/ru/landing-page",
      "it-IT": "https://globaltouristcentre.com/it/landing-page",
      "fr-FR": "https://globaltouristcentre.com/fr/landing-page",
      "de-DE": "https://globaltouristcentre.com/de/landing-page",
    },
  },
  other: {
    "yandex-verification": "38ec00f62a1f824b",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2332",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Global Tourist Centre",
  description: "Luxury travel experiences since 2010",
  url: "https://globaltouristcentre.com",
  logo: "https://globaltouristcentre.com/logo.png",
  telephone: "+91-9067972295",
  email: "info@globaltouristcentre.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 1492, 3GF5-7, Benaulim Beach Road",
    addressLocality: "Benaulim",
    addressRegion: "Goa",
    postalCode: "403716",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "15.2631",
    longitude: "73.9264",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "21:00",
  },
  sameAs: ["https://www.instagram.com/globaltouristcentre", "https://www.facebook.com/globaltouristcentre"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Dubai Holiday Package",
          description: "Experience Dubai's modern marvels with dhow cruise, desert safari, and more.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Kerala Backwaters Tour",
          description: "Serene houseboat cruises through palm-fringed backwaters.",
        },
      },
    ],
  },
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
              {/* Promo popup */}
          <PromoPopup />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5CNKV323');
    `,
        }}
      />
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0];
        k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(105467216, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `,
        }}
      />

      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="landing-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      {/* Landing page content - no header/footer, just the page content */}
      <div className="min-h-screen flex flex-col">{children}</div>
    </>
  );
}
