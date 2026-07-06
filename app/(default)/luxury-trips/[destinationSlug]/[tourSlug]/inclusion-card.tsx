"use client";

import {
  Hotel,
  Utensils,
  Car,
  UserRound,
  Ship,
  Ticket,
  Bell,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

// Mapping your FontAwesome strings from JSON to Lucide Components
const iconMap: Record<string, LucideIcon> = {
  "fas fa-hotel": Hotel,
  "fas fa-utensils": Utensils,
  "fas fa-car": Car,
  "fas fa-user-tie": UserRound,
  "fas fa-ship": Ship,
  "fas fa-ticket-alt": Ticket,
  "fas fa-concierge-bell": Bell,
  "fas fa-shield-alt": ShieldCheck,
};

interface InclusionCardProps {
  iconString: string;
  title: string;
  description: string;
}

export function InclusionCard({
  iconString,
  title,
  description,
}: InclusionCardProps) {
  const Icon = iconMap[iconString] || ShieldCheck;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Icon Circle */}
      <div className="mb-6 w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center shadow-inner">
        <Icon className="w-8 h-8 text-white stroke-[1.5]" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-serif font-bold text-[#1a2238] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  );
}
