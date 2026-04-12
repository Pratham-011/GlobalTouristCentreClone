"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Instagram, Facebook } from "lucide-react";
import { FaWhatsapp,FaPinterest } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Image from "next/image";

export function Footer() {
  const { t } = useI18n();
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!instagramRef.current) return;

    const setupInstagram = () => {
      if (window.innerWidth < 1024) return;
      instagramRef.current!.innerHTML = "";
      const blockquote = document.createElement("blockquote");
      blockquote.className = "instagram-media";
      blockquote.setAttribute(
        "data-instgrm-permalink",
        "https://www.instagram.com/globaltouristcentre/"
      );
      blockquote.setAttribute("data-instgrm-version", "14");
      instagramRef.current!.appendChild(blockquote);

      if (!(window as any).instgrm) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => (window as any).instgrm?.Embeds.process();
        document.body.appendChild(script);
      } else {
        (window as any).instgrm.Embeds.process();
      }
    };

    setupInstagram();

    const handleResize = () => {
      if (window.innerWidth >= 1024) (window as any).instgrm?.Embeds.process();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const popularTours = [
    {
      label: t.footer.goaBeach,
      href: `/destinations/day-trips/south-goa-1-day-cultural-and-beach-tour-package`,
    },
    {
      label: t.footer.exploreSikkim,
      href: `/destinations/domestic/sikkim-darjeeling-gangtok-tour-from-goa`,
    },
    {
      label: t.footer.keralaBackwaters,
      href: `/destinations/domestic/kerala-tour-package-from-goa/`,
    },
  ];

  return (
    <footer className="relative bg-[#1a2332] text-white" role="contentinfo">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f8d56b] via-[#0d9488] to-[#f8d56b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-1 sm:gap-6">

          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1 flex flex-row lg:flex-col items-start gap-3">
            <div className="w-10 h-10 shrink-0 rounded-full border-2 border-[#f8d56b] flex items-center justify-center">
              <Image
                src="/assets/logo.webp"
                alt="Global Tourist Centre Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 lg:line-clamp-none">
                {t.footer.tagline}
              </p>

              <div className="flex gap-2" aria-label="Social media links">
                {[
                  {
                    href: "https://www.instagram.com/globaltouristcentre/",
                    icon: Instagram,
                    label: "Instagram",
                  },
                  {
                    href: "https://www.facebook.com/share/1H23K6UQPt/",
                    icon: Facebook,
                    label: "Facebook",
                  },
                  {
                    href: "https://wa.me/919067972295",
                    icon: FaWhatsapp,
                    label: "WhatsApp",
                  },
                  {
                    href: "https://in.pinterest.com/globaltouristcentregoa/",
                    icon: FaPinterest,
                    label: "Pinterest",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-7 h-7 rounded-full bg-[#f8d56b] text-[#111827]
                               flex items-center justify-center
                               transition-all hover:bg-white hover:-translate-y-0.5 hover:scale-105"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="relative font-serif text-sm font-semibold mb-2 pb-1.5">
              {t.footer.quickLinks}
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <ul className="space-y-0.5">
              {[
                { href: `/`, label: t.nav.home },
                { href: `/destinations`, label: t.nav.destinations },
                { href: `/about`, label: t.nav.about },
                { href: `/services`, label: t.nav.services },
                { href: `/contact-us`, label: t.nav.contact },
                { href: `/blog`, label: t.nav.blog },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-gray-400 text-xs transition-all hover:text-[#f8d56b] hover:translate-x-1"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-[#f8d56b] to-transparent transition-all duration-300 group-hover:w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular Tours */}
          <nav aria-label="Popular tours">
            <h3 className="relative font-serif text-sm font-semibold mb-2 pb-1.5">
              {t.footer.popularTours}
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <ul className="space-y-1">
              {popularTours.map((tour) => (
                <li key={tour.href}>
                  <Link
                    href={tour.href}
                    className="group relative inline-block text-gray-400 text-xs transition-all hover:text-[#f8d56b] hover:translate-x-1"
                  >
                    {tour.label}
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-[#f8d56b] to-transparent transition-all duration-300 group-hover:w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Instagram — desktop only */}
          <div aria-label="Instagram feed" className="hidden lg:block">
            <h3 className="relative font-serif text-sm font-semibold mb-2 pb-1.5">
              {t.footer.latestInstagram}
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <div
              ref={instagramRef}
              className="instagram-embed bg-gray-800 rounded-lg flex items-center justify-center min-h-[260px]"
            />

            <Button
              className="mt-2 w-full bg-primary hover:bg-primary/90 rounded-full text-xs py-1.5 h-auto"
              asChild
            >
              <a href="https://www.instagram.com/globaltouristcentre/">
                <Instagram className="w-3 h-3 mr-1.5" />
                {t.footer.followUs}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-2.5 text-[11px] text-gray-400 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4">
          <p className="shrink-0">{t.footer.copyright}</p>

          <div className="flex gap-3">
            <Link href={`/legal/privacy-policy`} className="hover:text-[#f8d56b]">
              {t.form.privacyPolicy}
            </Link>
            <Link href={`/legal/terms-and-conditions`} className="hover:text-[#f8d56b]">
              {t.footer.termsConditions}
            </Link>
            <Link href={`/sitemap.xml`} className="hover:text-[#f8d56b]">
              {t.footer.sitemap}
            </Link>
          </div>

          <p className="hidden lg:block sm:ml-auto shrink-0">{t.footer.craftingJourneys}</p>
        </div>
      </div>
    </footer>
  );
}