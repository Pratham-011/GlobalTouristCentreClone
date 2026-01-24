"use client";

import { LuxuryTourSlug } from "@/lib/data/luxury-page-content";
import { useI18n } from "@/lib/i18n/context";
import { PackageHero } from "./package-hero";
import { ItinerarySection } from "./itinerary-section";
import { AccommodationSection } from "./accommodation-section";
import { InclusionsSection } from "./inclusions-section";


type TourClientProps = {
  tourSlug: LuxuryTourSlug
};

export default function TourClient({ tourSlug }: TourClientProps) {
  const { t } = useI18n();
  const packageData = t.luxuryTourPackages?.[tourSlug];

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
        <div className="text-center px-4">
          <h1 className="text-2xl font-serif font-bold text-[#1a2238] mb-4">Package details not available</h1>
          <p className="text-slate-600">We couldn't find the details for this luxury package in your selected language.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* ======================================================
          HERO
      ======================================================= */}
      <PackageHero data={packageData.hero_section} />

      {/* ======================================================
          ITINERARY
      ======================================================= */}
      <ItinerarySection data={packageData.itinerary} />
      {/* ======================================================
            ACCOMMODATION
      ======================================================= */}
      <AccommodationSection data={packageData.accommodations} />
      {/* ======================================================
          INCLUSIONS & EXCLUSIONS
      ======================================================= */}
      <InclusionsSection data={packageData.inclusions} />
    </main>
  );
}
