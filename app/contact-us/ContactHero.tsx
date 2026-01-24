"use client";

import { HeroSection } from "@/components/hero-section";
import { OfferBanner } from "@/components/offer-banner";
import { useI18n } from "@/lib/i18n/context";

export function ContactHero() {
  const { t } = useI18n();

  return (
    <>
      <HeroSection title={t.contact.heroTitle} backgroundQuery="Contact-hero" />
    </>
  );
}
