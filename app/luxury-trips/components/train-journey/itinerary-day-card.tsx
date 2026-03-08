"use client";

import { MapPin, CheckCircle2 } from "lucide-react";

interface ItineraryDayCardProps {
  dayTitle: string;
  location: string;
  description: string;
  activities: string[];
}

export function ItineraryDayCard({
  dayTitle,
  location,
  description,
  activities,
}: ItineraryDayCardProps) {
  return (
    <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
      {/* Card Header 
        - Dark Navy Background
        - Gold Title
        - Subtle top gradient border to match image_020c7e.png
      */}
      <div className="relative bg-[#1a2238] p-6 text-white">
        {/* Decorative Top Line Gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#10b981] to-[#1a2238]" />

        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#f8d56b] mb-2">
          {dayTitle}
        </h3>

        <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
          <MapPin className="w-4 h-4 text-white" />
          <span>{location}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 bg-white">
        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
          {description}
        </p>

        {/* Activities List (Pill Style) */}
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg transition-colors hover:bg-slate-100"
            >
              {/* Teal Check Icon */}
              <CheckCircle2 className="w-5 h-5 text-[#0d9488] flex-shrink-0" />
              <span className="text-slate-700 text-sm font-medium">
                {activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
