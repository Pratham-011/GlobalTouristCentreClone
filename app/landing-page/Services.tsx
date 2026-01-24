"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Hotel,
  FileText,
  Plane,
  ArrowRight,
  Users,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";

/* ------------------------------------------------------------------ */
/* STRUCTURAL DATA ONLY */
/* ------------------------------------------------------------------ */

const Services = () => {
  const { t ,locale} = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const premiumServices = [
    {
      id: "custom",
      icon: Sparkles,
      link: `/${locale}/services/custom-tour`,
    },
    {
      id: "luxury",
      icon: Hotel,
      link: `/${locale}/services/hotel-booking`,
    },
    {
      id: "group",
      icon: Users,
      link: `/${locale}/services/group-tours`,
    },
    {
      id: "visa",
      icon: FileText,
      link: `/${locale}/services/visa-assistance`,
    },
    {
      id: "flight",
      icon: Plane,
      link: `/${locale}/services/flight-booking`,
    },
  ];

  /* ------------------------------------------------------------------ */
  /* AUTO ROTATION */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % premiumServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((i) => (i + 1) % premiumServices.length);

  const prev = () =>
    setActiveIndex(
      (i) => (i - 1 + premiumServices.length) % premiumServices.length
    );

  /* ------------------------------------------------------------------ */
  /* NORMALIZED VIEW MODEL */
  /* ------------------------------------------------------------------ */
  const services = premiumServices
    .map((service) => {
      const content = t.premiumServices.items?.[service.id];
      if (!content) return null;
      return { ...service, ...content };
    })
    .filter(Boolean);

  const activeService = services[activeIndex];
  if (!activeService) return null;

  const Icon = activeService.icon;
  const count = services.length;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            {t.premiumServices.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.premiumServices.subtitle}
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="hidden sm:flex rounded-full bg-white shadow"
          >
            <ChevronLeft />
          </Button>

          <Card className="flex-1 max-w-[320px] h-[460px] flex flex-col items-center text-center p-6 rounded-2xl shadow-lg">
            <CardContent className="p-0 flex flex-col h-full w-full justify-between">
              {/* ICON */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0d9488] to-[#14b8a6] text-white shadow-lg">
                  <Icon className="w-9 h-9" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-xl font-bold mb-4 h-[60px] flex items-center justify-center">
                {activeService.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-600 text-sm sm:text-base mb-6 overflow-y-auto">
                {activeService.description}
              </p>

              {/* CTA */}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-[#0d9488] to-[#14b8a6] text-white"
              >
                <Link
                  href={activeService.link}
                  className="flex items-center justify-center gap-2"
                >
                  {t.premiumServices.explore}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="hidden sm:flex rounded-full bg-white shadow"
          >
            <ChevronRight />
          </Button>
        </div>

        {/* PAGINATION (NEW SYSTEM) */}
        <div className="mt-8">
          <Pagination>
            <PaginationContent className="gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <PaginationItem key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to service ${index + 1}`}
                    className={cn(
                      "p-0 min-w-0 min-h-0 rounded-full transition-all duration-300",
                      "h-1.5 w-4",
                      "sm:h-2 sm:w-6 md:h-2 md:w-8",
                      index === activeIndex
                        ? "bg-primary w-6 sm:w-8 md:w-12"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                  />
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default Services;
