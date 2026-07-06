"use client";

interface DayPlan {
    dayStr: string;
    name: string;
    desc: string;
}

interface SplendourItinerarySectionProps {
    itinerary: readonly DayPlan[];
    title?: string;
    subtitle?: string;
    duration?: string;
}

export function SplendourItinerarySection({
    itinerary,
    title,
    subtitle,
    duration,
}: SplendourItinerarySectionProps) {
    if (!Array.isArray(itinerary)) {
        console.error("ITINERARY IS NOT AN ARRAY in SplendourItinerarySection:", itinerary);
        return null;
    }

    if (itinerary.length === 0) return null;

    return (
        <section className="py-16 md:py-20 bg-[#0a2c3a] text-white relative overflow-hidden">
            {/* Radial glow */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <div
                    className="w-[800px] h-[800px] rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)" }}
                />
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic mb-4 text-white drop-shadow-md">
                        {title}
                    </h2>
                    <div className="inline-block bg-[#d28b38] text-white font-medium px-6 py-2 rounded shadow-md text-base md:text-lg">
                        {subtitle}
                    </div>
                    {duration && (
                        <p className="mt-5 text-lg md:text-2xl font-bold tracking-wide">
                            {duration}
                        </p>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1 min-w-0">
                        <div className="space-y-7">
                            {itinerary.map((day, idx) => (
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
                </div>
            </div>
        </section>
    );
}