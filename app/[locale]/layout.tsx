import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/lib/i18n/context";
import { Footer } from "@/components/footer";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { CookieBanner } from "@/components/cookie-banner";
import { locales } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/translations";
import "../globals.css";
import Script from "next/script";
import { notFound } from "next/navigation";



/* -----------------------------
   Fonts
------------------------------ */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});
/* -----------------------------
   Static Params for locales
------------------------------ */
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/* -----------------------------
   Metadata (base – overridden per page)
------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;

  return {
    title: "Global Tourist Centre | Luxury Travel Experiences",
    description:
      "We don't just book trips — we design lifetimes of stories. Bespoke domestic and international tours since 2010.",
    keywords: [
      "luxury travel",
      "tour packages",
      "India tours",
      "international travel",
      "Goa tours",
      "Kerala luxury trips",
    ],
    metadataBase: new URL("https://globaltouristcentre.com"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}/`,
      languages: {
        en: "/",
        ru: "/ru/",
        it: "/it/",
        fr: "/fr/",
        de: "/de/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Global Tourist Centre",
    },
  };
}

/* -----------------------------
   Viewport
------------------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2332",
};

/* -----------------------------
   Root Layout
------------------------------ */
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  // app/[locale]/layout.tsx
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `https://globaltouristcentre.com/${params.locale}`,
    "name": "Global Tourist Centre",
    "url": `https://globaltouristcentre.com/${params.locale}`,
    "image": "https://globaltouristcentre.com/wp-content/uploads/2024/05/logo.webp",
    "telephone": "+91-9067972295",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Benaulim Beach Road, South Goa",
      "addressLocality": "Benaulim",
      "addressRegion": "Goa",
      "postalCode": "403716",
      "addressCountry": "IN"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.2602,
      "longitude": 73.9272
    },

    "sameAs": [
      "https://www.facebook.com/globaltouristcentre",
      "https://www.instagram.com/globaltouristcentre"
    ],

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Our Services & Top Trips",
      "itemListElement": [

        {
          "@type": "OfferCatalog",
          "name": "Our Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Domestic & International Trips",
                "url": `https://globaltouristcentre.com/${params.locale}/service/domestic-and-international-trips`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Customized Tours",
                "url": `https://globaltouristcentre.com/${params.locale}/service/customize-trip-package`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Visa Documentation",
                "url": `https://globaltouristcentre.com/${params.locale}/service/visa-agent`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hotel Booking",
                "url": `https://globaltouristcentre.com/${params.locale}/service/hotel-booking`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Flight Booking",
                "url": `https://globaltouristcentre.com/${params.locale}/service/flight-booking`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Group Tours",
                "url": `https://globaltouristcentre.com/${params.locale}/service/customized-group-trip`
              }
            }
          ]
        },

        {
          "@type": "OfferCatalog",
          "name": "Top 3 Domestic Trips",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/destination/domestic/kashmir-tour-package-from-goa`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Kashmir 5N/6D Trip",
                "description": "Explore the beauty of Kashmir with a 5-night, 6-day tour covering Srinagar, Gulmarg, and Pahalgam."
              }
            },
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/destination/domestic/ladakh-tour-package-from-goa`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Ladakh Tour for Goa",
                "description": "Adventure-filled trip from Goa to Ladakh featuring scenic landscapes, monasteries, and mountain passes."
              }
            },
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/destination/domestic/sikkim-darjeeling-gangtok-tour-from-goa`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Sikkim Tour for Goa",
                "description": "Multi-day mountain adventure from Goa to Sikkim, covering Gangtok, Nathula Pass, and local monasteries."
              }
            }
          ]
        },

        {
          "@type": "OfferCatalog",
          "name": "Top 3 International Trips",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/destination/international/7n-8d-vietam-tour-package`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "7N/8D Vietnam Tour Package",
                "description": "Experience Vietnam's culture and landscapes with an 8-day guided tour covering Hanoi, Halong Bay, and Ho Chi Minh City."
              }
            },
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/destination/international/7n-8d-bhutan-tour-package`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "7N/8D Bhutan Tour Package",
                "description": "Explore the serene beauty of Bhutan, visiting Paro, Thimphu, and Punakha with a peaceful 8-day itinerary."
              }
            },
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/destination/international/nepal-tour-package`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Nepal Tour Package",
                "description": "Discover the heritage and spirituality of Nepal, covering Kathmandu, Pokhara, and key cultural sites."
              }
            }
          ]
        },

        {
          "@type": "OfferCatalog",
          "name": "Top 3 Luxury Trips",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/luxury-trips/kerala-luxury`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Kerala Luxury Trip",
                "description": "Luxury getaway in Kerala featuring backwater cruises, private villas, and rejuvenating spa experiences."
              }
            },
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/luxury-trips/mumbai-luxury`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Mumbai Luxury Experience",
                "description": "Exclusive Mumbai experience with luxury stays, private guided tours, and fine dining options."
              }
            },
            {
              "@type": "Offer",
              "url": `https://globaltouristcentre.com/${params.locale}/luxury-trips/golden-triangle-luxury`,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Golden Triangle Luxury Tour",
                "description": "Luxury exploration of Delhi, Agra, and Jaipur with 5-star accommodation and private chauffeur services."
              }
            }
          ]
        }

      ]
    }
  };

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero/Index-hero-sm.webp"
          imageSrcSet="/assets/hero/Index-hero-sm.webp 640w, /assets/hero/Index-hero-md.webp 1024w, /assets/hero/Index-hero.webp 1920w"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-sans relative">
        <I18nProvider locale={locale}>
          {/* Header */}
          {/* <Header /> */}

          {/* Main content */}
          <main id="main-content" role="main" className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* WhatsApp CTA */}
          <WhatsAppButton
            phoneNumber="919067972295"
            message="Hi! I am planning a trip, can you help me out?"
            tooltipText="Chat with us on WhatsApp"
          />
          <CookieBanner />
        </I18nProvider>
        <Script
          id="travel-agency-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencySchema),
          }}
        />

        <Analytics />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CNKV323"
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            src="https://mc.yandex.ru/watch/105467216"
            style={{ position: "absolute", left: "-9999px" }}
            decoding="async"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
