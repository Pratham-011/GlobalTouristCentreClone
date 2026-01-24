"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/destination-card";
import { FILTERS_BY_SLUG } from "./filters";
import { useI18n } from "@/lib/i18n/context";
import { SectionTitle } from "@/components/SectionTitle";

type Props = {
  slug: "domestic" | "international" | "day-trips";
  items: any[];
};

const TITLE_KEY_BY_SLUG = {
  domestic: "domesticTitle",
  international: "internationalTitle",
  "day-trips": "dayTripsTitle",
} as const;

const SUBTITLE_KEY_BY_SLUG = {
  domestic: "domesticSubtitle",
  international: "internationalSubtitle",
  "day-trips": "dayTripsSubtitle",
} as const;

export function DestinationsGridSection({ slug, items }: Props) {
  const { locale, t } = useI18n();
  const filters = FILTERS_BY_SLUG[slug];

  const [activeFilter, setActiveFilter] = useState<"all" | string>("all");

  /* Reset filter when category changes */
  useEffect(() => {
    setActiveFilter("all");
  }, [slug]);

  const filteredItems = useMemo(() => {
    if (!filters || activeFilter === "all") return items;
    return items.filter((item) => item.zone === activeFilter);
  }, [items, activeFilter, filters]);

  const title = t.destinations[TITLE_KEY_BY_SLUG[slug]];
  const subtitle = t.destinations[SUBTITLE_KEY_BY_SLUG[slug]];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header */}
        <SectionTitle title={title} subtitle={subtitle} />

        {/* Filters */}
        {filters && (
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isDisabled =
                filter.key !== "all" &&
                !items.some((item) => item.zone === filter.key);

              const label = t.filters?.[slug]?.[filter.key] ?? filter.key;

              return (
                <Button
                  key={filter.key}
                  size="sm"
                  disabled={isDisabled}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {label}
                </Button>
              );
            })}
          </div>
        )}

        {/* Grid / Carousel */}
        {filteredItems.length > 0 ? (
          <div
            className="
              flex gap-6 overflow-x-auto pb-4
              snap-x snap-mandatory
              sm:grid sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              sm:overflow-visible
              scrollbar-hide
            "
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="
                  snap-center
                  shrink-0
                  w-[80%]
                  sm:w-auto
                "
              >
                <DestinationCard locale={locale} {...item} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            {t.destinations.noResults ?? "No destinations available for this filter."}
          </p>
        )}
      </div>
    </section>
  );
}
