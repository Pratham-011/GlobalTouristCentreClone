"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

type ItineraryItem = {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
};

interface TourItineraryProps {
  items: readonly ItineraryItem[];
}

export default function TourItinerary({ items }: TourItineraryProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-3">
            {t.destinations.tour.itinerarytitle}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.destinations.tour.itinararysubtitle}
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200" />

          <div className="space-y-8">
            {items.map((item, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={idx}
                  className="flex gap-6 group"
                  onMouseEnter={() => setExpandedIndex(idx)}
                  onMouseLeave={() => setExpandedIndex(null)}
                >
                  {/* TIMELINE MARKER - hidden on mobile */}
                  <div className="hidden md:flex relative w-12 justify-center flex-shrink-0">
                    <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 border-slate-200">
                      <div className="w-3 h-3 rounded-full bg-slate-400" />
                    </div>
                  </div>

                  {/* CONTENT CARD */}
                  <div
                    className={`
                      bg-white rounded-2xl p-6 w-full
                      transition-all duration-300
                      ${item.highlight
                        ? "shadow-lg shadow-emerald-100 border-2 border-emerald-200"
                        : isExpanded
                          ? "shadow-lg shadow-slate-200 border-2 border-emerald-100"
                          : "shadow-sm border border-slate-100 hover:shadow-md"
                      }
                      ${isExpanded ? "md:scale-[1.02]" : ""}
                    `}
                  >
                    {/* TIME BADGE */}
                    <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                      <span
                        className={`
                          inline-flex items-center gap-2
                          px-3 py-1.5 rounded-full text-xs font-semibold
                          transition-colors duration-300
                          ${item.highlight
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                          }
                        `}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {item.time}
                      </span>

                      {item.highlight && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                          ★ Highlight
                        </span>
                      )}
                    </div>

                    {/* TITLE */}
                    <h3 className="font-bold text-xl text-slate-900 mb-2 break-words">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-slate-600 leading-relaxed break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
