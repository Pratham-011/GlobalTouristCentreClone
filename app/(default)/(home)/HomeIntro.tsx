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
};

const travelCollections: TravelCollection[] = [
  /* ================= DAY TRIPS ================= */

  {
    id: "south-goa-1-day-cultural-and-beach-tour-package",
    href: "/destinations/day-trips/south-goa-1-day-cultural-and-beach-tour-package", // matches day-south-goa-cultural-007.slug
    imageUrl: "/assets/destinations/Goa/basilica-bom-jesus.webp",
  },
  {
    id: "north-goa-day-excursion",
    href: "/destinations/day-trips/north-goa-day-excursion", // matches day-north-goa-009.slug
    imageUrl: "/assets/destinations/Thumbnails/NorthGoa.webp",
  },
  {
    id: "dudhsagar-waterfal-excursion",
    href: "/destinations/day-trips/dudhsagar-waterfal-excursion", // matches day-dudhsagar-spice-010.slug
    imageUrl: "/assets/destinations/Thumbnails/Dudhsagar.webp",
  },
  {
    id: "south-goa-1-day-trip-package",
    href: "/destinations/day-trips/south-goa-1-day-trip-package", // matches day-palolem-cola-011.slug
    imageUrl: "/assets/destinations/Thumbnails/Palolem.webp",
  },

  {
    id: "luxury-yacht-day-tour-goa",
    href: "/destinations/day-trips/luxury-yacht-day-tour-goa", // matches day-yacht-013.slug
    imageUrl: "/assets/destinations/Thumbnails/Yacht.webp",
  },

  {
    id: "gokarna-murdeshwar-day-excursion",
    href: "/destinations/day-trips/gokarna-murdeshwar-day-excursion", // matches day-gokarna-005.slug (updated from old -tour)
    imageUrl: "/assets/destinations/Thumbnails/Gokarna.webp",
  },
  {
    id: "dandeli-2-day-tour-from-goa",
    href: "/destinations/domestic/dandeli-2-day-tour-from-goa", // matches day-dandeli-001.slug
    imageUrl: "/assets/destinations/Thumbnails/Dandeli.webp",
  },

  /* ================= SHORT STAYS ================= */

  {
    id: "cabo-serai-2n-3d-luxury-getaway",
    href: "/destinations/day-trips/cabo-serai-2n-3d-luxury-getaway", // matches dom-goa-serai-018.slug
    imageUrl: "/assets/destinations/Thumbnails/SeraiCabo.webp",
  },
  {
    id: "hampi-day-excursions",
    href: "/destinations/day-trips/hampi-day-excursions", // matches dom-hampi-019.slug
    imageUrl: "/assets/destinations/Thumbnails/Hampi.webp",
  },
  {
    id: "mumbai-one-day-excursion",
    href: "/destinations/day-trips/mumbai-one-day-excursion", // matches dom-mumbai-021.slug
    imageUrl: "/assets/destinations/Thumbnails/Mumbai.webp",
  },
  {
    id: "ajanta-ellora-caves-tour-from-goa",
    href: "/destinations/domestic/ajanta-ellora-caves-tour-from-goa", // matches dom-ajanta-ellora-022.slug
    imageUrl: "/assets/destinations/Thumbnails/Ellora.webp",
  },
  {
    id: "kerala-tour-package-from-goa",
    href: "/destinations/domestic/kerala-tour-package-from-goa", // matches dom-kerala-024.slug
    imageUrl: "/assets/destinations/Thumbnails/Kerala.webp",
  },
  {
    id: "golden-triangle-4-day-tour-from-goa",
    href: "/destinations/domestic/golden-triangle-4-day-tour-from-goa", // matches dom-golden-triangle-025.slug
    imageUrl: "/assets/destinations/Thumbnails/GoldenTriangle.webp",
  },
  {
    id: "jodhpur-udaipur-tour-package",
    href: "/destinations/domestic/jodhpur-udaipur-tour-package", // matches dom-udaipur-jodhpur-026.slug
    imageUrl: "/assets/destinations/Thumbnails/Udaipur.webp",
  },
  {
    id: "varanasi-tour-package",
    href: "/destinations/domestic/varanasi-tour-package", // matches dom-varanasi-027.slug
    imageUrl: "/assets/destinations/Thumbnails/Varanasi.webp",
  },
  {
    id: "mathura-vrindavan-tour",
    href: "/destinations/domestic/mathura-vrindavan-tour", // matches dom-mathura-vrindavan-028.slug
    imageUrl: "/assets/destinations/Thumbnails/Mathura.webp",
  },

  /* ================= INTERNATIONAL ================= */

  {
    id: "andaman-nicobar-tour-package",
    href: "/destinations/domestic/andaman-nicobar-tour-package", // matches int-andaman-021.slug
    imageUrl: "/assets/destinations/Thumbnails/Andaman.webp",
  },
  {
    id: "srilanka-tour-package",
    href: "/destinations/international/srilanka-tour-package", // matches int-srilanka-023.slug
    imageUrl: "/assets/destinations/Thumbnails/SriLanka.webp",
  },
  {
    id: "7n-8d-bhutan-tour-package",
    href: "/destinations/international/7n-8d-bhutan-tour-package", // matches int-bhutan-024.slug
    imageUrl: "/assets/destinations/Thumbnails/Bhutan.webp",
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
                    title={content.title}
                    duration={content.duration}
                    description={content.description}
                    href={`${tour.href}`}
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
                title={content.title}
                duration={content.duration}
                description={content.description}
                href={`${tour.href}`}
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
