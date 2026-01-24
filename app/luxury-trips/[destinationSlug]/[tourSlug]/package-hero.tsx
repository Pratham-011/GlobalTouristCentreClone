"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Header } from "@/components/header";

// Define the shape of the hero_section data based on your JSON
interface PackageHeroData {
  type: string;
  badge: string;
  title: string;
  location: string;
  cta_text: string;
  cta_link: string;
  background_image: string;
}

interface PackageHeroProps {
  data: PackageHeroData;
}

export function PackageHero({ data }: PackageHeroProps) {
  // Defensive check
  if (!data) return null;

  const backgroundImage = data.background_image || "/assets/Luxury/default-hero.webp";
  const title = data.title || "Luxury Experience";
  const ctaLink = data.cta_link || "#";

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <Header />
        {/* Gradient Overlay - Dark Teal/Blue tint to match the reference image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2d40]/90 via-[#0f2d40]/60 to-[#0f2d40]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        {/* Premium Badge */}
        <div className="mb-6">
          <span className="bg-[#d4af37] text-white text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full shadow-md">
            {data.badge}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#fdfbf7] mb-4 leading-tight drop-shadow-sm max-w-4xl">
          {data.title}
        </h1>

        {/* Location / Duration Line */}
        <div className="flex items-center gap-2 text-[#e2e8f0] mb-10 text-sm md:text-base font-medium tracking-wide">
          <MapPin className="w-4 h-4 text-[#d4af37]" />
          <span>{data.location}</span>
        </div>

        {/* CTA Button */}
        <Link
          href={ctaLink}
          target="_blank" // Opens WhatsApp/Link in new tab
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-gradient-to-r from-[#d4af37] to-[#b49026] hover:from-[#eab308] hover:to-[#ca8a04] text-white text-base font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            {data.cta_text}
          </button>
        </Link>
      </div>
    </section>
  );
}
