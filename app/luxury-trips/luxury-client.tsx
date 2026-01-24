"use client";

import { useI18n } from "@/lib/i18n/context";
import { OfferBanner } from "@/components/offer-banner";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

/* ---------------------------------
   STATIC CONFIG (NOT TRANSLATED)
---------------------------------- */

const features = [
  { key: "bestPrice" },
  { key: "tailorMade" },
  { key: "personalConsultants" },
  { key: "flexibility" },
  { key: "recognised" },
];

const luxuryDestinations = [
  {
    slug: "kerala-luxury",
    image: "/assets/Luxury/Kerala/Kerala Backwaters.webp",
  },
  {
    slug: "mumbai-luxury",
    image: "/assets/Luxury/Mumbai/Mumbai-Experience-thumb.webp",
  },
  {
    slug: "golden-triangle-luxury",
    image: "/assets/Luxury/Golden Triangle/golden-triangle-thumb.webp",
  },
  {
    slug: "rajasthan-luxury",
    image: "/assets/Luxury/Rajasthan/Royal Rajasthan.webp",
  },
  {
    slug: "karnataka-luxury",
    image: "/assets/Luxury/Banglore/Mysore-thumb.webp",
  },
] as const;

/* ---------------------------------
   PAGE
---------------------------------- */

export default function LuxuryDestinationsPage() {
  const { t,locale } = useI18n();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const message = encodeURIComponent(
      `Hi! I'm interested in your luxury travel packages.\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}`
    );

    const whatsappUrl = `https://wa.me/919067972295?text=${message}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/assets/dubai-skyline-burj-khalifa-luxury-evening.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/90 via-[#1a2332]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-22 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                {t.luxury.heroTitle}
              </h1>

              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-8">
                {t.luxury.discount}
              </span>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 flex gap-2 items-center"
                  >
                    <Check className="text-secondary w-5 h-5" />
                    <span className="text-white text-sm">
                      {t.luxury[feature.key as keyof Omit<typeof t.luxury, 'destinations'>] as string}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <Card className="max-w-md lg:ml-auto">
              <CardContent className="p-6">
                <h2 className="font-serif text-xl font-semibold mb-4 text-center">
                  {t.luxury.getDiscount}
                </h2>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <Input name="name" placeholder={t.form.name} required />

                  <Input
                    name="email"
                    type="email"
                    placeholder={t.form.email}
                    required
                  />

                  <Input
                    name="phone"
                    type="tel"
                    placeholder={t.form.phone}
                    required
                  />

                  <Button type="submit" className="w-full">
                    {t.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* <OfferBanner mode="inline" /> */}

      {/* DESTINATIONS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            {t.luxury.exclusiveDestinations}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryDestinations.map((item) => {
              const content = t.luxury.destinations[item.slug];

              return (
                <article
                  key={item.slug}
                  className="
              group relative bg-white rounded-3xl overflow-hidden
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              hover:-translate-y-2
              border border-transparent
              hover:border-[#1a2332]
              cursor-pointer
            "
                >
                  {/* IMAGE */}
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                    <img
                      src={item.image}
                      alt={content.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* HOVER PIN */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-xs font-medium text-slate-900">
                        {t.experiences.explore ?? "Explore"}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                      {content.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5 min-h-[3rem]">
                      {content.description}
                    </p>

                    {/* CTA */}
                    <Link href={`/${locale}/luxury-trips/${item.slug}`}>
                      <button
                        className="
                    w-full group/btn relative
                    bg-gradient-to-r from-slate-900 to-slate-800
                    text-white py-3.5 rounded-xl font-medium
                    overflow-hidden
                    transition-all duration-300
                    hover:shadow-xl
                  "
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {t.destinations.exploreTours}
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </span>

                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0" />
                      </button>
                    </Link>
                  </div>

                  {/* DECORATIVE CORNER */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-transparent rounded-br-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
