"use client";

import { useI18n } from "@/lib/i18n/context";
import { luxuryPageContent, LuxurySlug } from "@/lib/data/luxury-page-content";
import { Header } from "@/components/header";

interface HeroSectionProps {
  slug: LuxurySlug;
}

export function HeroSection({ slug }: HeroSectionProps) {
  const { t } = useI18n();

  const pageText = t.luxuryPages[slug];
  const pageMedia = luxuryPageContent[slug];
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

  if (!pageText || !pageMedia) return null;
  const backgroundBase = encodeAssetPath(pageMedia.image);
  const backgroundMd = toVariant(backgroundBase, "-md");
  const backgroundSm = toVariant(backgroundBase, "-sm");

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundBase}
          srcSet={`${backgroundSm} 640w, ${backgroundMd} 1024w, ${backgroundBase} 1920w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
          alt={pageText.hero.title}
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Header/>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 tracking-tight">
          {pageText.hero.title}
        </h1>

        <p className="text-white/90 text-sm md:text-base lg:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          {pageText.hero.description}
        </p>

        <div className="inline-block">
          <button className="bg-gradient-to-r from-[#eab308] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            {pageText.hero.discountBadge}
          </button>
        </div>
      </div>
    </section>
  );
}
