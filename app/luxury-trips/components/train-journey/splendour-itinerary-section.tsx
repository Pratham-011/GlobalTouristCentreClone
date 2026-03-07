"use client";

import Image from "next/image";

interface DayPlan {
    dayStr: string;
    name: string;
    desc: string;
}

const ITINERARY_DATA: DayPlan[] = [
    {
        dayStr: "Day 1",
        name: "Arrival in Delhi",
        desc: "Round-trip flight from Goa to Delhi Private airport transfer Check-in at luxury 5★ deluxe hotel (upgraded room category) Leisure evening Overnight in Delhi (Luxury Hotel)",
    },
    {
        dayStr: "Day 2 (Sunday)",
        name: "Delhi and Agra",
        desc: "Board the train at Delhi in the morning. Upon arriival at Agra, visit the Taj Mahal. Overnight on the train at Agra. Onboard Breakfast, Lunch and Dinner.",
    },
    {
        dayStr: "Day 3 (Monday)",
        name: "Agra and Ranthambore",
        desc: "Visit the Agra Fort. Return to the train for breakfast as it proceeds to Sawai Madhopur. Lunch will be served onboard. Enjoy Safari at the Ranthambore National Park. Dinner will be served onboard as the train proceeds to Jaipur",
    },
    {
        dayStr: "Day 4 (Tuesday)",
        name: "Jaipur",
        desc: "After onboard breakfast, deboard to visit the Amber Fort. Return to the train for lunch. Enjoy dinner at an exclusive venue. Return to the train as it proceeds to Bikaner.",
    },
    {
        dayStr: "Day 5 (Wednesday)",
        name: "Bikaner",
        desc: "After a leisurely breakfast and lunch onboard, proceed to visit the Junagarh Fort followed by an exclusive barbecue evening on the sand dunes. Train proceeds to Jodhpur.",
    },
    {
        dayStr: "Day 6 (Thursday)",
        name: "Jodhpur",
        desc: "Breakfast and lunch onboard. Morning at leisure. Post lunch, proceed to visit the Mehrangarh Fort and a walking tour of the Old Clock Tower Market followed by dinner at an exclusive venue. Train proceeds to Udaipur.",
    },
    {
        dayStr: "Day 7 (Friday)",
        name: "Udaipur",
        desc: "After onboard breakfast proceed for boat ride on Lake Pichola and visit the City Palace. Lunch at an exclusive venue. Dinner will be served onboard as the train proceeds to Mumbai.",
    },
    {
        dayStr: "DAY 8 (Saturday)",
        name: "Arrival in Mumbai",
        desc: "Breakfast & lunch onboard, Disembark in Mumbai Private transfer to Taj Mahal Palace Hotel Check-in Overnight at Taj Mahal Palace",
    },
    {
        dayStr: "DAY 9 (Sunday)",
        name: "Return to Goa",
        desc: "Breakfast at hotel Private transfer to Mumbai Airport Flight back to Goa",
    },
];

// ── Swap these paths for your actual images ──────────────────────────────────
const SIDE_IMAGES = [
    { src: "/assets/Luxury/Maharaja/hero.webp", caption: "Taj Mahal, Agra" },
    { src: "/assets/Luxury/Maharaja/hero.webp", caption: "Amber Fort, Jaipur" },
    { src: "/assets/Luxury/Maharaja/hero.webp", caption: "Mehrangarh Fort, Jodhpur" },
    { src: "/assets/Luxury/Maharaja/hero.webp", caption: "Lake Pichola, Udaipur" },
];

function SideImage({ img }: { img: typeof SIDE_IMAGES[0] }) {
    return (
        <div
            className="relative w-full overflow-hidden rounded-sm group"
            style={{
                height: "170px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.45)",
                border: "1px solid rgba(210,139,56,0.35)",
            }}
        >
            <div
                className="absolute top-0 left-0 right-0 z-10"
                style={{ height: "2px", background: "rgba(210,139,56,0.7)" }}
            />
            <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
            />
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,44,58,0.88) 100%)" }}
            />
            <p
                className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[10px] tracking-widest uppercase z-10"
                style={{ color: "#f0c97a", fontFamily: "Georgia, serif", letterSpacing: "0.15em" }}
            >
                {img.caption}
            </p>
        </div>
    );
}

export function SplendourItinerarySection() {
    return (
        <section className="py-16 md:py-20 bg-[#0a2c3a] text-white relative overflow-hidden">
            {/* Radial glow */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[800px] rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)" }} />
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic mb-4 text-white drop-shadow-md">
                        The indian splendour
                    </h2>
                    <div className="inline-block bg-[#d28b38] text-white font-medium px-6 py-2 rounded shadow-md text-base md:text-lg">
                        A wonderful Journey through a Magical Land
                    </div>
                    <p className="mt-5 text-lg md:text-2xl font-bold tracking-wide">
                        ( 9 NIGHTS / 10 DAYS )
                    </p>
                </div>

                {/* Mobile: 2×2 image grid above itinerary */}
                <div className="grid grid-cols-2 gap-3 mb-10 md:hidden">
                    {SIDE_IMAGES.map((img, i) => (
                        <div
                            key={i}
                            className="relative w-full overflow-hidden rounded-sm"
                            style={{
                                aspectRatio: "4/3",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
                                border: "1px solid rgba(210,139,56,0.35)",
                            }}
                        >
                            <div className="absolute top-0 left-0 right-0 z-10"
                                style={{ height: "2px", background: "rgba(210,139,56,0.7)" }} />
                            <Image src={img.src} alt={img.caption} fill className="object-cover" unoptimized />
                            <div className="absolute inset-0"
                                style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(10,44,58,0.88) 100%)" }} />
                            <p className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-[10px] tracking-widest uppercase z-10"
                                style={{ color: "#f0c97a", fontFamily: "Georgia, serif" }}>
                                {img.caption}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desktop: side-by-side */}
                <div className="flex flex-col md:flex-row gap-10 items-start">

                    {/* Itinerary text */}
                    <div className="flex-1 min-w-0">
                        <div className="space-y-7">
                            {ITINERARY_DATA.map((day, idx) => (
                                <div key={idx} className="leading-relaxed">
                                    <p className="text-[15px] md:text-[17px]">
                                        <span className="text-[#f58133] font-bold">
                                            {day.dayStr}{day.name ? ` – ${day.name}` : ""}
                                        </span>
                                        {" – "}
                                        <span className="text-gray-200">{day.desc}</span>
                                    </p>
                                </div>
                            ))}
                            <div className="pt-4">
                                <p className="text-[#f58133] font-bold text-xl">Tour Ends.</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop image column — fixed width, no stretching */}
                    <div className="hidden md:flex flex-col gap-4" style={{ width: "240px", flexShrink: 0 }}>
                        {SIDE_IMAGES.map((img, i) => (
                            <SideImage key={i} img={img} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}