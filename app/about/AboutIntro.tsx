"use client";

import { useI18n } from "@/lib/i18n/context";
// import { OfferBanner } from "@/components/offer-banner";

export function AboutIntro() {
  const { t } = useI18n();

  return (
    <>
      {/* <OfferBanner mode="inline" /> */}

      <section className="py-16 sm:py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="mb-16">
            <div className="relative inline-block">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                {t.about.mainTitle}
              </h1>

              <span
                aria-hidden="true"
                className="absolute left-0 bottom-0 h-[3px] w-20 rounded-full
                bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
              />
            </div>

            <p className="text-gray-600 text-lg mt-4">{t.about.mainSubtitle}</p>
          </div>
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <img
                src="/assets/About-us.webp"
                alt="Global Tourist Centre office"
                className="rounded-lg w-full shadow-md"
              />
            </div>

            {/* Text Content Section */}
            <div className="space-y-10 order-1 lg:order-2">
              <article>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                  {t.about.journeyTitle}
                  <span className="absolute bottom-0 left-0 w-8 h-[4px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.journeyDesc}
                </p>
              </article>

              <article>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                  {t.about.philosophyTitle}
                  <span className="absolute bottom-0 left-0 w-8 h-[4px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.philosophyDesc}
                </p>
              </article>

              <article>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                  {t.about.teamTitle}
                  <span className="absolute bottom-0 left-0 w-8 h-[4px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.teamDesc}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
