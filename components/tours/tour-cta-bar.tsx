"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";


interface TourCtaBarProps {
  tourName: string;
  phoneNumber?: string;
}

export function TourCtaBar({
  tourName,
  phoneNumber = "+919067972295",
}: TourCtaBarProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in your ${tourName} tour package. Please send me details.`
  );

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  const callLink = `tel:${phoneNumber}`;

 const { t } = useI18n();

  return (
    <section className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-slate-900">
           {t.destinations.tour.ctaTitle}
          </h3>
          <p className="text-slate-600 mt-1">
            {t.destinations.tour.ctaSubtitle}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-full shadow-md"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.destinations.tour.ctaBookWhatsAppAria}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.destinations.tour.ctaBookWhatsApp}
            </a>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="px-6 py-6 rounded-full shadow-md"
          >
            <a href={callLink} aria-label={t.destinations.tour.ctaCallUsAria}>
              <Phone className="w-5 h-5 mr-2" />
              {t.destinations.tour.ctaCallUs}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
