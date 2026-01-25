"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components-eng/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components-eng/ui/sheet";

export function Header() {
  const { t, locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: `/`, label: t.nav.home },
    { href: `/destinations`, label: t.nav.destinations },
    {
      href: `/luxury-trips`,
      label: t.nav.luxuryDestinations,
    },
    { href: `/about`, label: t.nav.about },
    { href: `/services`, label: t.nav.services },
    {
      href: `/contact-us`,
      label: t.nav.contact,
    },
    { href: `/blog`, label: t.nav.blog },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50" role="banner">
      <div className="flex items-center justify-between px-[5%] py-4">
        {/* LOGO */}
        <Link
          href={``}
          aria-label="Global Tourist Centre home"
          className="flex items-center"
        >
          <div className="h-14 w-14 rounded-full border-2 border-[#f8d56b] flex items-center justify-center bg-white/90 backdrop-blur">
            <Image
              src="/assets/logo.webp"
              alt="Global Tourist Centre Logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6">
          <nav
            className="flex items-center gap-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg font-medium transition-colors hover:text-[#f8d56b]"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white h-10 w-10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="px-6 py-4 text-base font-medium hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="px-6 py-4 border-t">
                <p className="text-sm mb-2">Language</p>
                <LanguageSwitcher variant="light" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
