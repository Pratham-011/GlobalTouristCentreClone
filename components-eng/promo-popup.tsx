"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, Gift, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

interface PromoPopupProps {
  delayMs?: number;
}

const VISIBLE_DURATION = 5000; // 5 seconds

export function PromoPopup({ delayMs = 5000 }: PromoPopupProps) {
  const { t } = useI18n();

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("promoPopupShown", "true");

    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);

    const alreadyShown = sessionStorage.getItem("promoPopupShown");
    if (alreadyShown) return;

    const openTimer = setTimeout(() => {
      setIsOpen(true);

      // Auto-close after 5 seconds of visibility
      autoCloseTimerRef.current = setTimeout(() => {
        handleClose();
      }, VISIBLE_DURATION);
    }, delayMs);

    return () => {
      clearTimeout(openTimer);
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
      }
    };
  }, [delayMs, handleClose]);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        aria-describedby="promo-description"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 h-8 w-8 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center"
          aria-label="Close promotion popup"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Hero section */}
        <div className="relative p-6 sm:p-12 lg:p-20 text-center min-h-[420px] sm:min-h-[700px] flex flex-col items-center justify-center">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/car_offer.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-white max-w-3xl">
            {/* Discount badge */}
            <div className="inline-block mb-6 px-6 py-2 border border-amber-400/60 rounded-full bg-amber-400/10 backdrop-blur-sm">
              <p className="text-sm sm:text-lg font-semibold text-amber-300">
                {t.promoPopup.discount}
              </p>
            </div>

            {/* Headline */}
            <h2
              id="promo-title"
              className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 drop-shadow-2xl"
            >
              {t.promoPopup.headlinePrimary}
            </h2>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8 text-amber-400 drop-shadow-2xl">
              {t.promoPopup.headlineSecondary}
            </h2>

            {/* Description */}
            <p
              id="promo-description"
              className="text-sm sm:text-xl mb-2 sm:mb-3 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {t.promoPopup.subDescription}{" "}
              <span className="font-bold text-amber-300">
                {t.promoPopup.highlight}
              </span>
            </p>

            <p className="text-xs sm:text-lg mb-6 sm:mb-12 opacity-90 drop-shadow-lg">
              {t.promoPopup.footerNote}
            </p>

            {/* CTA */}
            <button
              onClick={() => {
                const form = document.getElementById("main-form");
                if (form) {
                  form.scrollIntoView({ behavior: "smooth" });
                }
                handleClose();
              }}
              className="bg-gradient-to-r from-amber-400 to-yellow-500
                hover:from-amber-500 hover:to-yellow-600
                text-gray-900 font-bold
                text-base sm:text-xl
                px-6 py-3 sm:px-10 sm:py-5
                rounded-full shadow-2xl
                transform hover:scale-105 transition-all duration-200
                inline-flex items-center gap-2 sm:gap-3"
            >
              {t.promoPopup.cta}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
