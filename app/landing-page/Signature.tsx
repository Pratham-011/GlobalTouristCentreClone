"use client";

import { useRef } from "react";
import {
  ArrowRight,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import type { ExperienceId } from "@/lib/i18n/translations";
import Image from "next/image";

const Signature = () => {
  const { t, locale } = useI18n();
  const experiencesRef = useRef<HTMLDivElement>(null);

  const signatureExperiences: {
    id: ExperienceId;
    imageUrl: string;
    price: string;
    link: string;
    popular: boolean;
  }[] = [
      {
        id: "all-goa",
        imageUrl: "/assets/destinations/Thumbnails/Goa3.webp",
        price: "$70",
        link: `/${locale}/destinations/day-trips/south-goa-day-exursion`,
        popular: false,
      },
      {
        id: "palolem",
        imageUrl: "/assets/destinations/Thumbnails/Palolem.webp",
        price: "$70",
        link: `/${locale}/destinations/day-trips/palolem-cola-beach-dolphin-tour`,
        popular: true,
      },
      {
        id: "mumbai",
        imageUrl: "/assets/destinations/Thumbnails/mumbai.webp",
        price: "$360",
        link: `/${locale}/destinations/day-trips/mumbai-one-day-excursion`,
        popular: true,
      },
      {
        id: "taj",
        imageUrl: "/assets/destinations/Thumbnails/agra.webp",
        price: "$300",
        link: `/${locale}/destinations/domestic/delhi-agra-tour-from-goa`,
        popular: true,
      },
      {
        id: "hampi",
        imageUrl: "/assets/destinations/Thumbnails/Hampi.webp",
        price: "$170",
        link: `/${locale}/destinations/domestic/hampi-badami-heritage-tour-from-goa`,
        popular: false,
      },
    ];

  const scrollExperiences = (direction: "left" | "right") => {
    if (!experiencesRef.current) return;
    experiencesRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const experiences = signatureExperiences
    .map((exp) => {
      const content = t.experiences.items?.[exp.id];
      if (!content) return null;
      return { ...exp, ...content };
    })
    .filter(Boolean);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="experiences-heading"
            className="relative font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 pb-3"
          >
            {t.experiences.title}

            <span
              aria-hidden="true"
              className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
                bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.experiences.subtitle}
          </p>
        </div>
        {/* Mobile */}
        <div className="flex flex-col gap-6 sm:hidden">
          {experiences.map((exp: any) => (
            <div
              key={exp.id}
              className="relative h-[320px] rounded-[15px] overflow-hidden shadow-lg"
            >
              <Image
                src={exp.imageUrl}
                alt={exp.title}
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <h3 className="font-serif text-lg mb-1">{exp.title}</h3>

                <div className="flex gap-3 text-xs mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>

                  {exp.highlight && (
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {exp.highlight}
                    </span>
                  )}

                  <span className="bg-white/20 px-2 rounded-full">
                    {exp.price}
                  </span>
                </div>

                <p className="text-xs line-clamp-2 mb-3">{exp.description}</p>

                <a
                  href={exp.link}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30"
                >
                  {t.experiences.explore}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="relative hidden sm:block">
          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollExperiences("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white"
          >
            <ChevronLeft />
          </Button>

          <div
            ref={experiencesRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-8"
          >
            {experiences.map((exp: any) => (
              <div key={exp.id} className="w-[320px] snap-start flex-shrink-0">
                <div className="relative h-[320px] rounded-[15px] overflow-hidden shadow-lg group">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="font-serif text-lg mb-1">{exp.title}</h3>

                    <p className="text-xs line-clamp-2 mb-3">
                      {exp.description}
                    </p>

                    <a
                      href={exp.link}
                      className="inline-flex items-center gap-2 text-sm"
                    >
                      {t.experiences.explore}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollExperiences("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Signature;
