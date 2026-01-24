"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LuxuryTourCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  buttonText: string;
  badgeText: string;
  href: string; // ✅ new
  locale: string; // ✅ new
}

export function LuxuryTourCard({
  image,
  title,
  location,
  description,
  buttonText,
  badgeText,
  href,
  locale
}: LuxuryTourCardProps) {
  return (
    <div
      className="
        group bg-white rounded-xl overflow-hidden
        border border-gray-100
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        flex flex-col h-full
        w-full max-w-[520px] mx-auto
      "
    >
      {/* IMAGE */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Premium Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="
              bg-[#d4af37] text-white
              text-[9px] sm:text-[10px]
              font-bold tracking-widest uppercase
              px-3 py-1 rounded-full
              shadow-sm
            "
          >
            {badgeText}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="
            font-serif font-bold text-slate-800
            text-lg sm:text-xl
            leading-snug mb-1.5
          "
        >
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-slate-500 mb-3">
          <MapPin className="h-4 w-4 text-[#d4af37]" />
          <span className="text-xs sm:text-sm font-medium">{location}</span>
        </div>

        {/* Description */}
        <p
          className="
            text-slate-600
            text-xs sm:text-sm
            leading-relaxed
            mb-4 flex-1
          "
        >
          {description}
        </p>

        {/* CTA */}
        <Link href={`/${locale}${href}`} className="mt-auto">
          <Button
            className="
              w-full bg-[#d4af37] hover:bg-[#b8962e]
              text-white font-semibold
              py-5 sm:py-6
              text-sm
              rounded-md
              transition-colors
            "
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
