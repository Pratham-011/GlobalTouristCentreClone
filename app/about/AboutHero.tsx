"use client";

import { HeroSection } from "@/components/hero-section";
import { useI18n } from "@/lib/i18n/context";

export function AboutHero() {
  const { t } = useI18n();

  return (
    <HeroSection title={t.about.heroTitle} backgroundQuery="About-hero" />
  );
}
