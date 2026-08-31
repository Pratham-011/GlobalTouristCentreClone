"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components-eng/ui/button";
import { useI18n } from "@/lib/i18n/context";
import HomeCard from "./HomeCard";
import { SectionTitle } from "@/components-eng/SectionTitle";

/* ----------------------------------------
   DATA MODEL
----------------------------------------- */

import type { HomeItemKey } from "@/lib/i18n/translations/index";

type TravelCollection = {
  id: HomeItemKey;
  href: string;
  imageUrl: string;
  alt: string;
};

const travelCollections: TravelCollection[] = [
  /* ================= DAY TRIPS ================= */
  {
    id: "south-goa-1-day-cultural-and-beach-tour-package",
    href: "/destinations/day-trips/south-goa-1-day-cultural-and-beach-tour-package", // matches day-south-goa-cultural-007.slug
    imageUrl: "/assets/destinations/Goa/basilica-bom-jesus.webp",
    alt: "Basilica of Bom Jesus Old Goa – UNESCO World Heritage Church, South Goa cultural tour",
  },
  {
    id: "north-goa-day-excursion",
    href: "/destinations/day-trips/north-goa-day-excursion", // matches day-north-goa-009.slug
    imageUrl: "/assets/destinations/Thumbnails/NorthGoa.webp",
    alt: "Colorful Portuguese-style streets of Fontainhas Latin Quarter, North Goa sightseeing tour",
  },
  {
    id: "dudhsagar-waterfal-excursion",
    href: "/destinations/day-trips/dudhsagar-waterfal-excursion", // matches day-dudhsagar-spice-010.slug
    imageUrl: "/assets/destinations/Thumbnails/Dudhsagar.webp",
    alt: "Dudhsagar Waterfall cascading through lush Western Ghats forests with train crossing bridge, Goa",
  },
  {
    id: "south-goa-1-day-trip-package",
    href: "/destinations/day-trips/south-goa-1-day-trip-package", // matches day-palolem-cola-011.slug
    imageUrl: "/assets/destinations/Thumbnails/Palolem.webp",
    alt: "Palolem Beach South Goa with turquoise water, wooden fishing boats, and beachside huts under coconut palms",
  },

  {
    id: "luxury-yacht-day-tour-goa",
    href: "/destinations/day-trips/luxury-yacht-day-tour-goa", // matches day-yacht-013.slug
    imageUrl: "/assets/destinations/Thumbnails/Yacht.webp",
    alt: "Illuminated luxury yacht on Goa waters at dusk – Luxury Yacht Dusk to Dine evening experience",
  },

  {
    id: "gokarna-murdeshwar-day-excursion",
    href: "/destinations/day-trips/gokarna-murdeshwar-day-excursion", // matches day-gokarna-005.slug (updated from old -tour)
    imageUrl: "/assets/destinations/Thumbnails/Gokarna.webp",
    alt: "Aerial view of giant Lord Shiva statue at Murdeshwar Temple overlooking the Arabian Sea, Karnataka",
  },
  {
    id: "dandeli-2-day-tour-from-goa",
    href: "/destinations/domestic/dandeli-2-day-tour-from-goa", // matches day-dandeli-001.slug
    imageUrl: "/assets/destinations/Thumbnails/Dandeli.webp",
    alt: "Tourists riding elephants through misty jungle trails on Dandeli wildlife safari, Western Ghats India",
  },

  /* ================= SHORT STAYS ================= */

  {
    id: "cabo-serai-2n-3d-luxury-getaway",
    href: "/destinations/domestic/cabo-serai-2n-3d-luxury-getaway", // matches dom-goa-serai-018.slug
    imageUrl: "/assets/destinations/Thumbnails/SeraiCabo.webp",
    alt: "Luxury wooden villa interior with sea view balcony and palm trees at Cabo de Rama cliffside retreat, South Goa",
  },
  {
    id: "hampi-day-excursions",
    href: "/destinations/day-trips/hampi-day-excursions", // matches dom-hampi-019.slug
    imageUrl: "/assets/destinations/Thumbnails/Hampi.webp",
    alt: "Ancient stone chariot at Vittala Temple complex, Hampi UNESCO World Heritage Site, Karnataka India",
  },
  {
    id: "mumbai-one-day-excursion",
    href: "/destinations/day-trips/mumbai-one-day-excursion", // matches dom-mumbai-021.slug
    imageUrl: "/assets/destinations/Thumbnails/Mumbai.webp",
    alt: "Gateway of India and Taj Mahal Palace Hotel viewed from Mumbai harbour with ferry boats on Arabian Sea",
  },
  {
    id: "ajanta-ellora-caves-tour-from-goa",
    href: "/destinations/domestic/ajanta-ellora-caves-tour-from-goa", // matches dom-ajanta-ellora-022.slug
    imageUrl: "/assets/destinations/Thumbnails/Ellora.webp",
    alt: "Intricate rock-cut architecture and stone elephant sculpture inside Kailasa Temple, Ellora Caves, Aurangabad Maharashtra",
  },
  {
    id: "kerala-tour-package-from-goa",
    href: "/destinations/domestic/kerala-tour-package-from-goa", // matches dom-kerala-024.slug
    imageUrl: "/assets/destinations/Thumbnails/Kerala.webp",
    alt: "Traditional Kerala houseboat cruising through Alleppey backwaters surrounded by red lotus flowers and coconut palms",
  },
  {
    id: "golden-triangle-4-day-tour-from-goa",
    href: "/destinations/domestic/golden-triangle-4-day-tour-from-goa", // matches dom-golden-triangle-025.slug
    imageUrl: "/assets/destinations/Thumbnails/GoldenTour.webp",
    alt: "Golden Triangle India travel collage featuring India Gate in Delhi, the Taj Mahal in Agra, and the Hawa Mahal in Jaipur.",
  },
  {
    id: "jodhpur-udaipur-tour-package",
    href: "/destinations/domestic/jodhpur-udaipur-tour-package", // matches dom-udaipur-jodhpur-026.slug
    imageUrl: "/assets/destinations/Thumbnails/Udaipur.webp",
    alt: "Taj Lake Palace hotel floating on Lake Pichola at golden hour with Aravalli hills in background, Udaipur Rajasthan",
  },
  {
    id: "varanasi-tour-package",
    href: "/destinations/domestic/varanasi-tour-package", // matches dom-varanasi-027.slug
    imageUrl: "/assets/destinations/Thumbnails/Varanasi.webp",
    alt: "Sunrise over Varanasi ghats on the Ganges River with wooden boats, flocks of birds, and pilgrims gathered on the steps, Uttar Pradesh India",
  },
  {
    id: "mathura-vrindavan-tour",
    href: "/destinations/domestic/mathura-vrindavan-tour", // matches dom-mathura-vrindavan-028.slug
    imageUrl: "/assets/destinations/Thumbnails/Mathura.webp",
    alt: "Prem Mandir white marble temple dedicated to Lord Krishna in Vrindavan, Mathura Uttar Pradesh India",
  },

  /* ================= INTERNATIONAL ================= */

  {
    id: "andaman-nicobar-tour-package",
    href: "/destinations/domestic/andaman-nicobar-tour-package", // matches int-andaman-021.slug
    imageUrl: "/assets/destinations/Thumbnails/Andaman.webp",
    alt: "Natural limestone rock arch on Neil Island coastline with turquoise waters and lush tropical jungle, Andaman Islands India",
  },
  {
    id: "srilanka-tour-package",
    href: "/destinations/international/srilanka-tour-package", // matches int-srilanka-023.slug
    imageUrl: "/assets/destinations/Thumbnails/SriLanka.webp",
    alt: "Blue train crossing the Nine Arch Bridge in misty Ella highlands surrounded by green rainforest, Sri Lanka scenic tour",
  },
  {
    id: "7n-8d-bhutan-tour-package",
    href: "/destinations/international/7n-8d-bhutan-tour-package", // matches int-bhutan-024.slug
    imageUrl: "/assets/destinations/Thumbnails/Bhutan.webp",
    alt: "Ornate Punakha Dzong Buddhist monastery-fortress with traditional Bhutanese architecture against clear blue sky, Bhutan",
  },
];

