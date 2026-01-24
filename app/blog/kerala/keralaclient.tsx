"use client";

import { HeroSection } from "@/components/hero-section";
import { Calendar, Tag, User, Ship, Mountain, Droplets, Umbrella, Tent, Utensils, Moon, Sun, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function KeralaBlogPage() {
  const { t } = useI18n();
  const params = useParams();
  const locale = params.locale as string;
  const [activeTab, setActiveTab] = useState(0);

  const itinerary = [
    { day: t.blogKerala.day1, title: t.blogKerala.departureTitle, desc: t.blogKerala.departureDesc, image: "/assets/blog/kerala/goa-departure.webp" },
    { day: t.blogKerala.day2, title: t.blogKerala.munnarArrival, desc: t.blogKerala.munnarDesc },
    { day: t.blogKerala.day3, title: t.blogKerala.munnarAdventures, desc: t.blogKerala.munnarAdventuresDesc },
    { day: t.blogKerala.day4, title: t.blogKerala.thekkadyThrills, desc: t.blogKerala.thekkadyDesc },
    { day: t.blogKerala.day5, title: t.blogKerala.backwatersTitle, desc: t.blogKerala.backwatersDesc },
    { day: t.blogKerala.day6, title: t.blogKerala.kochiVarkala, desc: t.blogKerala.kochiVarkalaDesc },
    { day: t.blogKerala.day7, title: t.blogKerala.returnTitle, desc: t.blogKerala.returnDesc },
  ];

  const highlights = [
    { icon: Ship, text: t.blogKerala.highlight1 },
    { icon: Mountain, text: t.blogKerala.highlight2 },
    { icon: Droplets, text: t.blogKerala.highlight3 },
    { icon: Umbrella, text: t.blogKerala.highlight4 },
    { icon: Tent, text: t.blogKerala.highlight5 },
    { icon: Utensils, text: t.blogKerala.highlight6 },
    { icon: Moon, text: t.blogKerala.highlight7 },
    { icon: Sun, text: t.blogKerala.highlight8 },
  ];

  const inclusions = [
    t.blogKerala.inclusion1,
    t.blogKerala.inclusion2,
    t.blogKerala.inclusion3,
    t.blogKerala.inclusion4,
    t.blogKerala.inclusion5,
    t.blogKerala.inclusion6,
    t.blogKerala.inclusion7,
  ];

  // 6 tips as shown in the screenshot
  const tips = [
    { title: t.blogKerala.tip1Title, desc: t.blogKerala.tip1Desc },
    { title: t.blogKerala.tip2Title, desc: t.blogKerala.tip2Desc },
    { title: t.blogKerala.tip3Title, desc: t.blogKerala.tip3Desc },
    { title: t.blogKerala.tip4Title, desc: t.blogKerala.tip4Desc },
    { title: t.blogKerala.tip5Title, desc: t.blogKerala.tip5Desc },
    { title: t.blogKerala.tip6Title, desc: t.blogKerala.tip6Desc },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t.blogKerala.heroTitle}
        subtitle={t.blogKerala.heroSubtitle}
        backgroundQuery="Kerala-hero"
      />

      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Blog Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-800/80 font-medium mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {t.blog.juneDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" /> {t.blog.groupTours}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {t.blog.globalTeam}
            </span>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              {t.blogKerala.introTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t.blogKerala.introDesc}
            </p>
          </section>

          {/* Discovery Section with Image */}
          {/* Discovery Section with Image */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              {t.blogKerala.discoveryTitle}
            </h2>
            <figure className="mb-6 mx-auto max-w-[600px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/assets/blog/kerala/kerala-roadtrip.webp"
                  alt="Scenic road trip from Goa to Kerala"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
      {t.blogKerala.discoveryDesc}
    </figcaption> */}
            </figure>
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              {t.blogKerala.discoveryDesc}
            </p>
          </section>

          {/* Group Travel Section */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              {t.blogKerala.groupTravelTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t.blogKerala.groupTravelDesc}
            </p>
          </section>

          {/* Monsoon Section with Image */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              {t.blogKerala.monsoonTitle}
            </h2>
            <figure className="mb-6 mx-auto max-w-[600px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/assets/blog/kerala/kerala-monsoon.webp"
                  alt="Kerala during monsoon season"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
                Kerala's monsoon transforms the landscape into a lush paradise
              </figcaption> */}
            </figure>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t.blogKerala.monsoonDesc}
            </p>
          </section>

          {/* Itinerary Section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogKerala.itineraryTitle}
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Tabs */}
              <div className="flex overflow-x-auto border-b border-gray-200">
                {itinerary.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${activeTab === idx
                        ? "text-emerald-700 border-b-2 border-emerald-600 bg-emerald-50/50"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {item.day}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 min-h-[200px]">
                <h3 className="font-serif text-xl font-bold text-emerald-900 mb-2">
                  {itinerary[activeTab].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {itinerary[activeTab].desc}
                </p>
                {itinerary[activeTab].image && (
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={itinerary[activeTab].image}
                      alt={itinerary[activeTab].title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Highlights Grid */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogKerala.memorableTitle}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg"
                >
                  <item.icon className="w-8 h-8 text-emerald-600 mb-2" />
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogKerala.whatsIncluded}
            </h2>
            <ul className="space-y-3">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Pro Tips - 6 cards in 2-column grid matching screenshot */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              {t.blogKerala.proTips}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-5"
                >
                  <h3 className="font-semibold text-teal-600 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion Section matching screenshot */}
          <section className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              {t.blogKerala.conclusionTitle}
            </h2>
            <p className="text-gray-700 mb-6">{t.blogKerala.conclusionDesc}</p>
            <blockquote className="border-l-4 border-teal-600 pl-6 py-2 text-gray-600 italic">
              {t.blogKerala.conclusionQuote}
            </blockquote>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <p className="text-gray-700 mb-6 text-lg">{t.blogKerala.ctaDesc}</p>
            <div className="flex gap-4 flex-wrap">
              <Link href={`/${locale}/contact-us`}>
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 rounded-full px-8"
                >
                  {t.blogKerala.enquireNow}
                </Button>
              </Link>
              <Link href={`/${locale}/destinations/domestic/kerala-tour-package-from-goa`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8"
                >
                  {t.blogKerala.viewFullItinerary}
                </Button>
              </Link>
            </div>
          </section>

          {/* Related Trips - 3 cards with 2 coming soon */}
          <section className="pt-8 border-t">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">
              {t.blogKerala.youMightAlsoLike}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Active card - Andaman */}
              <Link href={`/${locale}/blog/andaman`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                  <img
                    src="/assets/destinations/Thumbnails/Andaman.webp"
                    alt={t.blog.andamanTitle}
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

              {/* Coming Soon card - Sikkim */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                <div className="relative">
                  <img
                    src="/assets/destinations/Thumbnails/Sikkim.webp"
                    alt={t.blogKerala.sikkimTitle}
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
                    {t.blogKerala.sikkimTitle}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t.blogKerala.sikkimDesc}
                  </p>
                </div>
              </div>

              {/* Coming Soon card - South Goa */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                <div className="relative">
                  <img
                    src="/assets/destinations/Thumbnails/south-goa.webp"
                    alt={t.blogKerala.southGoaTitle}
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
                    {t.blogKerala.southGoaTitle}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t.blogKerala.southGoaDesc}
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
