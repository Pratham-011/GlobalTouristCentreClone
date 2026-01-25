import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

import { I18nProvider } from "@/lib/i18n/context";
import { Footer } from "@/components-eng/footer";
import { WhatsAppButton } from "@/components-eng/whatsapp-button";

import "./globals.css";

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
   Metadata (English – base)
------------------------------ */
export const metadata: Metadata = {
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
  authors: [{ name: "Global Tourist Centre" }],
  openGraph: {
    type: "website",
    siteName: "Global Tourist Centre",
  },
  metadataBase: new URL("https://globaltouristcentre.com/"),
};

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
   Root English Layout
------------------------------ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en";

  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://globaltouristcentre.com/",
    name: "Global Tourist Centre",
    url: "https://globaltouristcentre.com/",
    image:
      "https://globaltouristcentre.com/wp-content/uploads/2024/05/logo.png",
    telephone: "+91-9067972295",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Benaulim Beach Road, South Goa",
      addressLocality: "Benaulim",
      addressRegion: "Goa",
      postalCode: "403716",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.2602,
      longitude: 73.9272,
    },

    sameAs: [
      "https://www.facebook.com/globaltouristcentre",
      "https://www.instagram.com/globaltouristcentre",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Our Services & Top Trips",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Our Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Domestic & International Trips",
                url:
                  "https://globaltouristcentre.com/service/domestic-and-international-trips",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Customized Tours",
                url:
                  "https://globaltouristcentre.com/service/customize-trip-package",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Visa Documentation",
                url: "https://globaltouristcentre.com/service/visa-agent",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hotel Booking",
                url: "https://globaltouristcentre.com/service/hotel-booking",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Flight Booking",
                url: "https://globaltouristcentre.com/service/flight-booking",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Group Tours",
                url:
                  "https://globaltouristcentre.com/service/customized-group-trip",
              },
            },
          ],
        },

        {
          "@type": "OfferCatalog",
          name: "Top 3 Domestic Trips",
          itemListElement: [
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/destination/domestic/kashmir-tour-package-from-goa",
              itemOffered: {
                "@type": "TouristTrip",
                name: "Kashmir 5N/6D Trip",
                description:
                  "Explore the beauty of Kashmir with a 5-night, 6-day tour covering Srinagar, Gulmarg, and Pahalgam.",
              },
            },
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/destination/domestic/ladakh-tour-package-from-goa",
              itemOffered: {
                "@type": "TouristTrip",
                name: "Ladakh Tour for Goa",
                description:
                  "Adventure-filled trip from Goa to Ladakh featuring scenic landscapes, monasteries, and mountain passes.",
              },
            },
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/destination/domestic/sikkim-darjeeling-gangtok-tour-from-goa",
              itemOffered: {
                "@type": "TouristTrip",
                name: "Sikkim Tour for Goa",
                description:
                  "Multi-day mountain adventure from Goa to Sikkim, covering Gangtok, Nathula Pass, and local monasteries.",
              },
            },
          ],
        },

        {
          "@type": "OfferCatalog",
          name: "Top 3 International Trips",
          itemListElement: [
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/destination/international/wonders-of-vietnam",
              itemOffered: {
                "@type": "TouristTrip",
                name: "7N/8D Vietnam Tour Package",
                description:
                  "Experience Vietnam's culture and landscapes with an 8-day guided tour covering Hanoi, Halong Bay, and Ho Chi Minh City.",
              },
            },
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/destination/international/bhutan-tour",
              itemOffered: {
                "@type": "TouristTrip",
                name: "7N/8D Bhutan Tour Package",
                description:
                  "Explore the serene beauty of Bhutan, visiting Paro, Thimphu, and Punakha with a peaceful 8-day itinerary.",
              },
            },
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/destination/international/nepal-tour-package",
              itemOffered: {
                "@type": "TouristTrip",
                name: "Nepal Tour Package",
                description:
                  "Discover the heritage and spirituality of Nepal, covering Kathmandu, Pokhara, and key cultural sites.",
              },
            },
          ],
        },

        {
          "@type": "OfferCatalog",
          name: "Top 3 Luxury Trips",
          itemListElement: [
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/luxury-trips/kerala-luxury",
              itemOffered: {
                "@type": "TouristTrip",
                name: "Kerala Luxury Trip",
                description:
                  "Luxury getaway in Kerala featuring backwater cruises, private villas, and rejuvenating spa experiences.",
              },
            },
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/luxury-trips/mumbai-luxury",
              itemOffered: {
                "@type": "TouristTrip",
                name: "Mumbai Luxury Experience",
                description:
                  "Exclusive Mumbai experience with luxury stays, private guided tours, and fine dining options.",
              },
            },
            {
              "@type": "Offer",
              url:
                "https://globaltouristcentre.com/luxury-trips/golden-triangle-luxury",
              itemOffered: {
                "@type": "TouristTrip",
                name: "Golden Triangle Luxury Tour",
                description:
                  "Luxury exploration of Delhi, Agra, and Jaipur with 5-star accommodation and private chauffeur services.",
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased font-sans relative">
        <I18nProvider locale={locale}>
          <main id="main-content" role="main" className="flex-1">
            {children}
          </main>

          <Footer />

          <WhatsAppButton
            phoneNumber="919067972295"
            message="Hi! I am planning a trip, can you help me out?"
            tooltipText="Chat with us on WhatsApp"
          />
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
      </body>
    </html>
  );
}
