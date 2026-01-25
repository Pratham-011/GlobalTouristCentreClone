"use client";

import { HeroSection } from "@/components-eng/hero-section";
import { OfferBanner } from "@/components-eng/offer-banner";
import { useI18n } from "@/lib/i18n/context";

export function ContactHero() {
  const { t } = useI18n();

  return (
    <>
      <HeroSection title={t.contact.heroTitle} backgroundQuery="Contact-hero" />
    </>
  );
}
