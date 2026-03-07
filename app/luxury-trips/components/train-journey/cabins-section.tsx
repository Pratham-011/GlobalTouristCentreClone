"use client";

import Image from "next/image";
import { useState } from "react";

interface CabinType {
    name: string;
    size: string;
    images: string[];
    features: string[];
    layout: "split" | "three";
}

const CABIN_DATA: CabinType[] = [
    {
        name: "Deluxe Cabin",
        size: "(112 sq. ft. / 10.4 sq. mt.)",
        images: ["/assets/Luxury/Maharaja/deluxe-cabin-1.jpg", "/assets/Luxury/Maharaja/deluxe-cabin-2.jpg"],
        layout: "split",
        features: [
            "12 Twin and 8 Double Bed Cabins",
            "En suite shower and WC",
            "Major OTT channels available",
            "Writing ledge and stool",
            "Wardrobe with electronic safe",
        ],
    },
    {
        name: "Junior Suite",
        size: "(150 sq. ft. / 13.9 sq. mt.)",
        images: ["/assets/Luxury/Maharaja/junior-suite-1.jpg", "/assets/Luxury/Maharaja/junior-suite-2.jpg"],
        layout: "split",
        features: [
            "12 Twin and 6 Double Bed Cabins",
            "En suite shower and WC",
            "Major OTT channels available",
            "Table with chair",
            "Wardrobe with electronic safe",
        ],
    },
    {
        name: "Suite",
        size: "(220 sq. ft. / 20.4 sq. mt.)",
        images: [
            "/assets/Luxury/Maharaja/suite-1.jpg",
            "/assets/Luxury/Maharaja/suite-2.jpg",
            "/assets/Luxury/Maharaja/suite-3.jpg",
        ],
        layout: "three",
        features: [
            "4 Double Bed Cabins",
            "En suite bath tub, shower and WC",
            "Minibar",
            "Wardrobe with electronic safe",
            "Major OTT channels available",
            "Separate sitting area with sofa chairs",
        ],
    },
    {
        name: "Presidential Suite",
        size: "(448 sq. ft. / 41.6 sq. mt)",
        images: [
            "/assets/Luxury/Maharaja/presidential-suite-1.jpg",
            "/assets/Luxury/Maharaja/presidential-suite-2.jpg",
            "/assets/Luxury/Maharaja/presidential-suite-3.jpg",
        ],
        layout: "three",
        features: [
            "One full coach",
            "Two bedrooms and a living room",
            "Master bedroom with double bed and en suite bathroom with bath tub, shower and WC",
            "Minibar",
            "Major OTT channels available",
            "Second bedroom with twin beds and en suite bathroom with shower and WC",
            "Separate sitting area with sofa chairs",
            "Wardrobe with electronic safe",
        ],
    },
];

