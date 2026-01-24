"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import {
  domesticTrips,
  internationalTrips,
  dayTrips,
} from "@/lib/data/destinations";
import { DestinationGrid } from "./destination-grid";
import Link from "next/link";
import { useEffect, useState } from "react";



export function DestinationsSection() {
  const { t, locale } = useI18n();
  



  return (
    <>
      <section className="pb-12 pt-2 sm:py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-13">
          <div className="mb-12">
            <div className="relative inline-block">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {t.destinations.title}
              </h2>

              <span
                aria-hidden="true"
                className="
                absolute left-0 -bottom-1
                h-[4px] w-20 rounded-full
                bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
              "
              />
            </div>

            <p className="text-slate-600 w-full mt-4">
              {t.destinations.subtitle}
            </p>
          </div>
          <DestinationBlock
            title={t.destinations.domesticTitle}
            subtitle={t.destinations.domesticSubtitle}
            items={domesticTrips.slice(0, 4)}
            href={`/${locale}/destinations/domestic`}
          />

          <DestinationBlock
            title={t.destinations.internationalTitle}
            subtitle={t.destinations.internationalSubtitle}
            items={internationalTrips.slice(0, 4)}
            href={`/${locale}/destinations/international`}
          />

          <DestinationBlock
            title={t.destinations.dayTripsTitle}
            subtitle={t.destinations.dayTripsSubtitle}
            items={dayTrips.slice(0, 4)}
            href={`/${locale}/destinations/day-trips`}
          />
        </div>
      </section>
    </>
  );
}

function DestinationBlock({
  title,
  subtitle,
  items,
  href,
}: {
  title: string;
  subtitle: string;
  items: any[];
  href: string;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  return (
    <div>
      {/* Title */}
      <div
        className={`
    relative inline-block mb-4
    transition-all duration-700 ease-out
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
      >
        <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
          {title}
        </h3>

        <span
          aria-hidden="true"
          className="absolute left-0 -bottom-2 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
        />
      </div>

      {/* Subtitle */}
      <p
        className={`
    text-muted-foreground mb-6 max-w-2xl
    transition-all duration-700 ease-out delay-150
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
      >
        {subtitle}
      </p>

      {/* Cards */}
      <div
        className={`
    transition-all duration-700 ease-out delay-300
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
      >
        <DestinationGrid items={items} />
      </div>

      {/* CTA */}
      <div
        className={`
    text-center mt-10
    transition-all duration-700 ease-out delay-500
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
      >
        <Link href={href}>
          <Button
            variant="outline"
            className="
    rounded-full
    font-semibold
    transition-all duration-300 ease-out
    border-border
    bg-[#f8d56b]
    hover:border-[#f8d56b]
    hover:bg-[#ffcc34]
    hover:text-black
    hover:shadow-lg

    /* SIZE RESPONSIVENESS */
    px-5 py-3 text-sm        /* mobile */
    sm:px-6 sm:py-3.5 sm:text-sm
    md:px-8 md:py-4 md:text-base
    lg:px-10 lg:py-6 lg:text-lg
  "
          >
            View More {title}
          </Button>
        </Link>
      </div>
    </div>
  );
}
