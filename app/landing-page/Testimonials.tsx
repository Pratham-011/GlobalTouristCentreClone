"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";

const Testimonials = () => {
  const { t } = useI18n();
  const testimonials = t.testimonials.items;

  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const count = testimonials.length;
  const active = testimonials[activeIndex];

  const next = () => setActiveIndex((i) => (i + 1) % count);

  const prev = () => setActiveIndex((i) => (i - 1 + count) % count);

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="testimonials-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
          >
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            {/* PREV */}
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="hidden sm:flex rounded-full bg-transparent"
              aria-label={t.testimonials.prev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* CARD */}
            <Card className="flex-1 p-6 sm:p-8 lg:p-10 text-center">
              <CardContent className="p-0">
                {/* RATING */}
                <div
                  className="flex justify-center gap-1 mb-4"
                  aria-label={`${active.rating} out of 5 stars`}
                >
                  {[...Array(active.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* QUOTE ICON */}
                <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />

                {/* TEXT */}
                <blockquote className="text-base sm:text-lg italic mb-6 text-pretty">
                  “{active.text}”
                </blockquote>

                {/* AUTHOR */}
                <cite className="not-italic">
                  <span className="font-semibold block">{active.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {active.location}
                  </span>
                </cite>
              </CardContent>
            </Card>

            {/* NEXT */}
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="hidden sm:flex rounded-full bg-transparent"
              aria-label={t.testimonials.next}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* PAGINATION (NEW SYSTEM) */}
          <div className="mt-6">
            <Pagination>
              <PaginationContent className="gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <PaginationItem key={index}>
                    <Button
                      variant="ghost"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
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
      </div>
    </section>
  );
};

export default Testimonials;
