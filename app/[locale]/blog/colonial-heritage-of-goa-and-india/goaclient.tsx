"use client";

import { HeroSection } from "@/components/hero-section";
import { Calendar, Tag, User } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function GoaBlogPage() {
  const { t } = useI18n();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <>
      {/* Hero Section */}
      <HeroSection title={t.blogGoa.heroTitle} backgroundQuery="Goa-hero" />

      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Blog Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-800/80 font-medium mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {t.blog.julyDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" /> {t.blog.heritage}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {t.blog.globalTeam}
            </span>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>{t.blogGoa.introParagraph1}</p>
              <p>{t.blogGoa.introParagraph2}</p>
            </div>

            <figure className="mt-8 mx-auto max-w-[600px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/blog/goa/Basilica.png"
                  alt={t.blogGoa.introImageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
                {t.blogGoa.introImageAlt}
              </figcaption>
            </figure>
          </section>

          {/* Before the Portuguese Arrival */}
          <section className="mb-16" id="before-portuguese">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogGoa.beforePortuguese.title}
            </h2>

            <figure className="mb-6 mx-auto max-w-[600px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/blog/goa/old_protuguese_map.png"
                  alt={t.blogGoa.beforePortuguese.caption}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
                {t.blogGoa.beforePortuguese.caption}
              </figcaption>
            </figure>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>{t.blogGoa.beforePortuguese.desc1}</p>
              <p>{t.blogGoa.beforePortuguese.desc2}</p>
            </div>
          </section>

          {/* A Golden Age Built on Spice */}
          <section className="mb-16" id="golden-age">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogGoa.goldenAge.title}
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mb-6">
              <p>{t.blogGoa.goldenAge.desc1}</p>
            </div>

            <figure className="mb-6 mx-auto max-w-[600px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/blog/goa/Se_Cathedral.png"
                  alt={t.blogGoa.goldenAge.caption}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
                {t.blogGoa.goldenAge.caption}
              </figcaption>
            </figure>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>{t.blogGoa.goldenAge.desc2}</p>
              <p>{t.blogGoa.goldenAge.desc3}</p>
              <p>{t.blogGoa.goldenAge.desc4}</p>
              <p>{t.blogGoa.goldenAge.desc5}</p>
            </div>
          </section>

          {/* Why Does It Feel Different From British India? */}
          <section className="mb-16" id="why-different">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogGoa.whyDifferent.title}
            </h2>

            <div className="mb-6 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <figure>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/blog/goa/VictoriaTerminus.png"
                    alt={t.blogGoa.whyDifferent.captionBritish}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
                  {t.blogGoa.whyDifferent.captionBritish}
                </figcaption>
              </figure>
              <figure>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/blog/goa/Portuguesevillas.png"
                    alt={t.blogGoa.whyDifferent.captionPortuguese}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
                  {t.blogGoa.whyDifferent.captionPortuguese}
                </figcaption>
              </figure>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>{t.blogGoa.whyDifferent.desc1}</p>
              <p>{t.blogGoa.whyDifferent.desc2}</p>
              <p>{t.blogGoa.whyDifferent.desc3}</p>
            </div>
          </section>

          {/* A Cultural Itinerary Worth Following */}
          <section className="mb-16" id="cultural-itinerary">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogGoa.itinerary.title}
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>{t.blogGoa.itinerary.intro}</p>
              <p>{t.blogGoa.itinerary.oldGoa}</p>
              <p>{t.blogGoa.itinerary.fontainhas}</p>
              <p>{t.blogGoa.itinerary.reisMagos}</p>
              <p>{t.blogGoa.itinerary.museum}</p>
              <p>{t.blogGoa.itinerary.spice}</p>
            </div>
          </section>

          {/* Conclusion / Takeaway */}
          <section className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 sm:p-10 mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              {t.blogGoa.takeaway.title}
            </h2>
            <p className="text-gray-700 mb-4 text-lg">{t.blogGoa.takeaway.desc1}</p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
              <p className="text-gray-700 italic">{t.blogGoa.takeaway.desc2}</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href={`/${locale}/contact-us`}>
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  {t.blogGoa.enquireNow}
                </Button>
              </Link>
              <Link
                href={`/${locale}/destinations/day-trips/south-goa-1-day-cultural-and-beach-tour-package`}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  {t.blogGoa.viewItinerary}
                </Button>
              </Link>
            </div>
          </section>

          {/* Related Trips */}
          <section className="pt-8 border-t">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">
              {t.blogGoa.youMightAlsoLike}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href={`/${locale}/blog/andaman`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                  <Image
                    src="/assets/destinations/Thumbnails/Andaman.webp"
                    alt={t.blog.andamanTitle}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-5 flex-grow">
                    <h3 className="font-serif text-lg font-bold mb-2">
                      {t.blog.andamanTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {t.blog.andamanSubtitle}
                    </p>
                    <span className="inline-block border border-teal-600 text-teal-600 px-4 py-2 rounded text-sm font-medium">
                      {t.blog.readMore}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/blog/kerala`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                  <Image
                    src="/assets/destinations/Thumbnails/Kerala.webp"
                    alt={t.blog.keralaTitle}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-5 flex-grow">
                    <h3 className="font-serif text-lg font-bold mb-2">
                      {t.blog.keralaTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {t.blog.keralaSubtitle}
                    </p>
                    <span className="inline-block border border-teal-600 text-teal-600 px-4 py-2 rounded text-sm font-medium">
                      {t.blog.readMore}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="relative bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                <div className="relative">
                  <Image
                    src="/assets/destinations/Thumbnails/Bali.webp"
                    alt={t.blog.comingSoonTitle}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
                      {t.blog.comingSoon}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h3 className="font-serif text-lg font-bold mb-2 text-gray-500">
                    {t.blog.comingSoonTitle}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t.blog.comingSoonSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
