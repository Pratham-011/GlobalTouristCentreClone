"use client";

import { HeroSection } from "@/components/hero-section";
import { DestinationGrid } from "../../destinations/destination-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n/context";
import { domesticTrips, internationalTrips } from "@/lib/data/destinations";

export default function DomesticInternationalTripsPage() {
  const { t, locale } = useI18n();

  const data = t?.servicePages?.domesticInternational;
  if (!data) return null;

  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroSection
        title={data.hero.title}
        backgroundQuery="domestic-international-hero"
      />

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/assets/services/domestic-international-about.webp"
              alt={data.about.title}
              className="w-[600px] h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              {data.about.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {data.about.description}
            </p>
            <h3 className="font-semibold mb-3">{data.about.whyTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {data.about.points.map((point: string, idx: number) => (
                <li key={idx}>✔ {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= DOMESTIC TRIPS ================= */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-2">
            {data.domestic.title}
          </h2>
          <p className="text-muted-foreground mb-8">{data.domestic.subtitle}</p>

          <DestinationGrid items={domesticTrips.slice(0, 4)} />

          <div className="text-center mt-10">
            <a
              href={`/${locale}/destinations/domestic`}
              className="inline-flex items-center rounded-full px-10 py-4
                         bg-[#f8d56b] text-black font-semibold
                         hover:bg-[#f8d56b]/90 transition"
            >
              {data.domestic.viewMore}
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL TRIPS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-2">
            {data.international.title}
          </h2>
          <p className="text-muted-foreground mb-8">
            {data.international.subtitle}
          </p>

          <DestinationGrid items={internationalTrips.slice(0, 4)} />

          <div className="text-center mt-10">
            <a
              href={`/${locale}/destinations/international`}
              className="inline-flex items-center rounded-full px-10 py-4
                         bg-[#f8d56b] text-black font-semibold
                         hover:bg-[#f8d56b]/90 transition"
            >
              {data.international.viewMore}
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2939] relative inline-block pb-3">
              {data.faq.title}
              <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-gradient-to-r from-[#F6CF5F] via-[#F6CF5F] to-[#14B8A6] rounded-full" />
            </h2>
            <p className="text-[#475467] mt-6 text-lg">{data.faq.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 w-full">
            {data.faq.questions.map((faq: any, index: number) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-none bg-white rounded-xl shadow-sm px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-bold text-[#1D2939] text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#475467] text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
