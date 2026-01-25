"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import type { LegalSection, LegalContentBlock } from "@/lib/legalPages";

interface LegalPageContentProps {
    sectionTitle: string;
    lastUpdated: string;
    sections: LegalSection[];
    contactInfo: {
        address: string;
        phone: string;
        email: string;
    };
}

const LegalPageContent: React.FC<LegalPageContentProps> = ({
    sectionTitle,
    lastUpdated,
    sections,
    contactInfo,
}) => {
    const renderContentBlock = (block: LegalContentBlock, index: number) => {
        if (block.type === "paragraph") {
            return (
                <p key={index} className="text-slate-600 leading-relaxed mb-6">
                    {block.text}
                </p>
            );
        }

        if (block.type === "list") {
            return (
                <ul key={index} className="list-none pl-0 mb-6">
                    {block.items.map((item, idx) => (
                        <li
                            key={idx}
                            className="relative pl-8 mb-4 text-slate-600 leading-relaxed before:content-['•'] before:absolute before:left-2 before:text-teal-600 before:font-bold before:text-xl"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            );
        }

        if (block.type === "list-bold") {
            return (
                <ul key={index} className="list-none pl-0 mb-6">
                    {block.items.map((item, idx) => (
                        <li
                            key={idx}
                            className="relative pl-8 mb-4 text-slate-600 leading-relaxed before:content-['•'] before:absolute before:left-2 before:text-teal-600 before:font-bold before:text-xl"
                        >
                            <strong className="text-slate-900 font-semibold">
                                {item.label}
                            </strong>{" "}
                            {item.text}
                        </li>
                    ))}
                </ul>
            );
        }

        return null;
    };

    return (
        <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-4xl mx-auto">
                {/* Section Header - Left Aligned */}
                <div className="mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        {sectionTitle}
                    </h2>
                    {/* Solid amber underline like HTML */}
                    <div className="w-16 h-1 bg-amber-400 rounded-full mb-3" />
                    <p className="text-slate-500">{lastUpdated}</p>
                </div>

                {/* Policy Content */}
                <div className="space-y-8">
                    {sections.map((section, sectionIndex) => {
                        const isContactSection = section.id === "contact";

                        return (
                            <div
                                key={sectionIndex}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
                            >
                                {/* Dark Navy Header - Full Width, No Border */}
                                <div className="bg-[#1a2332] px-6 py-4">
                                    <h3 className="font-serif text-lg md:text-xl font-semibold text-white">
                                        {section.title}
                                    </h3>
                                </div>

                                {/* Content Area with Teal Left Border */}
                                <div className="p-6 md:p-8 border-l-4 border-teal-600 ml-0">
                                    {section.content.map((block, blockIndex) =>
                                        renderContentBlock(block, blockIndex)
                                    )}

                                    {/* Contact Info Box */}
                                    {isContactSection && (
                                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-amber-400 mt-6">
                                            <p className="flex items-center text-slate-600 mb-4">
                                                <MapPin className="text-teal-600 mr-4 w-5 h-5 flex-shrink-0" />
                                                <span>{contactInfo.address}</span>
                                            </p>
                                            <p className="flex items-center text-slate-600 mb-4">
                                                <Phone className="text-teal-600 mr-4 w-5 h-5 flex-shrink-0" />
                                                <span>{contactInfo.phone}</span>
                                            </p>
                                            <p className="flex items-center text-slate-600">
                                                <Mail className="text-teal-600 mr-4 w-5 h-5 flex-shrink-0" />
                                                <span>{contactInfo.email}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LegalPageContent;
