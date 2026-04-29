"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Header } from "@/components-eng/header";

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
  const encodePathSegment = (segment: string) => {
    try {
      return encodeURIComponent(decodeURIComponent(segment));
    } catch {
      return encodeURIComponent(segment);
    }
  };
  const encodeAssetPath = (src: string) =>
    src
      .split("/")
      .map((segment, index) =>
        index === 0 && segment === "" ? "" : encodePathSegment(segment)
      )
      .join("/");
  const toVariant = (src: string, suffix: "-sm" | "-md") =>
    src.replace(/\.webp$/i, `${suffix}.webp`);
  const title = data.title || "Luxury Experience";
  const ctaLink = data.cta_link || "#";
  const backgroundBase = encodeAssetPath(backgroundImage);
  const backgroundMd = toVariant(backgroundBase, "-md");
  const backgroundSm = toVariant(backgroundBase, "-sm");

  return (
<section className="relative h-[60vh] min-h-[500px] w-full flex flex-col items-center justify-end pb-12 md:justify-center md:pb-0 text-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src={backgroundBase}
      srcSet={`${backgroundSm} 640w, ${backgroundMd} 1024w, ${backgroundBase} 1920w`}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
      alt={title}
      width={1920}
      height={1080}
      fetchPriority="high"
      loading="eager"
      decoding="async"
      className="w-full h-full object-cover"
    />

    {/* ✅ FIX: overlay should not block clicks */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0f2d40]/90 via-[#0f2d40]/60 to-[#0f2d40]/40 pointer-events-none" />
  </div>

  {/* ✅ FIX: Header isolated + fixed */}
  <div className="fixed top-0 left-0 w-full z-[9999]">
    <Header />
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 flex flex-col items-center pt-24 md:pt-28 lg:pt-20">
    {/* Premium Badge */}
    <div className="mb-6">
      <span className="bg-[#d4af37] text-white text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full shadow-md">
        {data.badge}
      </span>
    </div>

    {/* Main Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#fdfbf7] mb-4 leading-tight drop-shadow-sm max-w-4xl">
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
      target="_blank"
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
