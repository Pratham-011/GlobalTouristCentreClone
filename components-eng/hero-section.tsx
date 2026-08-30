"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./language-switcher";
import { Menu, ChevronDown } from "lucide-react";
import { Label } from "@/components-eng/ui/label";
import { Input } from "@/components-eng/ui/input";
import { Button } from "@/components-eng/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components-eng/ui/sheet";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundQuery: string;
  mobileBackgroundQuery?: string;
  showForm?: boolean;
  alt?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundQuery,
  mobileBackgroundQuery,
  showForm = false,
  alt,
}: HeroSectionProps) {
  const { t, locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const defaultMobileBase = mobileBackgroundQuery
    ? `/assets/hero/${mobileBackgroundQuery}.webp`
    : `/assets/hero/${backgroundQuery}-mobile.webp`;

  const [mobileImageSrc, setMobileImageSrc] = useState(defaultMobileBase);
  const [useMobileAsset, setUseMobileAsset] = useState(true);

  useEffect(() => {
    const newMobileSrc = mobileBackgroundQuery
      ? `/assets/hero/${mobileBackgroundQuery}.webp`
      : `/assets/hero/${backgroundQuery}-mobile.webp`;
    setMobileImageSrc(newMobileSrc);
    setUseMobileAsset(true);
  }, [backgroundQuery, mobileBackgroundQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDestinationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getHref = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`;
  };

  const destinationsSubmenu = [
    {
      href: getHref("/destinations/domestic"),
      label: t.nav.domesticTrip,
    },
    {
      href: getHref("/destinations/international"),
      label: t.nav.internationalTrip,
    },
    {
      href: getHref("/destinations/day-trips"),
      label: t.nav.dayTrip,
    },
  ];

  const navLinks = [
    { href: getHref("/"), label: t.nav.home },
    {
      href: getHref("/destinations"),
      label: t.nav.destinations,
      submenu: destinationsSubmenu,
    },
    {
      href: getHref("/luxury-trips"),
      label: t.nav.luxuryDestinations,
    },
    { href: getHref("/about"), label: t.nav.about },
    { href: getHref("/services"), label: t.nav.services },
    {
      href: getHref("/contact-us"),
      label: t.nav.contact,
    },
    { href: getHref("/blog"), label: t.nav.blog },
  ];

  const heroImageBase = `/assets/hero/${backgroundQuery}.webp`;

  return (
    <section
      className={`relative flex flex-col bg-black/90 ${
        useMobileAsset
          ? "min-h-[320px] max-sm:aspect-[4/5] sm:min-h-[60vh]"
          : "min-h-[240px] max-sm:aspect-[16/10] sm:min-h-[60vh]"
      }`}
      aria-label={title}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {useMobileAsset && (
          <Image
            src={mobileImageSrc}
            alt={alt || ""}
            width={640}
            height={800}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center sm:hidden"
            aria-hidden="true"
            onError={() => setUseMobileAsset(false)}
          />
        )}
        <Image
          src={heroImageBase}
          alt={alt || ""}
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className={`w-full h-full object-cover object-center ${
            useMobileAsset ? "hidden sm:block" : "block max-sm:object-contain max-sm:bg-black/90"
          }`}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:from-black/70 sm:via-black/50 sm:to-black/30"
          aria-hidden="true"
        />
      </div>

      {/* Header */}
      <header className="relative z-50 bg-transparent" role="banner">
        <div className="flex items-center justify-between px-[5%] py-3">
          {/* Logo */}
          <Link
            href={getHref("/")}
            className="flex items-center"
            aria-label="Global Tourist Centre - Home"
          >
            <div className="w-15 h-15 rounded-full border-3 border-[#f8d56b] flex items-center justify-center mb-4 sm:mt-[10px] mt-4">
              <Image
                src="/assets/logo.webp"
                alt="Global Tourist Centre logo – travel agency with globe and airplane icon"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation + Language */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6">
            <nav
              className="flex items-center gap-4 xl:gap-6"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link) =>
                link.submenu ? (
                  /* Destinations with click-to-open dropdown */
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDestinationsOpen((prev) => !prev)}
                      className="flex items-center gap-1 text-white text-[20px] font-medium transition-colors hover:text-[#f8d56b] focus:outline-none cursor-pointer"
                      style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                      aria-expanded={isDestinationsOpen}
                      aria-haspopup="true"
                      id="hero-eng-destinations-menu-button"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isDestinationsOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 transition-all duration-200 ease-out ${
                        isDestinationsOpen
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none translate-y-1"
                      }`}
                      role="menu"
                      aria-labelledby="hero-eng-destinations-menu-button"
                    >
                      {/* Arrow tip */}
                      <div className="mx-auto w-3 h-3 -mb-1.5 rotate-45 bg-gray-900/95 border-t border-l border-white/10 relative z-10" />
                      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/95 backdrop-blur-md">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            onClick={() => setIsDestinationsOpen(false)}
                            className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-200 hover:text-[#f8d56b] hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-[#f8d56b]"
                          >
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-[20px] font-medium transition-colors hover:text-[#f8d56b]"
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Language Switcher as navbar item */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="text-white hover:text-white focus:text-white h-9 w-9"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 text-white" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col py-2" aria-label="Mobile navigation">
                  {navLinks.map((link) =>
                    link.submenu ? (
                      <div key={link.href}>
                        <div className="flex items-center justify-between px-6 py-3 text-base font-medium text-foreground">
                          <span>{link.label}</span>
                        </div>
                        {/* Mobile submenu — always visible, indented */}
                        <div className="border-l-2 border-[#f8d56b] ml-6 mb-1">
                          {link.submenu.map((sub) => (
                            <SheetClose asChild key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
                              >
                                {sub.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="px-6 py-3 text-base font-medium hover:bg-muted"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>

                <div className="px-6 py-4 xl:hidden">
                  <p className="text-sm mb-2">Language</p>
                  <LanguageSwitcher variant="light" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex-1 flex items-center px-[5%] py-6 sm:py-0">
        <div
          className={`w-full ${
            showForm ? "grid lg:grid-cols-2 gap-6 sm:gap-8" : "flex flex-col"
          }`}
        >
          {/* Set the max-width here to 800px */}
          <div className="max-w-[800px] w-full">
            <h1
              className={`font-serif font-bold text-white text-balance
        text-3xl sm:text-4xl md:text-5xl lg:text-[4rem]
        leading-[1.1] drop-shadow-lg`}
            >
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
