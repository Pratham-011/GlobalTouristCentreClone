"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Star, ArrowRight, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";
import { Header } from "@/components/header";

function formatWhatsAppMessage(
  title: string,
  data: { label: string; value: string }[]
) {
  const lines = [`*${title}*`];

  data.forEach((item) => {
    if (item.value) {
      lines.push(`${item.label}: ${item.value}`);
    } else {
      lines.push(item.label);
    }
  });

  return encodeURIComponent(lines.join("\n"));
}

const DESTINATION_MAP: Record<string, string> = {
  "all-goa-one-day": "ALL GOA IN ONE DAY",
  "palolem-cola-dolphin": "PALOLEM COLA – DOLPHIN",
  "mumbai-one-day": "MUMBAI 1 DAY",
  "taj-mahal-tour": "TAJ MAHAL 1N2D",
  "hampi-badami-heritage-tour-from-goa": "HAMPI BADAMI 1N2D",
};

const Hero = () => {
  const { t, locale } = useI18n();
  const [highlightForm, setHighlightForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const highlight = () => {
      if (window.location.hash === "#main-form") {
        setHighlightForm(true);

        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => setHighlightForm(false), 3000);
      }
    };

    highlight(); // initial load
    window.addEventListener("hashchange", highlight);

    return () => window.removeEventListener("hashchange", highlight);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, destination } = formData;

    // Validation (same intent as old code)
    if (!name.trim() || !email.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const destinationText =
      DESTINATION_MAP[destination] || destination || "Not specified";

    const messageData = [
      { label: "\n*CONTACT INFORMATION*", value: "" },
      { label: "Name", value: name },
      { label: "Email", value: email },
      phone ? { label: " Phone", value: phone } : null,
      { label: "Destination Interest", value: destinationText },
    ].filter(Boolean) as { label: string; value: string }[];

    const whatsappMessage = formatWhatsAppMessage(
      "TRAVEL INQUIRY",
      messageData
    );

    const whatsappNumber = "919067972295";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Match old delay + UX
    setTimeout(() => {
      window.open(whatsappURL, "_blank");

      setShowSuccess(true);
      setIsSubmitting(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
      });

      // Auto-hide success message
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section
      className="
    relative
    min-h-[65vh] sm:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh]
    flex items-center
    pt-28 sm:pt-32 lg:pt-24
  "
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/luxury-travel-destination-mountains-sunset.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
      </div>
      <Header />

      <div className="container mx-auto px-4 relative z-10 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1
              id="hero-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance mt-4 sm:mt-2 mb-3 sm:mb-4"
            >
              {t.hero.title.split(" ").slice(0, 1).join(" ")}{" "}
              <span className="text-amber-400">
                {t.hero.title.split(" ").slice(1, 2).join(" ")}
              </span>{" "}
              {t.hero.title.split(" ").slice(2).join(" ")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-5 sm:mb-6 lg:mb-8 max-w-xl text-pretty">
              {t.hero.tagline}
            </p>

            {/* Trust Badges */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4"
              role="list"
              aria-label="Trust badges"
            >
              <div
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                role="listitem"
              >
                <Shield className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span className="text-xs sm:text-sm">15+ Years Experience</span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                role="listitem"
              >
                <Star
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm">4.9/5 Rating</span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                role="listitem"
              >
                <Heart className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span className="text-xs sm:text-sm">
                  10,000+ Happy Travelers
                </span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <Card
            ref={formRef}
            id="main-form"
            className={`
    bg-white/95 backdrop-blur-md
    shadow-2xl
    max-w-md mx-auto lg:mx-0 lg:ml-auto
    transition-all duration-500
    border-2

    ${highlightForm
                ? "border-amber-400 shadow-[0_0_0_6px_rgba(248,213,107,0.35)]"
                : "border-transparent"
              }
  `}
          >
            <CardContent className="p-4 sm:p-5 lg:p-6 xl:p-7">
              <div className="text-center mb-4 sm:mb-5 sm:mt-0.5">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2">
                  {t.hero.subtitle}
                </h2>
                {/* <p className="text-xs sm:text-sm text-muted-foreground">
                  Get personalized quotes within 24 hours
                </p> */}
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-3.5 sm:space-y-4"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="lp-name" className="text-sm font-medium">
                    {t.form.name} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lp-name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-10 sm:h-11"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="lp-phone" className="text-sm font-medium">
                    {t.form.phone} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lp-phone"
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-10 sm:h-11"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="lp-email" className="text-sm font-medium">
                    {t.form.email} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lp-email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-10 sm:h-11"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="lp-destination"
                    className="text-sm font-medium"
                  >
                    {t.form.destination}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) =>
                      setFormData({ ...formData, destination: value })
                    }
                    required
                  >
                    <SelectTrigger
                      id="lp-destination"
                      className="h-10 sm:h-11"
                      aria-required="true"
                    >
                      <SelectValue placeholder="Select a destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-goa-one-day">
                        {t.form.destinations.allGoa}
                      </SelectItem>

                      <SelectItem value="palolem-cola-dolphin">
                        {t.form.destinations.palolem}
                      </SelectItem>

                      <SelectItem value="mumbai-one-day">
                        {t.form.destinations.mumbai}
                      </SelectItem>

                      <SelectItem value="taj-mahal-tour">
                        {t.form.destinations.taj}
                      </SelectItem>

                      <SelectItem value="hampi-badami-heritage-tour-from-goa">
                        {t.form.destinations.hampi}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="
    w-full h-11 sm:h-12 text-base font-semibold
    bg-primary text-primary-foreground
    hover:bg-primary/90 focus:bg-primary/90
    transition-all duration-300
    disabled:opacity-60 disabled:cursor-not-allowed
    flex items-center justify-center gap-2
  "
                  aria-label="Get free travel quote"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-4 w-4 rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      {t.hero.cta}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  {t.form.privacyNote}{" "}
                  <Link
                    href={`/${locale}/legal/privacy-policy`}
                    className="text-primary hover:underline focus:underline"
                  >
                    {t.form.privacyPolicy}
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="
    absolute
    left-1/2 -translate-x-1/2
    bottom-6 sm:bottom-8
    lg:bottom-6
    xl:bottom-8
    pointer-events-none
  "
      >
        <div
          className="
      relative
      w-8 h-12
      sm:w-9 sm:h-14
      rounded-full
      border border-white/40
      bg-white/5 backdrop-blur-sm
      flex items-start justify-center
      p-2
      animate-pulse
    "
        >
          <span
            className="
        block
        w-1 h-3
        rounded-full
        bg-white/80
        animate-[scroll_1.6s_ease-in-out_infinite]
      "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
