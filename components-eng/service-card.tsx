"use client";

import { useI18n } from "@/lib/i18n/context";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components-eng/ui/card";
import { Button } from "@/components-eng/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  locale?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  locale,
}: ServiceCardProps) {
  const { t } = useI18n();

  return (
    <Card
      className="group relative text-center transition-all duration-300 ease-in-out border-2 border-transparent 
                 hover:-translate-y-2 hover:shadow-2xl hover:border-[#F6CF5F] overflow-hidden
                 w-full max-w-[380px] min-h-[480px] flex flex-col justify-center bg-white"
    >
      <CardContent className="p-8 flex flex-col items-center justify-between h-full">
        {/* Top Section: Icon and Text */}
        <div className="flex flex-col items-center">
          {/* Icon with Hover Border */}
          <div
            className="w-20 h-20 mb-8 rounded-full bg-[#F0FDF4] flex items-center justify-center 
                       transition-all duration-300 border-2 border-transparent group-hover:border-[#F6CF5F]"
            aria-hidden="true"
          >
            <Icon className="w-10 h-10 text-[#14B8A6]" />
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-[#0F172A] mb-4 text-2xl leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#475467] text-base leading-relaxed px-2">
            {description}
          </p>
        </div>

        {/* Bottom Section: Button */}
        <div className="mt-8">
          <Link
            href={`/${link}`}
            aria-label={`Read more about ${title}`}
          >
            <Button
              className="rounded-full bg-[#F6CF5F] hover:bg-[#f4c43f] text-[#1D2939] font-bold px-10 h-12 
                         transition-transform duration-200 hover:-translate-y-1 active:scale-95 shadow-md border-none"
            >
              {t.services.readMore}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
