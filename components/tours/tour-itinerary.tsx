"use client";

import { useCallback, useId, useState, type KeyboardEvent } from "react";
import { useI18n } from "@/lib/i18n/context";

const TEAL = "#008081";
const SAND = "#ebe3e1";
const INK = "#000000";

export type ItineraryItem = {
  time: string;
  title: string;
  description: string;
  /** Present in JSON; unused in UI for now (kept for future chips). */
  category?: string;
  highlight?: boolean;
};

export type ItineraryTracks = {
  domestic: readonly ItineraryItem[];
  international: readonly ItineraryItem[];
};

export type ItineraryTabLabels = {
  domestic: string;
  international: string;
};

type TrackKey = "domestic" | "international";

interface TourItineraryProps {
  /** Flat list (legacy tours). */
  items?: readonly ItineraryItem[];
  /** Split domestic/international (opt-in; any tour can use this shape later). */
  tracks?: ItineraryTracks;
  /** Tab labels — typically price.*.badge when available. */
  tabLabels?: ItineraryTabLabels;
}

function isSplitTracks(
  tracks: ItineraryTracks | undefined
): tracks is ItineraryTracks {
  return (
    !!tracks &&
    Array.isArray(tracks.domestic) &&
    tracks.domestic.length > 0 &&
    Array.isArray(tracks.international) &&
    tracks.international.length > 0
  );
}

function DayList({ items }: { items: readonly ItineraryItem[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200" />

      <div className="space-y-8">
        {items.map((item, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={`${item.time}-${item.title}-${idx}`}
              className="flex gap-6 group"
              onMouseEnter={() => setExpandedIndex(idx)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <div className="hidden md:flex relative w-12 justify-center flex-shrink-0">
                <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 border-slate-200">
                  <div className="w-3 h-3 rounded-full bg-slate-400" />
                </div>
              </div>

              <div
                className={`
                  bg-white rounded-2xl p-6 w-full
                  transition-all duration-300
                  ${
                    item.highlight
                      ? "shadow-lg shadow-emerald-100 border-2 border-emerald-200"
                      : isExpanded
                        ? "shadow-lg shadow-slate-200 border-2 border-emerald-100"
                        : "shadow-sm border border-slate-100 hover:shadow-md"
                  }
                  ${isExpanded ? "md:scale-[1.02]" : ""}
                `}
              >
                <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                  <span
                    className={`
                      inline-flex items-center gap-2
                      px-3 py-1.5 rounded-full text-xs font-semibold
                      transition-colors duration-300
                      ${
                        item.highlight
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
                      ★ {t.destinations.tour.highlight}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-xl text-slate-900 mb-2 break-words">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed break-words">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TourItinerary({
  items,
  tracks,
  tabLabels,
}: TourItineraryProps) {
  const { t } = useI18n();
  const baseId = useId();
  const [activeTrack, setActiveTrack] = useState<TrackKey>("domestic");

  const split = isSplitTracks(tracks);
  const flatItems = Array.isArray(items) ? items : [];

  const dayItems: readonly ItineraryItem[] = split
    ? tracks[activeTrack]
    : flatItems;

  if (!split && flatItems.length === 0) return null;
  if (split && dayItems.length === 0) return null;

  const labels: ItineraryTabLabels = {
    domestic: tabLabels?.domestic?.trim() || "Domestic",
    international: tabLabels?.international?.trim() || "International",
  };

  const tabKeys: TrackKey[] = ["domestic", "international"];

  const onTabKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, key: TrackKey) => {
      const keys: TrackKey[] = ["domestic", "international"];
      const idx = keys.indexOf(key);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = keys[(idx + 1) % keys.length];
        setActiveTrack(next);
        document.getElementById(`${baseId}-tab-${next}`)?.focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = keys[(idx - 1 + keys.length) % keys.length];
        setActiveTrack(prev);
        document.getElementById(`${baseId}-tab-${prev}`)?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveTrack("domestic");
        document.getElementById(`${baseId}-tab-domestic`)?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveTrack("international");
        document.getElementById(`${baseId}-tab-international`)?.focus();
      }
    },
    [baseId]
  );

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-3">
            {t.destinations.tour.itinerarytitle}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.destinations.tour.itinararysubtitle}
          </p>
        </div>

        {split && (
          <div
            role="tablist"
            aria-label={t.destinations.tour.itinerarytitle}
            className="
              mb-10 flex w-full max-w-xl mx-auto
              rounded-full p-1 gap-1
            "
            style={{ backgroundColor: SAND }}
          >
            {tabKeys.map((key) => {
              const selected = activeTrack === key;
              return (
                <button
                  key={key}
                  id={`${baseId}-tab-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveTrack(key)}
                  onKeyDown={(e) => onTabKeyDown(e, key)}
                  className="
                    flex-1 min-h-[44px] min-w-0
                    rounded-full px-3 py-2.5
                    text-xs sm:text-sm font-semibold
                    text-center leading-snug break-words
                    transition-colors duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  "
                  style={{
                    backgroundColor: selected ? TEAL : "transparent",
                    color: selected ? "#ffffff" : INK,
                    ["--tw-ring-color" as string]: TEAL,
                  }}
                >
                  {labels[key]}
                </button>
              );
            })}
          </div>
        )}

        {split ? (
          tabKeys.map((key) => (
            <div
              key={key}
              id={`${baseId}-panel-${key}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${key}`}
              hidden={activeTrack !== key}
            >
              {activeTrack === key && <DayList items={tracks[key]} />}
            </div>
          ))
        ) : (
          <DayList items={flatItems} />
        )}
      </div>
    </section>
  );
}
