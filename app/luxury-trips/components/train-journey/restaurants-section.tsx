"use client";

import Image from "next/image";

export function RestaurantsSection() {
    return (
        <section className="py-16 md:py-24 relative" style={{ backgroundColor: "#fdfbf7" }}>
            {/* Optional decorative background pattern could go here */}

            <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif italic text-[#003844] mb-2 drop-shadow-sm">
                    Maharaja's Express
                </h2>
                <h3 className="text-5xl md:text-7xl font-bold text-[#006e76] mb-16 tracking-tight">
                    Restaurants
                </h3>

                <div className="flex flex-col gap-16 relative">

                    {/* Mayur Mahal */}
                    <div className="relative border-4 border-[#003844] rounded-sm p-1 bg-white shadow-xl mx-auto w-full max-w-4xl">
                        <div className="relative aspect-[21/9] w-full">
                            <Image
                                src="/assets/Luxury/Maharaja/mayur-mahal.webp"
                                alt="Mayur Mahal Restaurant"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Title Badge Overlapping */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0a3a4c] px-8 py-3 rounded shadow-lg border border-[#002f3f]">
                            <h4 className="text-white text-2xl md:text-3xl font-bold tracking-wider">MAYUR MAHAL</h4>
                        </div>
                    </div>

                    {/* Separation Badge */}
                    <div className="my-4 flex justify-center z-20">
                        <div className="bg-white rounded-full p-2 shadow-md w-16 h-16 flex items-center justify-center border border-gray-100">
                            {/* Replace with actual logo if available */}
                            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} className="object-contain opacity-80" unoptimized />
                        </div>
                    </div>

                    {/* Rang Mahal */}
                    <div className="relative border-4 border-[#003844] rounded-sm p-1 bg-white shadow-xl mx-auto w-full max-w-4xl">
                        <div className="relative aspect-[21/9] w-full">
                            <Image
                                src="/assets/Luxury/Maharaja/rang-mahal.webp"
                                alt="Rang Mahal Restaurant"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Title Badge Overlapping */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0a3a4c] px-8 py-3 rounded shadow-lg border border-[#002f3f]">
                            <h4 className="text-white text-2xl md:text-3xl font-bold tracking-wider">RANG MAHAL</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
