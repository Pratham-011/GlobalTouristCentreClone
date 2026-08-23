// @ts-nocheck
"use client";

import { useI18n } from "@/lib/i18n/context";
import type { TripId } from "@/lib/i18n/translations/index.ts";
import { galleryData } from "@/lib/data/galleryData";
import { metaData } from "@/lib/data/metaData";
import { QuickInfoData } from "@/lib/data/quickinfo";
import { DetailedTourHero } from "@/components-eng/tours/detailed-tour-hero";
import { TourCtaBar } from "@/components-eng/tours/tour-cta-bar";
import { TourQuickInfo } from "@/components/tours/tour-quick-info";
import TourItinerary from "@/components-eng/tours/tour-itinerary";
import { TourPrice } from "@/components-eng/tours/tour-price";
import type { TourPriceData } from "@/components-eng/tours/tour-price";
import type {
  ItineraryItem,
  ItineraryTracks,
} from "@/components-eng/tours/tour-itinerary";
import { TourVisualJourney } from "@/components-eng/tours/tour-visual-journey";
import { TourInclusions } from "@/components-eng/tours/tour-inclusions";
import { HorizontalLeadForm } from "@/components-eng/tours/horizontal-lead-form";

type TourClientProps = {
  tourId: TripId;
};

/** True when a tour has opted into dual domestic/international fares. */
function isDualPrice(price: unknown): price is TourPriceData {
  if (!price || typeof price !== "object") return false;
  const p = price as TourPriceData;
  return !!p.domestic && !!p.international;
}

/** True when itinerary is split into domestic/international day lists. */
function isSplitItinerary(itinerary: unknown): itinerary is ItineraryTracks {
  if (!itinerary || typeof itinerary !== "object" || Array.isArray(itinerary)) {
    return false;
  }
  const t = itinerary as ItineraryTracks;
  return (
    Array.isArray(t.domestic) &&
    t.domestic.length > 0 &&
    Array.isArray(t.international) &&
    t.international.length > 0
  );
}

export default function TourClient({ tourId }: TourClientProps) {
  const { t } = useI18n();

  const data = t.tourData?.[tourId];
  const gallerydata = galleryData[tourId]?.gallery ?? [];
  // const meta = metaData[tourId]?.meta ?? null;

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

  const { page, cta, quickInfo, itinerary, inclusions, gallery } = data;
  const price = (data as { price?: unknown }).price;

  /* Guard: some locales have tourData entries with only price/itinerary but no page */
  // if (!page?.hero) {
  //   return (
  //     <main className="min-h-[60vh] flex items-center justify-center">
  //       <p className="text-muted-foreground text-lg">
  //         Tour details not available.
  //       </p>
  //     </main>
  //   );
  // }

  const hasDualPrice = isDualPrice(price);
  const hasSplitItinerary = isSplitItinerary(itinerary);
  const flatItinerary = Array.isArray(itinerary)
    ? (itinerary as ItineraryItem[])
    : null;

  return (
    <main className="bg-white">
      <DetailedTourHero
        title={(page.hero as any).herotitle || (page.hero as any).title}
        subtitle={(page.hero as any).subtitle}
        backgroundImage={(page.hero as any).backgroundImage}
        meta={(page.hero as any).meta}
      />

      <TourCtaBar
        tourName={toTitleCase(tourId.replace(/-/g, " "))}
        phoneNumber={cta?.contact?.phone}
      />

      {quickInfo?.length > 0 && QuickInfoData[tourId]?.quickInfo.length > 0 && (
        <TourQuickInfo
          data={quickInfo}
          icondata={QuickInfoData[tourId].quickInfo}
        />
      )}

      {(tourId === "7n-8d-vietam-tour-package" ||
        tourId === "singapore-tour-package") && (
        <HorizontalLeadForm tourSlug={tourId} />
      )}

      {/* Pricing — any tour with price.domestic + price.international */}
      {hasDualPrice && <TourPrice price={price} />}

      {/* Itinerary — split tracks or legacy flat array */}
      {hasSplitItinerary && (
        <TourItinerary
          tracks={itinerary}
          tabLabels={{
            domestic: hasDualPrice ? price.domestic.badge : "Domestic",
            international: hasDualPrice
              ? price.international.badge
              : "International",
          }}
        />
      )}
      {!hasSplitItinerary && flatItinerary && flatItinerary.length > 0 && (
        <TourItinerary items={flatItinerary} />
      )}

      {gallery?.length > 0 && (
        <TourVisualJourney items={gallerydata} gallery={gallery} />
      )}

      {inclusions?.length > 0 && <TourInclusions items={inclusions} />}
    </main>
  );
}
