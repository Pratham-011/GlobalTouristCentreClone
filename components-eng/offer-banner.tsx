"use client";

import { useState, useEffect, useRef } from "react";
import { Clock, Gift } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface OfferBannerProps {
  daysUntilExpiry?: number;
  offerText?: string;
  linkHref?: string;
  linkText?: string;
}

export function OfferBanner({
  daysUntilExpiry = 0.5,
  offerText,
  linkHref,
  linkText,
}: OfferBannerProps) {
  const { t } = useI18n();

  // i18n-backed defaults
  const resolvedOfferText = offerText ?? t.offerBanner.offerText;
  const resolvedLinkText = linkText ?? t.offerBanner.linkText;
  const resolvedLinkHref = linkHref ?? t.offerBanner.linkHref;

  const endDateRef = useRef(Date.now() + daysUntilExpiry * 24 * 60 * 60 * 1000);

  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsMounted(true);

    const dismissed = sessionStorage.getItem("offerBannerDismissed");
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    const calculateTimeLeft = (): TimeLeft => {
      const diff = endDateRef.current - Date.now();
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted || !isVisible) return null;

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isExpired) return null;

  // MM:SS countdown
  const totalSeconds =
    timeLeft.days * 24 * 60 * 60 +
    timeLeft.hours * 60 * 60 +
    timeLeft.minutes * 60 +
    timeLeft.seconds;

  const displayHours = Math.floor(totalSeconds / 3600);
  const displayMinutes = Math.floor((totalSeconds % 3600) / 60);

  return (
    <div
      role="banner"
      aria-label={t.offerBanner.ariaLabel}
      className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-amber-950 py-2.5 px-3"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        {/* Offer text */}
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 animate-pulse" aria-hidden="true" />
          <span className="font-bold text-xs sm:text-sm text-center">
            {resolvedOfferText}
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span>{t.offerBanner.endsIn}</span>
          <span
            className="font-mono font-bold"
            aria-label={`${displayHours} hours ${displayMinutes} minutes remaining`}
          >
            {String(displayHours).padStart(2, "0")}:
            {String(displayMinutes).padStart(2, "0")}
          </span>
        </div>

        {/* CTA */}
        <a href="#main-form">
          <button className="bg-amber-950 text-amber-50 text-xs sm:text-sm px-4 py-2 rounded-md font-semibold">
            {resolvedLinkText}
          </button>
        </a>
      </div>
    </div>
  );
}
