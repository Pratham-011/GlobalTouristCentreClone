"use client";

import { Star, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";


type DestinationCardProps = {
  locale: string;
  category: "day-trips" | "domestic" | "international";
  slug: string;
  title: string;
  description: string;
  rating: number;
  duration: string;
  imageQuery: string;
  tags?: string[];
  badge?: "new" | "hot";
  alt?: string;
};

export function DestinationCard({
  category,
  slug,
  title,
  description,
  rating,
  duration,
  imageQuery,
  tags = [],
  badge,
  alt,
}: DestinationCardProps) {
  const { t,locale } = useI18n();
  const href = `/${locale}/destinations/${category}/${slug}`;
  /* Resolve localized trip content */
  const trip = t.trips?.[slug];

  const resolvedTitle = trip?.title ?? title;
  const resolvedDescription = trip?.description ?? description;
  const resolvedDuration = trip?.duration ?? duration;

  return (
    <a href={href} className="block focus:outline-none group max-w-sm">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1   h-[360px] md:h-[320px] lg:h-[400px] flex flex-col">
        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={`/assets${imageQuery}`}
            alt={alt ?? resolvedTitle}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {badge && (
            <span
              className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                badge === "new" ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              {badge === "new"
                ? t.collections?.new ?? "New"
                : t.collections?.hot ?? "Hot"}
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Title and Rating */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1">
              {resolvedTitle}
            </h3>

            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg shrink-0">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-gray-900">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {resolvedDescription}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Duration */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="font-medium">{resolvedDuration}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
