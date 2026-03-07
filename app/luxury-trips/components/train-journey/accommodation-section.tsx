"use client";

import { AccommodationCard } from "./accommodation-card";

interface AccommodationData {
    image: { src: string; alt: string };
    name: string;
    location: string;
    description: string;
    rating: number;
}

interface AccommodationSectionProps {
    data: readonly AccommodationData[];
}

export function AccommodationSection({ data }: AccommodationSectionProps) {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <section
            style={{
                background: "linear-gradient(180deg, #eee9d8 0%, #f4f1e9 30%, #ede8d8 70%, #f4f1e9 100%)",
                padding: "88px 0 108px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Linen texture overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' x='0' y='0' fill='%23004e59' opacity='0.08'/%3E%3Crect width='1' height='1' x='2' y='2' fill='%23004e59' opacity='0.08'/%3E%3C/svg%3E")`,
            }} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px", position: "relative" }}>

                {/* Section Header — identical pattern to CabinsSection */}
                <div style={{ textAlign: "center", marginBottom: "72px", animation: "fadeIn 1s ease both" }}>
                    {/* Top ornament row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "24px" }}>
                        <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to right, transparent, rgba(0,78,89,0.4))" }} />
                        <svg width="28" height="14" viewBox="0 0 28 14">
                            <path d="M14 0 L28 14 L0 14 Z" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.7" />
                            <path d="M14 4 L22 14 L6 14 Z" fill="#c9a84c" opacity="0.3" />
                        </svg>
                        <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to left, transparent, rgba(0,78,89,0.4))" }} />
                    </div>

                    <p style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.45em",
                        color: "#c9a84c",
                        textTransform: "uppercase",
                        margin: "0 0 14px",
                    }}>
                        Where You'll Stay
                    </p>

                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
                        fontWeight: 300,
                        letterSpacing: "0.25em",
                        color: "#004e59",
                        textTransform: "uppercase",
                        margin: "0 0 4px",
                        lineHeight: 1.05,
                    }}>
                        Luxury Accommodations
                    </h2>

                    <h3 style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "clamp(1rem, 2vw, 1.45rem)",
                        fontWeight: 400,
                        letterSpacing: "0.18em",
                        color: "#006e76",
                        margin: "8px 0 0",
                    }}>
                        Handpicked Hotels &amp; Heritage Properties
                    </h3>

                    {/* Bottom ornament row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginTop: "24px" }}>
                        <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
                        <svg width="8" height="8" viewBox="0 0 8 8">
                            <rect x="0" y="0" width="8" height="8" fill="#c9a84c" opacity="0.7" transform="rotate(45 4 4)" />
                        </svg>
                        <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
                    </div>
                </div>

                {/* Cards grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "32px",
                    alignItems: "stretch",
                }}>
                    {data.map((hotel, index) => (
                        <AccommodationCard
                            key={index}
                            index={index}
                            imageSrc={hotel.image?.src || ""}
                            imageAlt={hotel.image?.alt || ""}
                            name={hotel.name}
                            location={hotel.location}
                            description={hotel.description}
                            rating={hotel.rating}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}