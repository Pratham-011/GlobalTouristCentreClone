"use client";

import { useI18n } from "@/lib/i18n/context";

export default function ContactFaqTitle() {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative inline-block">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-3">
            {t.contact.faqTitle}
          </h2>

          <span
            aria-hidden="true"
            className="
              absolute left-0 bottom-0
              h-[3px] w-24 rounded-full
              bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
            "
          />
        </div>

        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          {t.contact.faqSubtitle}
        </p>
      </div>
    </section>
  );
}
