"use client";

import { useI18n } from "@/lib/i18n/context";
import { PackageHero } from "./package-hero";
import { CabinsSection } from "./cabins-section";
import { RestaurantsSection } from "./restaurants-section";
import { SplendourItinerarySection } from "./splendour-itinerary-section";
import { LuxurySlug } from "@/lib/data/luxury-page-content";

type Props = {
  slug: LuxurySlug;
};

export function TrainJourneyClient({ slug }: Props) {
  const { t } = useI18n();
  const pageData = t.luxuryTrain?.[slug];

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
      {pageData.accommodations && <CabinsSection accommodations={pageData.accommodations as any} />}

      {/* ======================================================
          RESTAURANTS
      ======================================================= */}
      {slug === "mahraja-train-tour-package" && <RestaurantsSection />}

      {/* ======================================================
          ITINERARY
      ======================================================= */}
      {pageData.itinerary && <SplendourItinerarySection itinerary={pageData.itinerary as any} />}

    </main>
  );
}
