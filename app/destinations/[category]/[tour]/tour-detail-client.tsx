"use client";

import { useI18n } from "@/lib/i18n/context";
import type { TripId } from "@/lib/i18n/translations/index.ts";
import { galleryData} from "@/lib/data/galleryData";
import { metaData } from "@/lib/data/metaData";

import { DetailedTourHero } from "@/components/tours/detailed-tour-hero";
import { TourCtaBar } from "@/components/tours/tour-cta-bar";
import { TourQuickInfo } from "@/components/tours/tour-quick-info";
import  TourItinerary  from "@/components/tours/tour-itinerary";
import { TourVisualJourney } from "@/components/tours/tour-visual-journey";
import { TourInclusions } from "@/components/tours/tour-inclusions";

type TourClientProps = {
  tourId: TripId;
};

export default function TourClient({ tourId }: TourClientProps) {
  const { t } = useI18n();

  const data = t.tourData?.[tourId];
  const gallerydata = galleryData[tourId]?.gallery ?? [];
  const meta = metaData[tourId]?.meta ?? null;

  /* -------------------------------------------------------
     SAFETY GUARD (client-side)
  ------------------------------------------------------- */
  if (!data) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground text-lg">
          Tour details not available.
        </p>
      </main>
    );
  }
  function toTitleCase(str: string) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
  }


  const { page, cta, quickInfo, itinerary, inclusions,gallery } = data;

  return (
    <main className="bg-white">
      {/* ======================================================
          HERO
      ======================================================= */}
      <DetailedTourHero
        title={page.hero?.herotitle ?? page.hero.title}
        subtitle={page.hero?.subtitle}
        backgroundImage={page.hero?.backgroundImage}
        meta={meta}
      />

      {/* ======================================================
          CTA BAR
      ======================================================= */}
      <TourCtaBar
        tourName={toTitleCase(tourId.replace(/-/g, " "))}
        phoneNumber={cta?.contact?.phone}
      />

      {/* ======================================================
          QUICK INFO
      ======================================================= */}
      {quickInfo?.length > 0 && <TourQuickInfo items={quickInfo} />}

      {/* ======================================================
          ITINERARY
      ======================================================= */}
      {itinerary?.length > 0 && <TourItinerary items={itinerary} />}

      {/* ======================================================
          GALLERY
      ======================================================= */}
      {gallery?.length > 0 && (
        <TourVisualJourney items={gallerydata} gallery={gallery} />
      )}

      {/* ======================================================
          INCLUSIONS
      ======================================================= */}
      {inclusions?.length > 0 && (
        <TourInclusions
items={inclusions}
        />
      )}
    </main>
  );
}
