"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";
import { useParams } from "next/navigation";

const ConclusionBox = () => {
  const { t } = useI18n();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 sm:p-10 mb-16">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
        {t.blogAndaman.planningTrip}
      </h2>

      <p className="text-gray-700 mb-4">{t.blogAndaman.planningDesc}</p>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
        <p className="text-gray-700 italic">{t.blogAndaman.conclusionNote}</p>
      </div>

      <div className="flex gap-4 flex-wrap">
        <Link href={`/${locale}/contact-us`}>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
            {t.blogAndaman.enquireNow}
          </Button>
        </Link>
        <Link href={`/${locale}/destinations/domestic/andaman-islands-tour-from-goa/`}>
          <Button
            variant="outline"
            size="lg"
            className="border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            {t.blogAndaman.viewItinerary}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ConclusionBox;
