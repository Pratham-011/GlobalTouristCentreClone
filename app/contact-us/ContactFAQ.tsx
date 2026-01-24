"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n/context";

export function ContactFAQ() {
  const { t } = useI18n();

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="
                group
                border border-border
                rounded-xl
                px-6
                transition-colors
                hover:bg-muted/60
              "
            >
              <AccordionTrigger
                className="
                  relative
                  py-5
                  text-left
                  font-medium
                  text-base
                  hover:no-underline
                "
              >
                {faq.q}

                {/* Golden underline — only when OPEN */}
                {/* <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute left-0 -bottom-1
                    h-[2px] w-0
                    bg-gradient-to-r from-[#f8d56b] to-[#eab308]
                    transition-all duration-300
                    group-data-[state=open]:w-full
                  "
                /> */}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground text-sm pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
