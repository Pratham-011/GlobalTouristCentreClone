"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CabinImage {
    src: string;
    alt: string;
}

interface Cabin {
    name: string;
    size: string;
    images: string[];
    layout: "split" | "three";
    features: string[];
}

interface CabinsSectionProps {
    cabins: readonly Cabin[];
    eyebrow?: string;
    title?: string;
    subtitle?: string;
}

function OrnamentDivider() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "10px 0" }}>
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

function CabinCard({ cabin, index }: { cabin: Cabin; index: number }) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <div
            style={{
                animation: `fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both`,
                animationDelay: `${index * 0.12}s`,
            }}
        >
            <div style={{
                position: "relative",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 20px 80px rgba(0,60,70,0.18), 0 4px 16px rgba(0,0,0,0.12), inset 0 1px 0 rgba(201,168,76,0.15)",
                overflow: "hidden",
                background: "#003d47",
            }}>
                <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />

                <div style={{
                    display: "grid",
                    gridTemplateColumns: cabin.layout === "split" ? "1fr 1fr" : "1fr 1fr 1fr",
                    gap: "3px",
                    padding: "12px 12px 0",
                    background: "#003d47",
                }}>
                    {cabin.images && Array.isArray(cabin.images) && cabin.images.map((img, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", cursor: "zoom-in" }}
                        >
                            <Image
                                src={img}
                                alt={`${cabin.name} view ${i + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                                style={{
                                    transform: hoveredIdx === i ? "scale(1.07)" : "scale(1)",
                                    filter: hoveredIdx === i ? "brightness(1.1) saturate(1.15)" : "brightness(1) saturate(1.05)",
                                    transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease",
                                }}
                            />
                            {hoveredIdx === i && (
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

                <div style={{
                    background: "linear-gradient(170deg, #006e76 0%, #00606a 40%, #004e59 100%)",
                    padding: "22px 36px 26px",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 65%)",
                    }} />
                    <div style={{
                        position: "absolute", top: 0, right: 0, opacity: 0.1,
                        width: "180px", height: "180px",
                        borderLeft: "1px solid #c9a84c",
                        borderBottom: "1px solid #c9a84c",
                        borderRadius: "0 0 0 100%",
                    }} />
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, opacity: 0.1,
                        width: "120px", height: "120px",
                        borderRight: "1px solid #c9a84c",
                        borderTop: "1px solid #c9a84c",
                        borderRadius: "0 100% 0 0",
                    }} />

                    <div style={{ textAlign: "center", position: "relative" }}>
                        <p style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "1rem",
                            letterSpacing: "0.35em",
                            color: "#ffc628ff",
                            textTransform: "uppercase",
                            margin: "0 0 5px",
                            fontStyle: "italic",
                        }}>
                            {cabin.size}
                        </p>
                        <h3 style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)",
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

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                        gap: "0 56px",
                        maxWidth: "880px",
                        margin: "0 auto",
                    }}>
                        {cabin.features && Array.isArray(cabin.features) && cabin.features.map((feature, fIndex) => (
                            <div key={fIndex} style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "10px",
                                padding: "6px 0",
                                borderBottom: "1px solid rgba(201,168,76,0.1)",
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: "clamp(0.82rem, 1.2vw, 0.95rem)",
                                color: "rgba(245,237,218,0.88)",
                                letterSpacing: "0.03em",
                                lineHeight: 1.4,
                            }}>
                                <span style={{ color: "#c9a84c", fontSize: "1rem", marginTop: "6px", flexShrink: 0 }}>◆</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />
            </div>
        </div>
    );
}

export function CabinsSection({
    cabins,
    eyebrow = "Aboard the Golden Journey",
    title = "Maharaja's Express",
    subtitle = "Private Cabins & Suites",
}: CabinsSectionProps) {
    if (!Array.isArray(cabins)) {
        console.error("CABINS IS NOT AN ARRAY in CabinsSection:", cabins);
        return null;
    }

    if (cabins.length === 0) return null;

    return (
        <section
            style={{
                background: "linear-gradient(180deg, #eee9d8 0%, #f4f1e9 30%, #ede8d8 70%, #f4f1e9 100%)",
                padding: "88px 0 108px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Texture overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' x='0' y='0' fill='%23004e59' opacity='0.08'/%3E%3Crect width='1' height='1' x='2' y='2' fill='%23004e59' opacity='0.08'/%3E%3C/svg%3E")`,
            }} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "0.82rem",
                        letterSpacing: "0.45em",
                        color: "#c9a84c",
                        textTransform: "uppercase",
                        margin: "0 0 12px",
                    }}>
                        {eyebrow}
                    </p>

                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 300,
                        letterSpacing: "0.2em",
                        color: "#004e59",
                        textTransform: "uppercase",
                        margin: "0 0 6px",
                        lineHeight: 1,
                    }}>
                        {title}
                    </h2>

                    <p style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)",
                        fontStyle: "italic",
                        color: "#7a9090",
                        margin: 0,
                    }}>
                        {subtitle}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginTop: "24px" }}>
                        <div style={{ height: "1px", flex: 1, maxWidth: "100px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
                        <div style={{ width: "8px", height: "8px", border: "1px solid #c9a84c", transform: "rotate(45deg)", opacity: 0.6 }} />
                        <div style={{ height: "1px", flex: 1, maxWidth: "100px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                    {cabins.map((cabin, index) => (
                        <CabinCard key={index} cabin={cabin} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}