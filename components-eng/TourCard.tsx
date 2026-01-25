import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';

interface TourCardProps {
  imageUrl: string;
  title: string;
  // price: string;
  duration: string;
  description: string;
  features: string[];
  href: string;
  category?: string;
}

const TourCard: React.FC<TourCardProps> = ({
  imageUrl,
  title,
  // price,
  duration,
  description,
  features,
  href,
  category
}) => {
  return (
    <div 
      className="group bg-white/5 rounded-xl overflow-hidden transition-all duration-300 ease-in-out border border-white/10 backdrop-blur-sm hover:-translate-y-2 hover:border-[#f8d56b] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] h-full min-h-[380px] flex flex-col"
      data-category={category}
    >
      {/* Image Section */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Header - Title & Price */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl text-white leading-tight min-h-[2.6em] flex-1">
            {title}
          </h3>
          {/* <span className="bg-gradient-to-br from-[#f8d56b] to-[#f4c430] text-[#1a1a2e] px-2.5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap ml-2">
            {price}
          </span> */}
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-[#f8d56b] text-sm mb-3">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Features/Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {features.map((feature, index) => (
            <span
              key={index}
              className="bg-[#f8d56b]/10 text-[#f8d56b] px-2.5 py-1.5 rounded-full text-xs border border-[#f8d56b]/20"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 w-full bg-white/10 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out border border-white/20 text-sm mt-auto hover:bg-gradient-to-br hover:from-[#f8d56b] hover:to-[#f4c430] hover:text-[#1a1a2e] hover:-translate-y-1"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default TourCard;