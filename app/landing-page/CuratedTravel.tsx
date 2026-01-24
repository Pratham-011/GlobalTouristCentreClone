"use client";

import type React from "react";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import TourCard from "@/components/TourCard";
import type { CollectionId } from "@/lib/i18n/translations";

const CuratedTravel = () => {
  const { t, locale } = useI18n();
  const experiencesRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);

  const travelCollections: {
    id: CollectionId;
    category: "domestic" | "international";
    imageUrl: string;
    rating: number;
    tags: string[];
    badge: string | null;
    link: string;
  }[] = [
      {
        id: "dudhsagar",
        category: "domestic",
        imageUrl: "/assets/destinations/Thumbnails/Dudhsagar.webp",
        rating: 4.6,
        tags: ["Waterfalls", "Spices", "Nature"],
        badge: null,
        link: `/${locale}/destinations/day-trips/dudhsagar-waterfal-excursion`,
      },
      {
        id: "golden-triangle-4-day-tour-from-goa",
        category: "domestic",
        imageUrl: "/assets/destinations/Thumbnails/GoldenTriangle.webp",
        rating: 4.8,
        tags: ["Heritage", "Taj Mahal", "Cultural"],
        badge: null,
        link: `/${locale}/destinations/domestic/golden-triangle-4-day-tour-from-goa`,
      },
      {
        id: "varanasi",
        category: "domestic",
        imageUrl: "/assets/destinations/Thumbnails/varanasi.webp",
        rating: 4.7,
        tags: ["Spiritual", "Pilgrimage", "Ganga Aarti"],
        badge: null,
        link: `/${locale}/destinations/domestic/varanasi-tour-package-from-goa`,
      },
      {
        id: "amritsar",
        category: "domestic",
        imageUrl: "/assets/hero/Amritsar-hero.webp",
        rating: 4.7,
        tags: ["Spiritual", "Cultural", "Historical"],
        badge: null,
        link: `/${locale}/destinations/domestic/amritsar-tour-package-from-goa`,
      },
    ];

  // const scrollExperiences = (direction: "left" | "right") => {
  //   if (experiencesRef.current) {
  //     const scrollAmount = direction === "left" ? -300 : 300;
  //     experiencesRef.current.scrollBy({
  //       left: scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  // const scrollCollections = (direction: "left" | "right") => {
  //   if (collectionsRef.current) {
  //     const scrollAmount = 300;
  //     const newScrollLeft =
  //       collectionsRef.current.scrollLeft +
  //       (direction === "left" ? -scrollAmount : scrollAmount);
  //     collectionsRef.current.scrollTo({
  //       left: newScrollLeft,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#111827] to-[#1f2937]"
      aria-labelledby="collections-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%230d9488" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E\')',
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="collections-heading"
            className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
          >
            {t.collections.title}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.collections.subtitle}
          </p>
        </div>

        {/* Mobile: Carousel with Swipe */}
        <div className="md:hidden">
          <div
            ref={collectionsRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
            role="list"
            aria-label={t.collections.title}
          >
            {travelCollections.map((tour) => {
              const content = t.collections.items[tour.id];
              // console.log(content);
              // console.log(tour);

              return (
                <div
                  key={tour.id}
                  className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start"
                  role="listitem"
                >
                  <TourCard
                    imageUrl={tour.imageUrl}
                    title={content.title}
                    duration={content.duration}
                    description={content.description}
                    features={tour.tags}
                    href={tour.link}
                    category={tour.category}
                  />
                </div>
              );
            })}

            {/* View More/Less Card at the end */}
            <div className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start">
              <div className="h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-[#f8d56b]/20 to-[#0d9488]/20 backdrop-blur-sm border-2 border-white/20 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <ArrowRight className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-white font-bold mb-3">
                  {t.collections.cta.discoverMore}
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  {t.collections.subtitle}
                </p>

                <Link href={`/${locale}/destinations`}>
                  <Button
                    size="lg"
                    className="rounded-full px-8 font-semibold bg-white text-slate-900 hover:bg-white/90  "
                  >
                    {t.collections.cta.exploreAll}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Swipe Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>{t.collections.cta.swipeHint}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Desktop: Fluid Grid */}
        <div className="hidden md:block">
          <div
            className="
      mx-auto
      max-w-7xl
      grid gap-6
      grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
    "
            role="list"
            aria-label="Travel package collections"
          >
            {travelCollections.map((tour) => {
              const content = t.collections.items[tour.id];

              return (
                <div key={tour.id} role="listitem">
                  <TourCard
                    imageUrl={tour.imageUrl}
                    title={content.title}
                    duration={content.duration}
                    description={content.description}
                    features={tour.tags}
                    href={tour.link}
                    category={tour.category}
                  />
                </div>
              );
            })}

            {/* CTA */}
            <div className="col-span-full mt-10 flex justify-center">
              <Link href={`/${locale}/destinations`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 font-semibold bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  {t.collections.cta.exploreAll}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedTravel;