/* ----------------------------------------
   COMPONENT
----------------------------------------- */

const HomeIntro = () => {
  const { t, locale } = useI18n();
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative  bg-gradient-to-br py-8 from-[#f7f8fb] to-[#e6ebf1]">
      <div className="max-w-7xl mx-auto px-4">
        {/* =======================
            TITLE
        ======================== */}

        <SectionTitle title={t.home.title} subtitle={t.home.subtitle} />

        {/* =======================
            MOBILE – CAROUSEL
        ======================== */}
        <div className="md:hidden mb-14">
          <div
            ref={carouselRef}
            className="flex gap-1 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {travelCollections.map((tour) => {
              const content = t.home.items[tour.id];

              if (!content) {
                if (process.env.NODE_ENV !== "production") {
                  console.warn(`Missing translation for: ${tour.id}`);
                }
                return null;
              }

              return (
                <div
                  key={tour.id}
                  className="snap-start shrink-0 w-[85vw] max-w-[340px]"
                >
                  <HomeCard
                    imageUrl={tour.imageUrl}
                    alt={tour.alt}
                    title={content.title}
                    duration={content.duration}
                    description={content.description}
                    href={`${tour.href}`}
                    rating={content.rating}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* =======================
            DESKTOP – GRID
        ======================== */}
        <div className="hidden md:grid md:grid-cols-3 xl:grid-cols-4 gap-3 mb-16">
          {travelCollections.map((tour) => {
            const content = t.home.items[tour.id];

            if (!content) {
              if (process.env.NODE_ENV !== "production") {
                console.warn(`Missing translation for: ${tour.id}`);
              }
              return null;
            }

            return (
              <HomeCard
                key={tour.id}
                imageUrl={tour.imageUrl}
                alt={tour.alt}
                title={content.title}
                duration={content.duration}
                description={content.description}
                href={`${tour.href}`}
                rating={content.rating}
              />
            );
          })}
        </div>

        {/* =======================
            CTA
        ======================== */}
        <div className="flex justify-center">
          <Link href={`/destinations`}>
            <Button
              size="lg"
              className="
                px-16 py-7 rounded-full text-lg font-semibold
                bg-[#fde68a] text-slate-900
                hover:bg-[#facc15]
                transition-all duration-300
                shadow-lg hover:shadow-2xl
              "
            >
              {t.collections.cta.exploreAll}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
