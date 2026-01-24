"use client";

import { AccommodationCard } from "./accommodation-card";

// Interface matches your JSON structure
interface AccommodationData {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  location: string;
  description: string;
  rating: number;
}

interface AccommodationSectionProps {
  data: readonly AccommodationData[];
}

export function AccommodationSection({ data }: AccommodationSectionProps) {
  // Defensive check: don't render if data is missing or empty
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-[#fdfbf7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a2238] mb-4">
            Luxury Accommodations
          </h2>
          {/* Decorative Gradient Underline */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#1a2238] mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.map((hotel, index) => (
            <AccommodationCard
              key={index}
              imageSrc={hotel.image?.src || ""}
              imageAlt={hotel.image?.alt || ""}
              name={hotel.name}
              location={hotel.location}
              description={hotel.description}
              rating={hotel.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

