import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Is 1 day enough for South Goa?",
    answer:
      "Yes. One well-planned South Goa day trip can cover a heritage stop, two or three beaches, a relaxed local lunch and sunset. A longer stay is better if you want to explore waterfalls, wildlife or quieter villages without rushing.",
  },
  {
    question: "What are the top 5 places to visit in South Goa?",
    answer:
      "Palolem Beach, Colva Beach, Cabo de Rama Fort, the Basilica of Bom Jesus and Se Cathedral area, and the Dudhsagar Falls region are excellent highlights. Your choice depends on whether you prefer beaches, heritage or nature.",
  },
  {
    question: "How much does a one-day tour package in South Goa cost?",
    answer:
      "The price depends on the vehicle, pickup location, group size and inclusions. A private car generally costs more than a bus tour, while entry tickets, meals and activity fees may be extra. Ask for a current quote before booking.",
  },
  {
    question: "What to do during daytime in Goa?",
    answer:
      "Spend the day sightseeing, swimming at a safe beach, visiting a heritage site, eating local food, browsing a market or taking a nature excursion. Start early to make the most of the cooler hours.",
  },
  {
    question: "Which part of South Goa is best for staying?",
    answer:
      "Benaulim and Varca are convenient for a balanced beach holiday, while Palolem and Agonda suit travellers looking for a slower, more scenic coastal stay. Choose accommodation close to the places on your itinerary.",
  },
  {
    question: "Which month is best to visit South Goa?",
    answer:
      "November to February is the most comfortable period for beaches and sightseeing. March to May is hotter, and June to September brings monsoon rain that can affect beach and waterfall plans.",
  },
  {
    question: "How to plan a South Goa trip?",
    answer:
      "Choose your trip length, reserve accommodation, group nearby attractions together, leave time for beach breaks and confirm road conditions. For a day tour, prioritise a short list rather than trying to see every beach.",
  },
  {
    question: "Which month is Goa costly?",
    answer:
      "Prices are usually highest around Christmas, New Year and peak winter weekends. Booking early and travelling in the shoulder season can help keep accommodation and transport costs lower.",
  },
  {
    question: "Is South Goa worth visiting?",
    answer:
      "Absolutely. South Goa combines quieter beaches, green landscapes, local food, heritage and a slower pace. It is a good choice for travellers who want more than nightlife and crowded tourist centres.",
  },
  {
    question: "What is the cheapest time to visit Goa?",
    answer:
      "The monsoon and shoulder-season months are often more affordable, although rain may limit some outdoor plans. Compare transport and hotel prices, and check exactly what is open before booking.",
  },
];

const keywords =
  "South Goa day trip, Things to do in South Goa, South Goa trip plan for 4 day, South Goa one day trip, South Goa trip plan for 3 day, day South Goa trip, 2 day trip in south goa, 2 days trip to south goa, 3 days trip to south goa, 4 day south goa trip planner, day trip to south goa, day trips from south goa, south goa sightseeing package by car, south goa sightseeing package by bus, south goa tour package, north goa sightseeing, top 10 places to visit in south goa, south goa beaches, north goa tour, north goa tour package, south goa day tour, south goa day trip itinerary, south goa day tour package, south goa day chart, south goa 3 days itinerary, south goa one day tour package, south goa 2 days itinerary, south goa one day itinerary, south goa 4 days itinerary, south goa airport name, south goa airport, south goa airbnb, south goa nearest airport, south goa to dudhsagar distance, south goa beaches name";

export function SouthGoaDayBlogContent({ basePath = "" }: { basePath?: string }) {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-800/80 font-medium mb-8">
          <span>October 2026</span>
          <span>Travel Guide</span>
          <span>Global Tourist Centre Team</span>
        </div>

        <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-10">
          <p>
            South Goa rewards travellers who slow down. Instead of rushing from one attraction to
            another, spend a day moving from heritage lanes to palm-fringed beaches, eating local
            food and watching the light change over the Arabian Sea.
          </p>
          <p>
            This South Goa day trip guide is built for first-time visitors and independent
            travellers. It includes a practical South Goa day trip itinerary, ideas for two, three
            and four days, airport information, beach planning and advice adapted from our Goa
            packing guide.
          </p>
        </div>

        <figure className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/destinations/South-goa/south-goa-sunset.webp"
            alt="Sunset over a South Goa beach"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </figure>

        <section className="mb-12" id="one-day-itinerary">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
            A South Goa one day itinerary
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Start early with a heritage visit or a quiet breakfast. The Basilica of Bom Jesus and
              Se Cathedral are an easy cultural pairing, while local cafés and village roads offer
              a glimpse of everyday Goa. Dress respectfully for churches and temples and wear
              comfortable shoes for walking.
            </p>
            <p>
              Continue south for a beach break at Colva, Benaulim or Varca. Colva is convenient for
              a first visit; Benaulim and Varca are a little more relaxed. Carry sunscreen,
              sunglasses, a hat, water and a waterproof pouch, as recommended in a practical Goa
              packing list.
            </p>
            <p>
              End the day at Palolem or another west-facing beach for sunset. If you are travelling
              by car, leave time for traffic and parking. A private sightseeing package by car is
              useful for flexible stops, while a bus sightseeing package can be more economical for
              a fixed route.
            </p>
          </div>
        </section>

        <section className="mb-12" id="things-to-do">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
            Things to do in South Goa
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            <li>Relax at Palolem, Agonda, Colva, Benaulim or Varca beaches.</li>
            <li>Visit Cabo de Rama Fort for coastal views and a quieter heritage stop.</li>
            <li>Try Goan seafood, vegetarian thali, poi bread and local desserts.</li>
            <li>Plan Dudhsagar Falls or a wildlife experience as a separate nature day.</li>
            <li>Explore village roads, markets and small cafés at an unhurried pace.</li>
          </ul>
        </section>

        <section className="mb-12" id="trip-plans">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
            South Goa trip plans for 2, 3 and 4 days
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["2 days trip to South Goa", "Day 1: heritage, Colva and Benaulim. Day 2: Palolem, Agonda and sunset."],
              ["3 days trip to South Goa", "Add Cabo de Rama and a slower beach or village day."],
              ["4 day South Goa trip planner", "Add Dudhsagar or a nature excursion, with a spare day for weather and rest."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="travel-information">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
            South Goa airport, beaches and travel tips
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              The nearest airport is Goa International Airport, commonly called Dabolim Airport
              (GOI). Manohar International Airport in North Goa (GOX) is another option, but
              transfer time to South Goa can be longer. Check your accommodation location before
              choosing a taxi or transfer.
            </p>
            <p>
              South Goa beaches include Colva, Benaulim, Varca, Cavelossim, Mobor, Palolem and
              Agonda. For Dudhsagar, the driving distance varies by starting point and route, so
              confirm the exact pickup and access arrangements rather than relying on a single
              distance estimate.
            </p>
            <p>
              Goa is warm and humid for much of the year. Pack breathable clothes, swimwear,
              comfortable walking sandals, sunscreen, insect repellent, a reusable water bottle and
              a light layer. During monsoon, add a waterproof bag and check local conditions before
              waterfall or water activities.
            </p>
          </div>
        </section>

        <section className="mb-12" id="faq">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
            Frequently asked questions about South Goa
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-emerald-950">{faq.question}</summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="sr-only">{keywords}</p>
        <div className="border-t pt-8">
          <Link href={`${basePath}/contact-us`} className="inline-flex rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700">
            Plan your South Goa trip
          </Link>
        </div>
      </div>
    </article>
  );
}

export { faqs };
