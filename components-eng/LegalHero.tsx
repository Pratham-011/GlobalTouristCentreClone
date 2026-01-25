"use client";

import React from "react";
import { Header } from "@/components-eng/header";

interface LegalHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

const LegalHero: React.FC<LegalHeroProps> = ({ title, subtitle, heroImage }) => {
  return (
    <header
      className="relative h-[60vh] md:h-[60vh] flex items-end bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImage}')`,
      }}
    >
      {/* Navigation Header */}
      <Header />

      {/* Hero Content - Left Aligned */}
      <div className="w-full max-w-7xl mx-auto px-[5%] pb-12 md:pb-16 ">
        <div className="w-full max-w-7xl mx-auto px-[5%] pb-12 md:pb-16">
          <div className="max-w-xl text-left">
            <h1 className="font-serif text-3xl sm:text-3xl md:text-5xl lg:text-[4rem] font-bold text-white mb-3 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LegalHero;
