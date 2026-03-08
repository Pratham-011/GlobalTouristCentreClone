"use client";

interface InclusionItem {
    icon: string;
    title: string;
    description: string;
}

interface ExcursionItem {
    title: string;
    description: string;
}

interface InclusionsSectionProps {
    data: readonly InclusionItem[];
    excursions: readonly ExcursionItem[];
}

function OrnamentDivider() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "20px 0" }}>
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

export function InclusionsSection({ data, excursions }: InclusionsSectionProps) {
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
            {/* Linen texture */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' x='0' y='0' fill='%23004e59' opacity='0.08'/%3E%3Crect width='1' height='1' x='2' y='2' fill='%23004e59' opacity='0.08'/%3E%3C/svg%3E")`,
            }} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
            `}</style>

            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 28px", position: "relative" }}>

                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                        What's Covered
                    </p>

                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                        fontWeight: 300,
                        letterSpacing: "0.25em",
                        color: "#004e59",
                        textTransform: "uppercase",
                        margin: "0 0 4px",
                        lineHeight: 1.05,
                    }}>
                        Package Inclusions
                    </h2>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginTop: "20px" }}>
                        <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
                        <svg width="8" height="8" viewBox="0 0 8 8">
                            <rect x="0" y="0" width="8" height="8" fill="#c9a84c" opacity="0.7" transform="rotate(45 4 4)" />
                        </svg>
                        <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
                    </div>
                </div>

                {/* Main Inclusions Panel */}
                <div style={{
                    position: "relative",
                    border: "1px solid rgba(201,168,76,0.25)",
                    boxShadow: "0 20px 80px rgba(0,60,70,0.12)",
                    overflow: "hidden",
                    marginBottom: "40px",
                }}>
                    <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />

                    <div style={{
                        background: "linear-gradient(145deg, #ffffff 0%, #f9f6ef 100%)",
                        padding: "48px 56px",
                        position: "relative",
                        overflow: "hidden",
                    }}>
                        {/* Corner ornament */}
                        <div style={{
                            position: "absolute", top: 0, right: 0, opacity: 0.06,
                            width: "220px", height: "220px",
                            borderLeft: "1px solid #004e59",
                            borderBottom: "1px solid #004e59",
                            borderRadius: "0 0 0 100%",
                        }} />
                        <div style={{
                            position: "absolute", bottom: 0, left: 0, opacity: 0.06,
                            width: "140px", height: "140px",
                            borderRight: "1px solid #004e59",
                            borderTop: "1px solid #004e59",
                            borderRadius: "0 100% 0 0",
                        }} />

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "0 72px",
                            position: "relative",
                            zIndex: 1,
                        }}>
                            {data.map((item, i) => (
                                <div key={i} style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "16px",
                                    padding: "15px 0",
                                    borderBottom: "1px solid rgba(0,78,89,0.07)",
                                }}>
                                    <span style={{
                                        display: "inline-block",
                                        width: "5px", height: "5px",
                                        background: "#c9a84c",
                                        transform: "rotate(45deg)",
                                        flexShrink: 0,
                                        marginTop: "8px",
                                    }} />
                                    <div>
                                        <p style={{
                                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                                            fontSize: "clamp(1rem, 1.5vw, 1.12rem)",
                                            fontWeight: 500,
                                            color: "#004e59",
                                            margin: "0 0 3px",
                                            letterSpacing: "0.05em",
                                            lineHeight: 1.3,
                                        }}>
                                            {item.title}
                                        </p>
                                        {item.description && (
                                            <p style={{
                                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                                fontStyle: "italic",
                                                fontSize: "0.9rem",
                                                color: "#7a9090",
                                                margin: 0,
                                                lineHeight: 1.55,
                                            }}>
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />
                </div>

                {/* Excursions Panel */}
                <div style={{
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(201,168,76,0.25)",
                    boxShadow: "0 20px 80px rgba(0,60,70,0.2)",
                }}>
                    <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />

                    <div style={{
                        background: "linear-gradient(170deg, #006e76 0%, #00606a 40%, #004e59 100%)",
                        padding: "48px 56px",
                        position: "relative",
                        overflow: "hidden",
                    }}>
                        {/* Ambient glow */}
                        <div style={{
                            position: "absolute", inset: 0, pointerEvents: "none",
                            background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)",
                        }} />
                        {/* Corner ornaments */}
                        <div style={{
                            position: "absolute", top: 0, right: 0, opacity: 0.1,
                            width: "200px", height: "200px",
                            borderLeft: "1px solid #c9a84c", borderBottom: "1px solid #c9a84c",
                            borderRadius: "0 0 0 100%",
                        }} />
                        <div style={{
                            position: "absolute", bottom: 0, left: 0, opacity: 0.1,
                            width: "140px", height: "140px",
                            borderRight: "1px solid #c9a84c", borderTop: "1px solid #c9a84c",
                            borderRadius: "0 100% 0 0",
                        }} />

                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                                <p style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: "0.72rem",
                                    letterSpacing: "0.45em",
                                    color: "#c9a84c",
                                    textTransform: "uppercase",
                                    margin: "0 0 10px",
                                }}>
                                    Curated Experiences
                                </p>
                                <h3 style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                                    fontWeight: 300,
                                    letterSpacing: "0.22em",
                                    color: "#f5edda",
                                    textTransform: "uppercase",
                                    margin: 0,
                                    lineHeight: 1,
                                }}>
                                    Shared Excursions
                                </h3>
                                <OrnamentDivider />
                            </div>

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                                gap: "0 72px",
                            }}>
                                {excursions.map((exc, i) => (
                                    <div key={i} style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "16px",
                                        padding: "14px 0",
                                        borderBottom: "1px solid rgba(201,168,76,0.12)",
                                    }}>
                                        <span style={{
                                            color: "#c9a84c",
                                            fontSize: "0.42rem",
                                            marginTop: "9px",
                                            flexShrink: 0,
                                        }}>◆</span>
                                        <div>
                                            <p style={{
                                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                                                fontWeight: 500,
                                                color: "#f5edda",
                                                margin: "0 0 3px",
                                                letterSpacing: "0.05em",
                                                lineHeight: 1.3,
                                            }}>
                                                {exc.title}
                                            </p>
                                            {exc.description && (
                                                <p style={{
                                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                                    fontStyle: "italic",
                                                    fontSize: "0.9rem",
                                                    color: "rgba(245,237,218,0.55)",
                                                    margin: 0,
                                                    lineHeight: 1.55,
                                                }}>
                                                    {exc.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #c9a84c 25%, #f0dfa0 50%, #c9a84c 75%, transparent 100%)" }} />
                </div>
                

            </div>
        </section>
    );
}