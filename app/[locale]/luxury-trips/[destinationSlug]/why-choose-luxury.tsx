"use client";

import { useI18n } from "@/lib/i18n/context";
import { Hotel, User, Utensils, Gem, Sparkles } from "lucide-react";
import { LuxurySlug } from "@/lib/data/luxury-page-content";

interface Props {
  slug: LuxurySlug;
}

const ICON_MAP = {
  hotel: Hotel,
  "user-tie": User,
  utensils: Utensils,
  gem: Gem,
} as const;

export function WhyChooseLuxury({ slug }: Props) {
  const { t } = useI18n();

  const data = t.luxuryPages?.[slug];

  if (!data) return null;

  const { infoCards } = data;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {infoCards.map((card: (typeof infoCards)[number], index: number) => {
            const Icon =
              ICON_MAP[card.icon as keyof typeof ICON_MAP] ?? Sparkles;

            return (
              <div
                key={index}
                className="text-center p-6 border rounded-xl hover:shadow-lg transition"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37]/10">
                  <Icon className="h-6 w-6 text-[#d4af37]" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

                <p className="text-sm text-slate-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
