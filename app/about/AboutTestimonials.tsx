"use client";

import { TestimonialCard } from "@/components/testimonial-card";
import { useI18n } from "@/lib/i18n/context";
import { reviews } from "./about";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Ensure you have this utility or remove if not needed

// 1. Import Shadcn Pagination components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";

export function AboutTestimonials() {
  const { t } = useI18n();

  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Pagination state sync
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-left">
        {/* Heading */}
        <div className="relative inline-block">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 pb-3">
            {t.testimonials.whatTravelersSay}
          </h1>
          <span
            aria-hidden="true"
            className="
              absolute left-0 bottom-0
              h-[3px] w-20 rounded-full
              bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
            "
          />
        </div>

        <p className="text-gray-600 text-lg mt-4 max-w-2xl">
          {t.testimonials.hearFromCustomers}
        </p>

        {/* Carousel Container */}
        <div className="mt-10 relative">
          <Carousel
            setApi={setApi}
            plugins={[autoplayRef.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {reviews.map((review, index) => {
                const item = t.about.reviews[index];
                if (!item) return null;

                return (
                  <CarouselItem
                    key={index}
                    className="
                      pl-6
                      basis-[360px]
                      sm:basis-[380px]
                      lg:basis-[400px]
                    "
                  >
                    <TestimonialCard
                      name={item.name}
                      timeAgo={item.location}
                      text={item.text}
                      initials={item.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                      rating={review.rating}
                      photoCount={review.photoCount}
                      readmoreText={t.about.readmore}
                      showlessText={t.about.showless}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* UPDATED ARROWS:
               1. Removed 'hidden' (visible on all screens)
               2. Added absolute positioning to float them
               3. Added styling for visibility (bg/backdrop)
            */}
            <CarouselPrevious
              className="
                absolute left-4 top-1/2 -translate-y-1/2 z-20
                h-10 w-10 rounded-full
                border-none bg-white/80 backdrop-blur-sm shadow-md
                text-gray-800 hover:bg-white hover:text-primary
                disabled:opacity-50
              "
            />
            <CarouselNext
              className="
                absolute right-4 top-1/2 -translate-y-1/2 z-20
                h-10 w-10 rounded-full
                border-none bg-white/80 backdrop-blur-sm shadow-md
                text-gray-800 hover:bg-white hover:text-primary
                disabled:opacity-50
              "
            />
          </Carousel>

          {/* UPDATED PAGINATION */}
          <div className="mt-8">
            <Pagination>
              <PaginationContent className="gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <PaginationItem key={index}>
                    <Button
                      variant="ghost"
                      // 1. REMOVED size="icon" (This was causing the big circles)
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={cn(
                        // 2. ADDED min-w-0 to allow the button to shrink to your custom width
                        "p-0 min-w-0 min-h-0 rounded-full transition-all duration-300",

                        // Mobile dimensions (Small sleek bars)
                        "h-1.5 w-4",

                        // Tablet/Desktop dimensions
                        "sm:h-2 sm:w-6 md:h-2 md:w-8",

                        index === current
                          ? "bg-primary w-6 sm:w-8 md:w-12" // Active state expands
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

      {/* Google Reviews CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://www.google.com/search?q=global+tourist+centre+&sca_esv=6e4820828e77e658&sxsrf=AE3TifMzCuUYMGVHNtkkUxvt_Pbz6z0AIw%3A1760979237374&ei=JWn2aO7PFvyPvr0PhaOkwQ0&ved=0ahUKEwiu9pnvnrOQAxX8h68BHYURKdgQ4dUDCBE&uact=5&oq=global+tourist+centre+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmdsb2JhbCB0b3VyaXN0IGNlbnRyZSAyBBAjGCcyBBAjGCcyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I1wxQ-gJY-ApwAXgAkAEAmAGsAaABxgiqAQMwLje4AQPIAQD4AQGYAgOgArkCwgIJEAAYsAMYCBgewgIOEAAYgAQYsAMYhgMYigXCAggQABiwAxjvBcICCxAAGLADGKIEGIkFwgICECbCAgsQABiABBiGAxiKBZgDAIgGAZAGCJIHAzEuMqAHokeyBwMwLjK4B7ECwgcFMi0yLjHIBxU&sclient=gws-wiz-serp#lrd=0x3bbfb5f661fd84d3:0x24fa4475c2ab159b,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3
            rounded-full border border-gray-200
            px-6 py-3
            text-sm font-medium text-gray-700
            transition-all
            hover:border-[#f8d56b]
            hover:bg-[#f8d56b]/10
            hover:text-gray-900
          "
        >
          <img
            src="/assets/icons8-google-48.png"
            alt="Google Reviews"
            className="h-6 w-6"
          />
          <span>
            {t.testimonials.viewAllReviews ?? "View All Reviews on Google"}
          </span>
        </a>
      </div>
    </section>
  );
}
