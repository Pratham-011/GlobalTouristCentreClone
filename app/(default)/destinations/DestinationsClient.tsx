"use client";

import { useI18n } from "@/lib/i18n/context";
import { DestinationsHero } from "./destinations-hero";
import { DestinationsSection } from "./destinations-section";

export default function DestinationsClient() {
  const { t } = useI18n();

  return (
    <>
      <DestinationsHero />
      <DestinationsSection />
    </>
  );
}
