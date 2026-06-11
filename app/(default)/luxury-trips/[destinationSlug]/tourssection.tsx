"use client";

import { useI18n } from "@/lib/i18n/context";
import { LuxuryTourCard } from "./luxury-tour-card";
import { LuxurySlug } from "@/lib/data/luxury-page-content";

interface LuxuryToursSectionProps {
  slug:LuxurySlug
}

export function LuxuryToursSection({ slug }: LuxuryToursSectionProps) {
  const { t ,locale} = useI18n();

  const section = t.luxuryPages?.[slug]?.toursSection;

  if (!section) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#001f3f] mb-4">
            {section.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#001f3f] mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div
          className={`
    grid gap-8 max-w-6xl mx-auto justify-items-center
    ${
      section.packages.length === 1
        ? "grid-cols-1"
        : "grid-cols-1 md:grid-cols-2"
    }
  `}
        >
          {section.packages.map((pkg, index) => (
            <LuxuryTourCard
              key={index}
              title={pkg.title}
              location={pkg.location}
              description={pkg.description}
              badgeText={pkg.badge}
              image={pkg.image}
              buttonText={t.destinations.exploreTours}
              href={pkg.link}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
