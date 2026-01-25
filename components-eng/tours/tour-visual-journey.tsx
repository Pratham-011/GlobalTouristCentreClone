"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

type GalleryItem = {
  titleKey: string;
  descriptionKey: string;
  image: string;
};

interface TourVisualJourneyProps {
  items: readonly GalleryItem[];
  gallery: any;
}

export function TourVisualJourney({ items, gallery }: TourVisualJourneyProps) {
  const { t } = useI18n();
  // console.log(gallery);
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            {t.destinations.tour.galleryTitle}
          </h2>
          <span className="block w-14 h-[3px] bg-emerald-600 mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 max-w-2xl">
            {t.destinations.tour.gallerySubtitle}
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            flex gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory
            sm:grid sm:grid-cols-2
            lg:grid-cols-3
            sm:overflow-visible
            scrollbar-hide
          "
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                relative group overflow-hidden rounded-2xl
                shadow-sm hover:shadow-lg transition-all duration-300
                min-w-[85%] sm:min-w-0 snap-center
              "
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={gallery[idx]?.description || item.descriptionKey}
                  fill
                  className="
                    object-cover transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg font-semibold text-white">
                  {gallery[idx]?.title || item.titleKey}
                </h3>
                <p className="text-sm text-white/80">
                  {gallery[idx]?.description || item.descriptionKey}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
