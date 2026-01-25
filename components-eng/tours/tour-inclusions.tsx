"use client";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
type InclusionItem = {
  title: string;
  description: string;
};

interface TourInclusionsProps {
  items: readonly InclusionItem[];
}



export function TourInclusions({
  items
}: TourInclusionsProps) {
  const { t } = useI18n();
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            {t.destinations.tour.inclusionsTitle}
          </h2>
          <span className="block w-14 h-[3px] bg-emerald-600 mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base">
            {t.destinations.tour.inclusionsSubtitle}
          </p>
        </div>

        {/* GRID - Auto-fit layout that adapts to content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {items.map((item, idx) => {
            const hasTitle = item.title?.trim();
            const hasDescription = item.description?.trim();

            // If both are missing, skip rendering the card entirely
            if (!hasTitle || !hasDescription) return null;

            return (
              <div
                key={idx}
                className="
          bg-slate-50
          border
          border-slate-200
          rounded-xl sm:rounded-2xl
          p-5 sm:p-6
          hover:shadow-lg
          hover:border-emerald-200
          hover:bg-white
          transition-all
          duration-300
          flex
          flex-col
          h-full
        "
              >
                <div className="flex items-start gap-3 sm:gap-4 h-full">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-emerald-50">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 stroke-[3]" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {hasTitle && (
                      <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-1.5 sm:mb-2">
                        {item.title}
                      </h3>
                    )}

                    {hasDescription && (
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional: Footer note */}
        {/* <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 italic">
            All inclusions are subject to availability and may vary by season
          </p>
        </div> */}
      </div>
    </section>
  );
}
