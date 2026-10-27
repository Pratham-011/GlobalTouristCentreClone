"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, User, CheckCircle2, ShieldCheck, SunMedium } from "lucide-react";
import { Button } from "@/components-eng/ui/button";
import { HeroSection } from "@/components-eng/hero-section";

const checklist = [
  "Cotton or linen tops and dresses for hot, humid weather",
  "Lightweight trousers, shorts, and breathable evening outfits",
  "Swimwear plus a beach cover-up or sarong",
  "Sunscreen, sunglasses, and a hat or cap",
  "Comfortable walking sandals and flip-flops",
  "Travel documents, meds, power bank, and essential toiletries",
];

const mustHaveItems = [
  "Two swimsuits for beach days and quick drying",
  "A crossbody bag with secure closure for market walks",
  "Sunscreen with SPF 30+ and lip balm with SPF",
  "Reusable water bottle and small day bag",
  "Light scarf or shawl for churches and evening comfort",
  "Lightweight rain jacket or quick-dry layers for monsoon days",
];

export default function GoaPackingListClient() {
  return (
    <>
      <HeroSection title="Goa Packing List for Women" backgroundQuery="Goa-hero" />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-800/80 font-medium mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> October 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" /> Travel Tips
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> Global Tourist Centre Team
            </span>
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-10">
            <p>
              After choosing your itinerary, the most important task is deciding what to pack.
              For a woman travelling to Goa, the challenge is not just clothes; it is balancing
              beachwear, city wear, cultural visits, and practical travel essentials without
              overpacking.
            </p>
            <p>
              Goa is warm, tropical, and often humid. The best Goan packing strategy is simple:
              choose breathable fabrics, plan for sun and sand, and keep a few lightweight layers
              for evenings, churches, or air-conditioned spaces.
            </p>
          </div>

          <figure className="mb-10 mx-auto max-w-[520px]">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/blog/goa/goa-packing-essentials.png"
                alt="Travel clothes, hat, sunglasses, sandals, and accessories packed for a Goa trip"
                width={520}
                height={650}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </figure>

          <section className="mb-16" id="weather">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              Goa weather: pack smart for heat, monsoon, and coastal days
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Goa stays warm throughout the year. Days are often hot and sunny, while evenings
                can feel cooler, especially by the coast or in air-conditioned restaurants.
                During the monsoon, humidity rises and sudden rain can affect beach plans and
                outdoor activities.
              </p>
              <p>
                This means your Goa packing list should focus on cotton, linen, quick-drying
                fabrics, waterproof sandals, and light layers. In other words, comfort matters more
                than heavy styling.
              </p>
            </div>
          </section>

          <section className="mb-16" id="clothes">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              Clothes to pack for Goa
            </h2>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 sm:p-8 mb-6">
              <ul className="space-y-3 text-gray-700 text-lg">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 w-5 h-5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                For a 4–5 day trip, a smart women’s Goa packing list would include 3–5 daytime
                outfits, 1–2 evening looks, 2 swimsuits, and enough underwear and bras. Choose
                loose-fitting clothes that breathe well in the heat.
              </p>
              <p>
                A summer dress or kaftan works beautifully for a casual lunch, while cotton tops,
                linen shorts, or lightweight trousers are ideal for sightseeing or market visits.
                If you are visiting churches, temples, or heritage sites, pack a scarf or light
                shirt for extra coverage.
              </p>
            </div>
          </section>

          <section className="mb-16" id="beachwear">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              Beachwear and swimming essentials
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-4">
                  Include in your beach bag
                </h3>
                <ul className="space-y-3 text-gray-700 text-base">
                  {mustHaveItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SunMedium className="mt-1 w-4 h-4 shrink-0 text-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-4">
                  Safety and comfort
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  A waterproof pouch for your phone, secure crossbody bag, and trusted sunscreen are
                  essential on crowded beaches or while snorkelling. Always follow local warnings,
                  especially during monsoon conditions or when swimming in rough seas.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16" id="footwear-accessories">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              Footwear and accessories that actually work
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                You will likely walk on sand, paved roads, busy streets, and uneven pathways in Goa.
                The ideal packing mix is simple: flip-flops for the beach, comfortable walking shoes
                for sightseeing, and sandals for restaurants and casual evenings.
              </p>
              <p>
                Accessories should be practical rather than decorative. Pack sunglasses with UV
                protection, a wide-brim hat, a compact day bag, and a reusable water bottle. If you
                plan to explore markets, beaches, or ferry rides, a crossbody bag is a safer and more
                convenient option than a larger tote.
              </p>
            </div>
          </section>

          <section className="mb-16" id="skincare">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              Toiletries and skincare essentials
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Goa’s heat and humidity can make your skin feel tired and exposed to the sun. Keep a
                small toiletry pouch ready with your regular essentials: toothbrush, toothpaste,
                deodorant, face wash, moisturiser, shampoo, and body wash.
              </p>
              <p>
                Your skincare checklist should include sunscreen, lip balm with SPF, after-sun care,
                hand sanitiser, sanitary products, and any prescribed medicines. If you are staying
                for several days, carry enough basic products in their original packaging.
              </p>
            </div>
          </section>

          <section className="mb-16" id="documents">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              Travel documents, money, and smart day-to-day essentials
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                International travellers should keep their passport, visa or e-visa details, hotel
                confirmations, flight tickets, travel insurance information, and emergency contacts
                stored safely and easily accessible.
              </p>
              <p>
                Carry a small amount of cash, a payment card, and a backup copy of your key documents.
                Also add a power bank, charger, adaptor, and a compact first-aid kit. These small
                items make a huge difference when you are moving between beaches, markets, and tourist
                areas every day.
              </p>
            </div>
          </section>

          <section className="mb-16" id="seasonal">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
              Packing by season
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                <strong>October to February:</strong> light clothes, swimwear, sunscreen, walking
                shoes, and a light evening layer.
              </p>
              <p>
                <strong>March to May:</strong> breathable outfits, hat, sunglasses, water bottle,
                and extra sun protection.
              </p>
              <p>
                <strong>June to September:</strong> quick-dry clothes, waterproof footwear, a light
                rain jacket, and a dry bag for wet-day essentials.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 sm:p-10 mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
              Final checklist before you leave
            </h2>
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="mt-1 w-5 h-5 text-emerald-600" />
              <p className="text-gray-700 text-lg">
                Always double-check your passport, insurance, medications, and beach essentials before
                departure. A well-packed bag makes your Goa trip more comfortable, safer, and far more
                enjoyable.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact-us">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Enquire Now
                </Button>
              </Link>
              <Link href="/destinations/domestic/goa-sightseeing-tour">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  Explore Goa Tours
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
