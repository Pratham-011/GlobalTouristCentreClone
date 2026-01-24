"use client";

import Image from "next/image";
import { MapPin, Star } from "lucide-react";

interface AccommodationCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  location: string;
  description: string;
  rating: number;
}

export function AccommodationCard({
  imageSrc,
  imageAlt,
  name,
  location,
  description,
  rating,
}: AccommodationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-56 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-[#1a2238] mb-2">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-slate-500 mb-3">
          <MapPin className="w-4 h-4 text-[#1a2238]" />
          <span className="text-sm font-medium">{location}</span>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-[#eab308] text-[#eab308]" // Gold/Yellow filled
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
