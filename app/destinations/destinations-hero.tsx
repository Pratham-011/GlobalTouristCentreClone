import { HeroSection } from "@/components/hero-section";
import { useI18n } from "@/lib/i18n/context";


export function DestinationsHero() {
  const { t } = useI18n();

  return (
    <>
      <HeroSection
        title={t.destinations.herotitle}
        backgroundQuery="Destinations-hero"
      />


    </>
  );
}
