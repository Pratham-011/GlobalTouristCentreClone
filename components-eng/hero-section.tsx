"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./language-switcher";
import { Menu } from "lucide-react";
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
  showForm?: boolean;
  alt?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundQuery,
  showForm = false,
  alt,
}: HeroSectionProps) {
  const { t, locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const getHref = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`;
  };

  const navLinks = [
    { href: getHref("/"), label: t.nav.home },
    { href: getHref("/destinations"), label: t.nav.destinations },
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
      className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col"
      aria-label={title}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageBase}
          alt={alt || ""}
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-[20px] font-medium transition-colors hover:text-[#f8d56b]"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  {link.label}
                </Link>
              ))}
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
                  className="text-white  hover:text-white focus:text-white h-9 w-9"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 text-white" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col py-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="px-6 py-3 text-base font-medium hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
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
      {/* Hero Content */}
      <div className="relative z-10 w-full flex-1 flex items-center px-[5%]">
        <div
          className={`w-full ${showForm ? "grid lg:grid-cols-2 gap-6 sm:gap-8" : "flex flex-col"
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
