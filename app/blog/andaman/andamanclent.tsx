"use client";

import { HeroSection } from "@/components/hero-section";
import { Calendar, Tag, User } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AndamanBlogPage() {
  const { t } = useI18n();
  const params = useParams();
  const locale = params.locale as string;

  const sections = [
    {
      id: "radhanagar",
      title: t.blogAndaman.radhanagar.title,
      image: "/assets/blog/andaman/radhanagar-beach.webp",
      caption: t.blogAndaman.radhanagar.caption,
      paragraphs: [
        t.blogAndaman.radhanagar.desc1,
        t.blogAndaman.radhanagar.desc2,
        t.blogAndaman.radhanagar.desc3,
      ],
    },
    {
      id: "neil-island",
      title: t.blogAndaman.neilIsland.title,
      image: "/assets/blog/andaman/natural-bridge.webp",
      caption: t.blogAndaman.neilIsland.caption,
      paragraphs: [
        t.blogAndaman.neilIsland.desc1,
        t.blogAndaman.neilIsland.desc2,
        t.blogAndaman.neilIsland.desc3,
      ],
    },
    {
      id: "kalapathar",
      title: t.blogAndaman.kalapathar.title,
      image: "/assets/blog/andaman/kalapathar-beach.webp",
      caption: t.blogAndaman.kalapathar.caption,
      paragraphs: [t.blogAndaman.kalapathar.desc1, t.blogAndaman.kalapathar.desc2],
    },
    {
      id: "ross-island",
      title: t.blogAndaman.rossIsland.title,
      image: "/assets/blog/andaman/ross-island.webp",
      caption: t.blogAndaman.rossIsland.caption,
      paragraphs: [t.blogAndaman.rossIsland.desc1, t.blogAndaman.rossIsland.desc2],
    },
    {
      id: "chidiya-tapu",
      title: t.blogAndaman.chidiyaTapu.title,
      image: "/assets/blog/andaman/chidiya-tapu.webp",
      caption: t.blogAndaman.chidiyaTapu.caption,
      paragraphs: [
        t.blogAndaman.chidiyaTapu.desc1,
        t.blogAndaman.chidiyaTapu.desc2,
        t.blogAndaman.chidiyaTapu.desc3,
      ],
    },
    {
      id: "mount-harriet",
      title: t.blogAndaman.mountHarriet.title,
      image: "/assets/blog/andaman/mount-harriet.webp",
      caption: t.blogAndaman.mountHarriet.caption,
      paragraphs: [t.blogAndaman.mountHarriet.desc1, t.blogAndaman.mountHarriet.desc2],
    },
    {
      id: "baratang",
      title: t.blogAndaman.baratang.title,
      image: "/assets/blog/andaman/limestone-caves.webp",
      caption: t.blogAndaman.baratang.caption,
      paragraphs: [t.blogAndaman.baratang.desc1, t.blogAndaman.baratang.desc2],
    },
    {
      id: "north-bay",
      title: t.blogAndaman.northBay.title,
      image: "/assets/blog/andaman/north-bay.webp",
      caption: t.blogAndaman.northBay.caption,
      paragraphs: [t.blogAndaman.northBay.desc1, t.blogAndaman.northBay.desc2],
    },
    {
      id: "wandoor",
      title: t.blogAndaman.wandoor.title,
      image: "/assets/blog/andaman/wandoor-beach.webp",
      caption: t.blogAndaman.wandoor.caption,
      paragraphs: [t.blogAndaman.wandoor.desc1, t.blogAndaman.wandoor.desc2],
    },
    {
      id: "cellular-jail",
      title: t.blogAndaman.cellularJail.title,
      image: "/assets/blog/andaman/cellular-jail.webp",
      caption: t.blogAndaman.cellularJail.caption,
      paragraphs: [t.blogAndaman.cellularJail.desc1, t.blogAndaman.cellularJail.desc2],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t.blogAndaman.heroTitle}
        backgroundQuery="Andaman-hero"
      />

      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Blog Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-800/80 font-medium mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {t.blog.julyDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" /> {t.blog.photography}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {t.blog.globalTeam}
            </span>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <p className="font-serif text-xl sm:text-2xl text-emerald-950 italic mb-6">
              "{t.blogAndaman.introQuote}"
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t.blogAndaman.introParagraph}
            </p>
          </section>

          {/* Location Sections */}
          {sections.map((section) => (
            <section key={section.id} className="mb-16" id={section.id}>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
                {section.title}
              </h2>

              {/* Full-width Image */}
              <figure className="mb-6 mx-auto max-w-[600px]">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={section.image}
                    alt={section.caption}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm italic text-emerald-800/70">
                  {section.caption}
                </figcaption>
              </figure>

              {/* Paragraphs */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          {/* Conclusion Section */}
          <section className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 sm:p-10 mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              {t.blogAndaman.planningTrip}
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              {t.blogAndaman.planningDesc}
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
              <p className="text-gray-700 italic">
                {t.blogAndaman.conclusionNote}
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  {t.blogAndaman.enquireNow}
                </Button>
              </Link>
              <Link
                href={`/${locale}/destinations/domestic/andaman-nicobar-tour-for-goa`}
              >
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

          {/* Related Trips - 3 cards with 2 coming soon */}
          <section className="pt-8 border-t">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">
              {t.blogAndaman.youMightAlsoLike}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Active card - Kerala */}
              <Link href={`/${locale}/blog/kerala`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                  <img
                    src="/assets/destinations/Thumbnails/Kerala.webp"
                    alt={t.blog.keralaTitle}
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
