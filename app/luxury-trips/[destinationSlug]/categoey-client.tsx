"use client";

import { useState, useMemo, useEffect } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "./hero-secction";
import {LuxuryToursSection} from "./tourssection";
import { WhyChooseLuxury } from "./why-choose-luxury";
import { luxuryPageContent, LuxurySlug } from "@/lib/data/luxury-page-content";

type PageProps = {
  params: {
    slug: LuxurySlug;
  };
};



export function LuxuryClient({ params }: PageProps) {
  const { locale, t } = useI18n();

  if (!luxuryPageContent[params.slug]) {
    notFound();
  }

  return (
    <main>
      <HeroSection slug={params.slug} />
      <LuxuryToursSection slug={params.slug} />

      <WhyChooseLuxury slug={params.slug} />
    </main>
  );
}