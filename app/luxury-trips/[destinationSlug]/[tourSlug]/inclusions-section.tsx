"use client";

import { InclusionCard } from "./inclusion-card";

interface InclusionItem {
  icon: string;
  title: string;
  description: string;
}

interface InclusionsSectionProps {
  data: readonly InclusionItem[];
}

export function InclusionsSection({ data }: InclusionsSectionProps) {
  // Defensive check: don't render if data is missing or empty
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a2238] mb-4">
            Package Inclusions
          </h2>
          {/* Tri-color decorative line from the image */}
          <div className="flex justify-center items-center gap-0">
            <div className="w-10 h-[3px] bg-[#d4af37]" />
            <div className="w-10 h-[3px] bg-[#10b981]" />
            <div className="w-10 h-[3px] bg-[#1a2238]" />
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {data.map((item, index) => (
            <InclusionCard
              key={index}
              iconString={item.icon || "fas fa-check"}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

