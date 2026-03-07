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
        images: ["/assets/Luxury/Maharaja/deluxe.webp", "/assets/Luxury/Maharaja/deluxe-cabin-2.jpg"],
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
        images: ["/assets/Luxury/Maharaja/junior.webp", "/assets/Luxury/Maharaja/junior-suite-2.jpg"],
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
            "/assets/Luxury/Maharaja/suite.webp",
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
            "/assets/Luxury/Maharaja/presidential.webp",
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

// Decorative diamond divider
function DiamondDivider() {
    return (
        <div className="flex items-center justify-center gap-3 my-2">
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
            <div style={{ width: "6px", height: "6px", background: "#c9a84c", transform: "rotate(45deg)" }} />
            <div style={{ width: "8px", height: "8px", border: "1px solid #c9a84c", transform: "rotate(45deg)" }} />
            <div style={{ width: "6px", height: "6px", background: "#c9a84c", transform: "rotate(45deg)" }} />
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
        </div>
    );
}

export function CabinsSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section
            className="py-20 md:py-32 relative overflow-hidden"
            style={{ backgroundColor: "#f4f1e9" }}
        >
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        #004e59 0px,
                        #004e59 1px,
                        transparent 1px,
                        transparent 40px
                    ), repeating-linear-gradient(
                        -45deg,
                        #004e59 0px,
                        #004e59 1px,
                        transparent 1px,
                        transparent 40px
                    )`,
                }}
            />

            <div className="container mx-auto px-4 max-w-6xl relative">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <p
                        className="tracking-[0.35em] text-xs uppercase mb-4"
                        style={{ color: "#c9a84c", fontFamily: "'Georgia', serif", letterSpacing: "0.35em" }}
                    >
                        Curated Accommodations
                    </p>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl text-center tracking-widest"
                        style={{
                            color: "#004e59",
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontWeight: 400,
                            lineHeight: 1.15,
                        }}
                    >
                        MAHARAJA'S EXPRESS
                    </h2>
                    <h3
                        className="text-xl md:text-2xl tracking-[0.5em] mt-2"
                        style={{
                            color: "#006e76",
                            fontFamily: "'Georgia', serif",
                            fontWeight: 300,
                            letterSpacing: "0.5em",
                        }}
                    >
                        CABINS & SUITES
                    </h3>
                    <DiamondDivider />
                    <p
                        className="mt-6 text-sm tracking-wider max-w-xl mx-auto"
                        style={{ color: "#5a6e6f", fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.8 }}
                    >
                        Each cabin is a sanctuary of refined comfort, designed to capture the golden era of royal rail travel
                    </p>
                </div>

                {/* Cabin Cards */}
                <div className="flex flex-col gap-16">
                    {CABIN_DATA.map((cabin, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                                transform: hoveredCard === index ? "translateY(-4px)" : "translateY(0)",
                                boxShadow: hoveredCard === index
                                    ? "0 32px 80px rgba(0,78,89,0.18), 0 0 0 1px rgba(201,168,76,0.2)"
                                    : "0 8px 40px rgba(0,78,89,0.10)",
                            }}
                            className="overflow-hidden"
                        >
                            {/* Gold top border */}
                            <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c9a84c 20%, #c9a84c 80%, transparent)" }} />

                            {/* Images */}
                            <div
                                className={`grid gap-0.5 ${cabin.layout === "split" ? "grid-cols-2" : "grid-cols-3"}`}
                                style={{ background: "#004e59" }}
                            >
                                {cabin.images.map((img, i) => (
                                    <div
                                        key={i}
                                        className="relative overflow-hidden"
                                        style={{ aspectRatio: "4/3" }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${cabin.name} view ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            style={{
                                                transition: "transform 0.7s ease",
                                                transform: hoveredCard === index ? "scale(1.04)" : "scale(1)",
                                            }}
                                            unoptimized
                                        />
                                        {/* Subtle vignette on images */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: "linear-gradient(to bottom, transparent 60%, rgba(0,78,89,0.25))",
                                                pointerEvents: "none",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Content area */}
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #006e76 0%, #004e59 100%)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Decorative corner ornament top-right */}
                                <div
                                    className="absolute top-0 right-0 opacity-10"
                                    style={{
                                        width: "180px",
                                        height: "180px",
                                        borderLeft: "1px solid #c9a84c",
                                        borderBottom: "1px solid #c9a84c",
                                        borderRadius: "0 0 0 100%",
                                    }}
                                />
                                {/* Decorative corner ornament bottom-left */}
                                <div
                                    className="absolute bottom-0 left-0 opacity-10"
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        borderRight: "1px solid #c9a84c",
                                        borderTop: "1px solid #c9a84c",
                                        borderRadius: "0 100% 0 0",
                                    }}
                                />

                                <div className="px-8 md:px-12 py-10 relative z-10">
                                    {/* Cabin name + size */}
                                    <div className="text-center mb-8">
                                        <h3
                                            className="text-3xl md:text-4xl"
                                            style={{
                                                color: "#ffffff",
                                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                                fontWeight: 400,
                                                letterSpacing: "0.12em",
                                            }}
                                        >
                                            {cabin.name}
                                        </h3>
                                        <p
                                            className="mt-1.5 tracking-widest text-xs"
                                            style={{
                                                color: "#c9a84c",
                                                fontFamily: "Georgia, serif",
                                                letterSpacing: "0.2em",
                                            }}
                                        >
                                            {cabin.size.replace(/[()]/g, "").toUpperCase()}
                                        </p>
                                        {/* Gold underline */}
                                        <div className="flex justify-center mt-4">
                                            <div style={{ width: "48px", height: "1px", background: "#c9a84c" }} />
                                        </div>
                                    </div>

                                    {/* Features grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5 max-w-3xl mx-auto">
                                        {cabin.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-3">
                                                {/* Gold diamond bullet */}
                                                <span
                                                    className="flex-shrink-0 mt-1.5"
                                                    style={{
                                                        width: "5px",
                                                        height: "5px",
                                                        background: "#c9a84c",
                                                        transform: "rotate(45deg)",
                                                        display: "block",
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        color: "rgba(255,255,255,0.88)",
                                                        fontFamily: "Georgia, serif",
                                                        fontSize: "14.5px",
                                                        lineHeight: 1.65,
                                                        letterSpacing: "0.02em",
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Gold bottom border */}
                                <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6) 30%, rgba(201,168,76,0.6) 70%, transparent)" }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer ornament */}
                <div className="mt-20 flex flex-col items-center gap-4">
                    <DiamondDivider />
                    <p
                        className="text-xs tracking-[0.3em] uppercase"
                        style={{ color: "#8a9e9f", fontFamily: "Georgia, serif" }}
                    >
                        The Palace on Wheels
                    </p>
                </div>
            </div>
        </section>
    );
}