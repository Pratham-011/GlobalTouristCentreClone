"use client";

import { LucideIcon } from "lucide-react";

interface LuxuryFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function LuxuryFeatureCard({
  icon: Icon,
  title,
  description,
}: LuxuryFeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Icon Container with Gold Coloring */}
      <div className="mb-6 p-4 rounded-full bg-slate-50">
        <Icon className="w-12 h-12 text-[#d4af37] stroke-[1.5]" />
      </div>

      {/* Title with Serif Font */}
      <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
}
