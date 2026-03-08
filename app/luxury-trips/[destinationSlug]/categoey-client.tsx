"use client";

import { useState, useMemo, useEffect } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components-eng/ui/button";
import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "./hero-secction";
import { LuxuryToursSection } from "./tourssection";
import { WhyChooseLuxury } from "./why-choose-luxury";
import { luxuryPageContent, LuxurySlug } from "@/lib/data/luxury-page-content";
// import { TrainJourneyClient } from "../components/train-journey/train-journey-client";


type PageProps = {
  params: {
    slug: LuxurySlug;
  };
};

// const TrainJourney = [
//   "mahraja-train-tour-package",
// ]




export function LuxuryClient({ params }: PageProps) {
  const { locale, t } = useI18n();

  if (!luxuryPageContent[params.slug]) {
    notFound();
  }

  // const isTrainJourney = TrainJourney.includes(params.slug);

  // if (isTrainJourney) {
  //   return <TrainJourneyClient slug={params.slug} />;
  // }

  return (
    <main>
      <HeroSection slug={params.slug} />
      <LuxuryToursSection slug={params.slug} />
      <WhyChooseLuxury slug={params.slug} />
    </main>
  );
}