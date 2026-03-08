"use client";

import Image from "next/image";

interface Restaurant {
    name: string;
    image: {
        src: string;
        alt: string;
    };
}

interface RestaurantsSectionProps {
    restaurants: readonly Restaurant[];
    title?: string;
    subtitle?: string;
}

// ── Default data — export and pass as prop from your page ─────────────────────
export const MAHARAJA_RESTAURANTS_DATA: Restaurant[] = [
    {
        name: "MAYUR MAHAL",
        image: {
            src: "/assets/Luxury/Maharaja/mayur-mahal.webp",
            alt: "Mayur Mahal Restaurant",
        },
    },
    {
        name: "RANG MAHAL",
        image: {
            src: "/assets/Luxury/Maharaja/rang-mahal.webp",
            alt: "Rang Mahal Restaurant",
        },
    },
];

export function RestaurantsSection({
    restaurants,
    title = "Maharaja's Express",
    subtitle = "Restaurants",
}: RestaurantsSectionProps) {
    if (!restaurants || restaurants.length === 0) return null;

    return (
        <section className="py-16 md:py-24 relative" style={{ backgroundColor: "#fdfbf7" }}>
            <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif italic text-[#003844] mb-2 drop-shadow-sm">
                    {title}
                </h2>
                <h3 className="text-5xl md:text-7xl font-bold text-[#006e76] mb-16 tracking-tight">
                    {subtitle}
                </h3>

                <div className="flex flex-col gap-16 relative">
                    {restaurants.map((restaurant, index) => (
                        <div
                            key={index}
                            className="relative border-4 border-[#003844] rounded-sm p-1 bg-white shadow-xl mx-auto w-full max-w-4xl"
                        >
                            <div className="relative aspect-[21/9] w-full">
                                <Image
                                    src={restaurant.image.src}
                                    alt={restaurant.image.alt}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            {/* Title Badge */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0a3a4c] px-8 py-3 rounded shadow-lg border border-[#002f3f]">
                                <h4 className="text-white text-2xl md:text-3xl font-bold tracking-wider whitespace-nowrap">
                                    {restaurant.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}