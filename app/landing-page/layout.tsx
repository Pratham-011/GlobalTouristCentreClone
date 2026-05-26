import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { PromoPopup } from "@/components-eng/promo-popup";

// Moved OfferBanner and PromoPopup to root layout to avoid conflicts


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
  logo: "https://globaltouristcentre.com/logo.webp",
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
        strategy="lazyOnload"
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
        strategy="lazyOnload"
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
