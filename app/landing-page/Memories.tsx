"use client";

import type React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";

// Travel Memories Gallery
const travelMemories = [
  {
    id: 1,
    imageQuery: "tourists group photo Taj Mahal",
    imageurl: "/assets/trips/trip9.webp",
  },
  {
    id: 2,
    imageQuery: "female tourist at a temple",
    imageurl: "/assets/trips/trip6.webp",
  },
  {
    id: 3,
    imageQuery: "couple honeymoon trip",
    imageurl: "/assets/trips/trip5.webp",
  },
  {
    id: 4,
    imageQuery: "group tour Rajasthan palace",
    imageurl: "/assets/trips/trip10.webp",
  },
  {
    id: 5,
    imageQuery: "tourist couple at a temple",
    imageurl: "/assets/trips/trip8.webp",
  },
];

const Memories = () => {
  const { t } = useI18n();
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);

  const nextMemory = () => {
    setActiveMemoryIndex((prev) =>
      prev === travelMemories.length - 1 ? 0 : prev + 1
    );
  };

  const prevMemory = () => {
    setActiveMemoryIndex((prev) =>
      prev === 0 ? travelMemories.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="memories-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="memories-heading"
            className="relative font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 pb-3"
          >
            {t.memories.title}
            <span
              aria-hidden="true"
              className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
                     bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.memories.subtitle}
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-4" role="list">
          {travelMemories.map((memory) => (
            <div
              key={memory.id}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              role="listitem"
            >
              <Image
                src={memory.imageurl}
                alt={memory.imageQuery}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative max-w-xl mx-auto lg:hidden">
          <div className="flex items-center gap-4">
            {/* Prev (desktop) */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevMemory}
              className="shrink-0 rounded-full bg-transparent hidden sm:flex"
              aria-label="Previous memory"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Image */}
            <div className="flex-1">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={travelMemories[activeMemoryIndex].imageurl}
                  alt={travelMemories[activeMemoryIndex].imageQuery}
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </div>
            </div>

            {/* Next (desktop) */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextMemory}
              className="shrink-0 rounded-full bg-transparent hidden sm:flex"
              aria-label="Next memory"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevMemory}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextMemory}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
