"use client";

import Image from "next/image";
import { Clock, MapPin, Star } from "lucide-react";
import { Header } from "../header";

interface DetailedTourHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  meta: {
    duration: string;
    locations: number;
    rating: string;
  };
}

export function DetailedTourHero({
  title,
  subtitle,
  backgroundImage,
  meta,
}: DetailedTourHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <Header/>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end">
          <div className="pb-16 max-w-3xl text-white">
            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-white/85">
              {subtitle}
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm sm:text-base text-white/90">
              {meta?.duration && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {meta.duration}
                </span>
              )}

              {meta?.locations && (
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {meta.locations} Locations
                </span>
              )}

              {meta?.rating && (
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {meta.rating}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
