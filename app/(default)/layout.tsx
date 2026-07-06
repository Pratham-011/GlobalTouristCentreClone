import type React from "react";
import type { Metadata , Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

import { I18nProvider } from "@/lib/i18n/context";
import { Footer } from "@/components-eng/footer";
import { WhatsAppButton } from "@/components-eng/whatsapp-button";
import { CookieBanner } from "@/components/cookie-banner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};
import "../globals.css";

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
  image: "https://globaltouristcentre.com/wp-content/uploads/2024/05/logo.webp",
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
              name: "Domestic and International Trips",
              url: "https://globaltouristcentre.com/services/domestice-and-international-trips/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Customized Tours Package",
              url: "https://globaltouristcentre.com/services/customize-tour-package/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Visa Agent",
              url: "https://globaltouristcentre.com/services/visa-agent-in-goa/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hotel Booking",
              url: "https://globaltouristcentre.com/services/hotel-booking/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flight Booking",
              url: "https://globaltouristcentre.com/services/flight-booking/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Customized Group Tours",
              url: "https://globaltouristcentre.com/services/customized-group-tours/",
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
            url: "https://globaltouristcentre.com/destinations/domestic/kashmir-tour-package-from-goa/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Kashmir 5N/6D Tour Package",
              description:
                "Book your Kashmir tour package from Goa with best deals. Explore Srinagar, Gulmarg & Pahalgam with customized itinerary, hotels, and hassle-free travel.",
            },
          },
          {
            "@type": "Offer",
            url: "https://globaltouristcentre.com/destinations/domestic/ladakh-tour-package-from-goa/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Ladakh Tour for Goa",
              description:
                "Book a 7 Nights 6 Days Ladakh tour from Goa. Includes hotel stay, guide, and transportation.",
            },
          },
          {
            "@type": "Offer",
            url: "https://globaltouristcentre.com/destinations/domestic/sikkim-darjeeling-gangtok-tour-from-goa/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Sikkim Tour for Goa",
              description:
                "Book a 6 Nights 7 Days Sikkim tour from Goa. Includes hotel stay, guide, and transportation.",
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
            url: "https://globaltouristcentre.com/destinations/international/7n-8d-vietam-tour-package/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "7N/8D Vietnam Tour Package",
              description:
                "Grab 30% off on 8 Days Vietnam trip from Goa. Explore Hanoi, Ninh Binh, Ha Long Bay, Da Nang, Hoi An & Ho Chi Minh with cruises, tours & transfers. Book now!",
            },
          },
          {
            "@type": "Offer",
            url: "https://globaltouristcentre.com/destinations/international/7n-8d-bhutan-tour-package/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "7N/8D Bhutan Tour Package",
              description:
                "Book 7 Nights 8 Days Bhutan trip from Goa at 30% off. Explore Thimphu, Punakha, Paro & Tiger's Nest with guided tours, transfers, meals & hotel stay.",
            },
          },
          {
            "@type": "Offer",
            url: "https://globaltouristcentre.com/destinations/international/nepal-tour-package/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Nepal Tour Package",
              description:
                "Explore Nepal 6N/7D trip from Goa with 30% off. Visit Kathmandu, Chitwan Jungle Safari & Pokhara. Includes hotels, transfers, guide & cultural tours.",
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
            url: "https://globaltouristcentre.com/luxury-trips/kerala-luxury/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Kerala Luxury Trip",
              description:
                "Our exclusive Kerala luxury tour package with Global Tourist Centre. Experience opulent stays, private houseboats, scenic hill-stations and backwaters, along with personalized service and unforgettable moments in \"God's Own Country\".",
            },
          },
          {
            "@type": "Offer",
            url: "https://globaltouristcentre.com/luxury-trips/mumbai-luxury/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Mumbai Luxury Experience",
              description:
                "Explore the exclusive Mumbai luxury trip package from Global Tourist Centre. Experience 5-star hotels, private chauffeur drives, premium dining and curated city tours in India's City of Dreams.",
            },
          },
          {
            "@type": "Offer",
            url: "https://globaltouristcentre.com/luxury-trips/golden-triangle-luxury/",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Golden Triangle Luxury Tour",
              description:
                "Enjoy an exclusive luxury Golden Triangle tour with Global Tourist Centre: indulgent stays in heritage palaces, private chauffeur transfers, VIP sightseeing of Delhi, Agra & Jaipur, and curated experiences for discerning travellers.",
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero/Index-hero.webp"
        />
         <Script
          id="travel-agency-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencySchema),
          }}
        />
  <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '733889692300840');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
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
          <CookieBanner />
        </I18nProvider>

        {/* NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=733889692300840&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Analytics />
      </body>
    </html>
  );
}
