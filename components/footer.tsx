"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Instagram, Facebook, } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";


export function Footer() {
  const { t, locale } = useI18n();
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
        script.onload = () => {
          (window as any).instgrm?.Embeds.process();
        };
        document.body.appendChild(script);
      } else {
        (window as any).instgrm.Embeds.process();
      }
    };

    // Initial load
    setupInstagram();

    // Resize handler
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        (window as any).instgrm?.Embeds.process();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup (CRITICAL)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const popularTours = [
    {
      label: t.footer.goaBeach,
      href: `/${locale}/destinations/day-trips/south-goa-1-day-cultural-&-beach-tour-package`,
    },
    {
      label: t.footer.exploreSikkim,
      href: `/${locale}/destinations/domestic/sikkim-darjeeling-gangtok-tour-from-goa`,
    },
    {
      label: t.footer.keralaBackwaters,
      href: `/${locale}/destinations/domestic/kerala-tour-package-from-goa/`,
    },
  ];
  return (
    <footer className="relative bg-[#1a2332] text-white" role="contentinfo">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f8d56b] via-[#0d9488] to-[#f8d56b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#f8d56b] flex items-center justify-center mb-3">
              <img
                src="/assets/logo.webp"
                alt="Global Tourist Centre Logo"
                className="h-12 sm:h-14 w-auto rounded-full"
              />
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
              {t.footer.tagline}
            </p>

            <div
              className="flex gap-2 sm:gap-3"
              aria-label="Social media links"
            >
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
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f8d56b] text-[#111827]
                             flex items-center justify-center
                             transition-all hover:bg-white hover:-translate-y-0.5 hover:scale-105"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="relative font-serif text-base sm:text-lg font-semibold mb-2 sm:mb-3 pb-1.5 sm:pb-2">
              {t.footer.quickLinks}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <ul className="space-y-1 sm:space-y-1.5">
              {[
                { href: `/${locale}`, label: t.nav.home },
                { href: `/${locale}/destinations`, label: t.nav.destinations },
                { href: `/${locale}/about`, label: t.nav.about },
                { href: `/${locale}/services`, label: t.nav.services },
                {
                  href: `/${locale}/contact-us`,
                  label: t.nav.contact,
                },
                {
                  href: `/${locale}/blog`,
                  label: t.nav.blog,
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-gray-400 text-xs sm:text-sm transition-all hover:text-[#f8d56b] hover:translate-x-1"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#f8d56b] to-transparent transition-all duration-300 group-hover:w-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular Tours */}
          <nav aria-label="Popular tours">
            <h3 className="relative font-serif text-base sm:text-lg font-semibold mb-2 sm:mb-3 pb-1.5 sm:pb-2">
              {t.footer.popularTours}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <ul className="space-y-1 sm:space-y-1.5">
              {popularTours.map((tour) => (
                <li key={tour.href}>
                  <Link
                    href={tour.href}
                    className="group relative inline-block text-gray-400 text-xs sm:text-sm transition-all hover:text-[#f8d56b] hover:translate-x-1"
                  >
                    {tour.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#f8d56b] to-transparent transition-all duration-300 group-hover:w-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Instagram */}
          <div aria-label="Instagram feed" className="hidden lg:block">
            <h3 className="relative font-serif text-base sm:text-lg font-semibold mb-2 sm:mb-3 pb-1.5 sm:pb-2">
              {t.footer.latestInstagram}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <div
              ref={instagramRef}
              className="instagram-embed bg-gray-800 rounded-lg flex items-center justify-center min-h-[320px]"
            />

            <Button
              className="mt-3 w-full bg-primary hover:bg-primary/90 rounded-full text-xs sm:text-sm py-2 h-auto"
              asChild
            >
              <a href="https://www.instagram.com/globaltouristcentre/">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.footer.followUs}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div
          className="
      max-w-7xl mx-auto px-4 py-3
      text-xs sm:text-sm text-gray-400
      flex flex-col sm:flex-row
      items-center
      gap-2 sm:gap-6
    "
        >
          <p>{t.footer.copyright}</p>

          <div className="flex gap-3 sm:gap-4">
            <Link
              href={`/${locale}/legal/privacy-policy`}
              className="hover:text-[#f8d56b]"
            >
              {t.form.privacyPolicy}
            </Link>
            <Link
              href={`/${locale}/legal/terms-and-conditions`}
              className="hover:text-[#f8d56b]"
            >
              {t.footer.termsConditions}
            </Link>
            <Link
              href={`/${locale}/sitemap.xml`}
              className="hover:text-[#f8d56b]"
            >
              {t.footer.sitemap}
            </Link>
          </div>

          <p className="hidden lg:block">{t.footer.craftingJourneys}</p>
        </div>
      </div>
    </footer>
  );
}