function OrnamentDivider() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "16px 0" }}>
            <div style={{ height: "1px", width: "70px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="7" y="0" width="2" height="16" fill="#c9a84c" opacity="0.5" />
                <rect x="0" y="7" width="16" height="2" fill="#c9a84c" opacity="0.5" />
                <rect x="3.5" y="3.5" width="9" height="9" fill="none" stroke="#c9a84c" strokeWidth="0.75" transform="rotate(45 8 8)" />
            </svg>
            <div style={{ height: "1px", width: "70px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
        </div>
    );
}

function CabinCard({ cabin, index }: { cabin: CabinType; index: number }) {
    const [hoveredImg, setHoveredImg] = useState<number | null>(null);

    return (
        <div
            style={{
                animation: `fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) both`,
                animationDelay: `${index * 0.12}s`,
            }}
        >
            <div
                style={{
                    position: "relative",
                    border: "1px solid rgba(201,168,76,0.25)",
                    boxShadow: "0 20px 80px rgba(0,60,70,0.18), 0 4px 16px rgba(0,0,0,0.12), inset 0 1px 0 rgba(201,168,76,0.15)",
                    overflow: "hidden",
                    background: "#003d47",
                }}
            >
                {/* Top gold rule */}
                <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />

                {/* Images */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: cabin.layout === "split" ? "1fr 1fr" : "1fr 1fr 1fr",
                        gap: "3px",
                        padding: "12px 12px 0",
                        background: "#003d47",
                    }}
                >
                    {cabin.images.map((img, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredImg(i)}
                            onMouseLeave={() => setHoveredImg(null)}
                            style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", cursor: "zoom-in" }}
                        >
                            <Image
                                src={img}
                                alt={`${cabin.name} view ${i + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                                style={{
                                    transform: hoveredImg === i ? "scale(1.07)" : "scale(1)",
                                    filter: hoveredImg === i ? "brightness(1.08) saturate(1.1)" : "brightness(0.88) saturate(0.95)",
                                    transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease",
                                }}
                            />
                            {/* gold corner accents on hover */}
                            {hoveredImg === i && (
                                <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                                    <div style={{ position: "absolute", top: 0, left: 0, width: 20, height: 20, borderTop: "1.5px solid #c9a84c", borderLeft: "1.5px solid #c9a84c" }} />
                                    <div style={{ position: "absolute", top: 0, right: 0, width: 20, height: 20, borderTop: "1.5px solid #c9a84c", borderRight: "1.5px solid #c9a84c" }} />
                                    <div style={{ position: "absolute", bottom: 0, left: 0, width: 20, height: 20, borderBottom: "1.5px solid #c9a84c", borderLeft: "1.5px solid #c9a84c" }} />
                                    <div style={{ position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderBottom: "1.5px solid #c9a84c", borderRight: "1.5px solid #c9a84c" }} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div
                    style={{
                        background: "linear-gradient(170deg, #006e76 0%, #00606a 40%, #004e59 100%)",
                        padding: "36px 48px 40px",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Ambient glow */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 65%)",
                    }} />

                    {/* Cabin title */}
                    <div style={{ textAlign: "center", position: "relative" }}>
                        <p style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "0.7rem",
                            letterSpacing: "0.4em",
                            color: "#c9a84c",
                            textTransform: "uppercase",
                            margin: "0 0 8px",
                            fontStyle: "italic",
                        }}>
                            {cabin.size}
                        </p>
                        <h3 style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
                            fontWeight: 300,
                            letterSpacing: "0.22em",
                            color: "#f5edda",
                            textTransform: "uppercase",
                            margin: 0,
                            lineHeight: 1,
                        }}>
                            {cabin.name}
                        </h3>
                    </div>

                    <OrnamentDivider />

                    {/* Features */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                        gap: "0 56px",
                        maxWidth: "880px",
                        margin: "0 auto",
                    }}>
                        {cabin.features.map((feature, fIndex) => (
                            <div
                                key={fIndex}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "12px",
                                    padding: "9px 0",
                                    borderBottom: "1px solid rgba(201,168,76,0.1)",
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: "clamp(0.92rem, 1.4vw, 1.08rem)",
                                    color: "rgba(245,237,218,0.88)",
                                    letterSpacing: "0.04em",
                                    lineHeight: 1.45,
                                }}
                            >
                                <span style={{
                                    color: "#c9a84c",
                                    fontSize: "0.45rem",
                                    marginTop: "7px",
                                    flexShrink: 0,
                                }}>◆</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom gold rule */}
                <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />
            </div>
        </div>
    );
}

export function CabinsSection() {
    return (
        <section
            style={{
                background: "linear-gradient(180deg, #eee9d8 0%, #f4f1e9 30%, #ede8d8 70%, #f4f1e9 100%)",
                padding: "88px 0 108px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle linen texture overlay */}
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

            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 28px", position: "relative" }}>

                {/* Section Header */}
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
                        Aboard the Golden Journey
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
                        Maharaja's Express
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
                        Private Cabins &amp; Suites
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

                {/* Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                    {CABIN_DATA.map((cabin, index) => (
                        <CabinCard key={index} cabin={cabin} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}