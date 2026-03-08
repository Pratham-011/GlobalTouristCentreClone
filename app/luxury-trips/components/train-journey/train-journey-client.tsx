"use client";

import { useI18n } from "@/lib/i18n/context";
import { PackageHero } from "./package-hero";
import { RestaurantsSection } from "./restaurants-section";
import { SplendourItinerarySection } from "./splendour-itinerary-section";
import { LuxurySlug } from "@/lib/data/luxury-page-content";
import { InclusionsSection } from "./inclusions-section";
// import { AccommodationSection } from "./accommodation-section";
import { CabinsSection } from "./cabins-section";

type Props = {
  slug: LuxurySlug;
};

export function TrainJourneyClient({ slug }: Props) {
  const { t } = useI18n();
  const pageData = t.luxuryTrain?.[slug] as any;

  if (!pageData) return null;

  return (
    <main className="bg-white">
      {/* ======================================================
          HERO
      ======================================================= */}
      {pageData.hero && <PackageHero data={pageData.hero} />}

      {/* ======================================================
          CABINS
      ======================================================= */}
      {pageData.accommodations && <CabinsSection  cabins={pageData.accommodations.cabins as any} title={pageData.accommodations.title} subtitle={pageData.accommodations.subtitle}    eyebrow={pageData.accommodations.eyebrow}/>}

      {/* ======================================================
          RESTAURANTS
      ======================================================= */}
      {pageData.restaurants && <RestaurantsSection restaurants={pageData.restaurants.food as any} title={pageData.restaurants.title} subtitle={pageData.restaurants.subtitle} />}

      {/* ======================================================
          ITINERARY
      ======================================================= */}
      {pageData.itinerary && <SplendourItinerarySection itinerary={pageData.itinerary.days as any} title={pageData.itinerary.title} subtitle={pageData.itinerary.subtitle} duration={pageData.itinerary.duration} />}

      {/* ======================================================
          INCLUSIONS
      ======================================================= */}
      {pageData.inclusions && <InclusionsSection data={pageData.inclusions as any} excursions={pageData.excursions as any} />}

    </main>
  );
}
