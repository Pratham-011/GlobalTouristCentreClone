"use client";

import type { CSSProperties } from "react";
import { Check } from "lucide-react";

/** Brand accents (site palette; not declared as global CSS vars yet) */
const TEAL = "#008081";
const SAFFRON = "#d8972f";
const MIST = "#a6b8bc";
const INK = "#000000";

export type PriceCardData = {
  badge: string;
  packageName: string;
  amount: string;
  currency?: string;
  per: string;
  note: string;
  points: readonly string[];
  cta: {
    label: string;
    whatsapp: {
      number: string;
      message: string;
    };
  };
};

/**
 * Dual-fare pricing block. Any tour can opt in by providing
 * `price.domestic` + `price.international` in tourData.
 * Section chrome (label/title/subtitle) is optional per-tour copy.
 */
export type TourPriceData = {
  sectionLabel?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  domestic: PriceCardData;
  international: PriceCardData;
};

interface TourPriceProps {
  price: TourPriceData;
}

function buildWhatsAppLink(number: string, message: string) {
  return `https://wa.me/${number.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

function PriceCard({
  card,
  accent,
}: {
  card: PriceCardData;
  accent: string;
}) {
  const whatsappHref = buildWhatsAppLink(
    card.cta.whatsapp.number,
    card.cta.whatsapp.message
  );

  return (
    <article
      className="
        flex h-full flex-col
        rounded-2xl border border-slate-100 bg-white
        p-5 sm:p-6
        shadow-sm transition-shadow duration-300
        hover:shadow-md
      "
    >
      {/* Badge */}
      <span
        className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
        style={{ backgroundColor: accent }}
      >
        {card.badge}
      </span>

      {/* Package name */}
      <h3
        className="mt-3 font-serif text-xl font-bold sm:text-2xl break-words"
        style={{ color: INK }}
      >
        {card.packageName}
      </h3>

      {/* Price row — amount rendered as-is from JSON */}
      <div className="mt-4">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: INK }}
          >
            {card.amount}
          </span>
          <span className="text-sm sm:text-base" style={{ color: MIST }}>
            / {card.per}
          </span>
        </div>
        {card.note?.trim() && (
          <p className="mt-1 text-xs sm:text-sm" style={{ color: MIST }}>
            {card.note}
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="my-5 h-px w-full" style={{ backgroundColor: MIST }} />

      {/* Points checklist */}
      <ul className="flex flex-1 flex-col gap-3">
        {card.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${accent}1a` }}
              aria-hidden="true"
            >
              <Check className="h-3 w-3 stroke-[3]" style={{ color: accent }} />
            </span>
            <span className="text-sm leading-relaxed text-slate-700 break-words">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-6 inline-flex w-full items-center justify-center
          min-h-[44px] rounded-full px-6 py-3
          text-sm font-semibold text-white
          transition-all duration-200
          hover:opacity-95 hover:shadow-md
          focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2
          md:w-auto md:self-start md:min-w-[180px]
        "
        style={
          {
            backgroundColor: accent,
            ["--tw-ring-color" as string]: `${accent}66`,
          } as CSSProperties
        }
      >
        {card.cta.label}
      </a>
    </article>
  );
}

export function TourPrice({ price }: TourPriceProps) {
  if (!price?.domestic || !price?.international) return null;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(price.sectionLabel || price.sectionTitle || price.sectionSubtitle) && (
          <div className="mb-8 sm:mb-12 max-w-3xl">
            {price.sectionLabel?.trim() && (
              <p
                className="text-xs font-semibold uppercase tracking-wider sm:text-sm"
                style={{ color: TEAL }}
              >
                {price.sectionLabel}
              </p>
            )}
            {price.sectionTitle?.trim() && (
              <h2
                className="mt-2 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl break-words"
                style={{ color: INK }}
              >
                {price.sectionTitle}
              </h2>
            )}
            {price.sectionSubtitle?.trim() && (
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base break-words">
                {price.sectionSubtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <PriceCard card={price.domestic} accent={TEAL} />
          <PriceCard card={price.international} accent={SAFFRON} />
        </div>
      </div>
    </section>
  );
}

export default TourPrice;
