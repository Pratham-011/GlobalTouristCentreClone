import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

interface HomeCardProps {
  imageUrl: string;
  title: string;
  duration: string;
  description: string;
  href: string;
  rating?: number;
}

const HomeCard: React.FC<HomeCardProps> = ({
  imageUrl,
  title,
  duration,
  description,
  href,
  rating = 4.9,
}) => {
  return (
    <Link
      href={href}
      aria-label={`View ${title} package`}
      className="block h-full"
    >
      <div
        className="
    group bg-white rounded-2xl overflow-hidden
    transition-all duration-300 ease-out
    hover:-translate-y-3 hover:shadow-2xl
    h-full min-h-[430px]
    flex flex-col
    cursor-pointer
    max-w-[18rem] sm:max-w-[18rem]
  "
      >
        {/* IMAGE (fixed height) */}
        <div className="relative h-48 w-full overflow-hidden shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="
              object-cover
              transition-transform duration-500 ease-out
              will-change-transform
              group-hover:scale-110
            "
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* CONTENT (flex column) */}
        <div className="p-5 flex flex-col flex-1">
          {/* TITLE + RATING */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
              {title}
            </h3>

            <div className="flex items-center gap-1 ml-3 flex-shrink-0">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">
                {rating}
              </span>
            </div>
          </div>

          {/* DESCRIPTION (clamped) */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* SPACER pushes footer down */}
          <div className="flex-1" />

          {/* DURATION (always bottom-aligned) */}
          <p className="text-gray-500 text-sm font-medium mt-4">{duration}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
