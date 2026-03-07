"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Star } from "lucide-react";

interface AccommodationCardProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
    location: string;
    description: string;
    rating: number;
    index?: number;
}

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

export function AccommodationCard({
    imageSrc,
    imageAlt,
    name,
    location,
    description,
    rating,
    index = 0,
}: AccommodationCardProps) {
    const [hovered, setHovered] = useState(false);

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
                    boxShadow: hovered
                        ? "0 32px 100px rgba(0,60,70,0.28), 0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(201,168,76,0.2)"
                        : "0 20px 80px rgba(0,60,70,0.18), 0 4px 16px rgba(0,0,0,0.12), inset 0 1px 0 rgba(201,168,76,0.15)",
                    overflow: "hidden",
                    background: "#003d47",
                    transition: "box-shadow 0.5s ease, transform 0.5s ease",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Top gold rule */}
                <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)", flexShrink: 0 }} />

                {/* Image */}
                <div style={{ padding: "12px 12px 0", background: "#003d47", flexShrink: 0 }}>
                    <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", cursor: "zoom-in" }}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            unoptimized
                            style={{
                                transform: hovered ? "scale(1.07)" : "scale(1)",
                                filter: hovered ? "brightness(1.08) saturate(1.1)" : "brightness(0.88) saturate(0.95)",
                                transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease",
                            }}
                        />

                        {/* Star badge overlay */}
                        <div style={{
                            position: "absolute", bottom: "12px", right: "12px",
                            display: "flex", alignItems: "center", gap: "3px",
                            padding: "5px 10px",
                            background: "rgba(0,30,38,0.82)",
                            border: "1px solid rgba(201,168,76,0.5)",
                            backdropFilter: "blur(4px)",
                            zIndex: 2,
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} style={{
                                    width: "11px", height: "11px",
                                    fill: i < rating ? "#c9a84c" : "rgba(255,255,255,0.15)",
                                    color: i < rating ? "#c9a84c" : "rgba(255,255,255,0.15)",
                                }} />
                            ))}
                        </div>

                        {/* Gold corner accents on hover */}
                        {hovered && (
                            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
                                <div style={{ position: "absolute", top: 0, left: 0, width: 20, height: 20, borderTop: "1.5px solid #c9a84c", borderLeft: "1.5px solid #c9a84c" }} />
                                <div style={{ position: "absolute", top: 0, right: 0, width: 20, height: 20, borderTop: "1.5px solid #c9a84c", borderRight: "1.5px solid #c9a84c" }} />
                                <div style={{ position: "absolute", bottom: 0, left: 0, width: 20, height: 20, borderBottom: "1.5px solid #c9a84c", borderLeft: "1.5px solid #c9a84c" }} />
                                <div style={{ position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderBottom: "1.5px solid #c9a84c", borderRight: "1.5px solid #c9a84c" }} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Content area */}
                <div style={{
                    background: "linear-gradient(170deg, #006e76 0%, #00606a 40%, #004e59 100%)",
                    padding: "28px 32px 32px",
                    position: "relative",
                    overflow: "hidden",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {/* Ambient glow */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 65%)",
                    }} />

                    {/* Corner ornament top-right */}
                    <div style={{
                        position: "absolute", top: 0, right: 0, opacity: 0.1,
                        width: "140px", height: "140px",
                        borderLeft: "1px solid #c9a84c",
                        borderBottom: "1px solid #c9a84c",
                        borderRadius: "0 0 0 100%",
                    }} />

                    {/* Corner ornament bottom-left */}
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, opacity: 0.1,
                        width: "90px", height: "90px",
                        borderRight: "1px solid #c9a84c",
                        borderTop: "1px solid #c9a84c",
                        borderRadius: "0 100% 0 0",
                    }} />

                    <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                        {/* Hotel name + location */}
                        <div style={{ textAlign: "center" }}>
                            <h3 style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                                fontWeight: 300,
                                letterSpacing: "0.2em",
                                color: "#f5edda",
                                textTransform: "uppercase",
                                margin: 0,
                                lineHeight: 1.1,
                            }}>
                                {name}
                            </h3>

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "10px" }}>
                                <MapPin style={{ width: "12px", height: "12px", color: "#c9a84c", flexShrink: 0 }} />
                                <p style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.32em",
                                    color: "#c9a84c",
                                    textTransform: "uppercase",
                                    margin: 0,
                                    fontStyle: "italic",
                                }}>
                                    {location}
                                </p>
                            </div>
                        </div>

                        <OrnamentDivider />

                        {/* Description */}
                        <p style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                            color: "rgba(245,237,218,0.82)",
                            letterSpacing: "0.03em",
                            lineHeight: 1.8,
                            textAlign: "center",
                            margin: "0 auto",
                            flex: 1,
                        }}>
                            {description}
                        </p>
                    </div>
                </div>

                {/* Bottom gold rule */}
                <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)", flexShrink: 0 }} />
            </div>
        </div>
    );
}