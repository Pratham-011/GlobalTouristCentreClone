import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="my-12 ">
      <div className="relative inline-block">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          {title}
        </h2>

        {/* Gradient underline */}
        <span
          aria-hidden="true"
          className="
            absolute left-0 -bottom-1
            h-[4px] w-20 rounded-full
            bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
          "
        />
      </div>

      {subtitle && <p className="text-slate-600 w-full mt-4">{subtitle}</p>}
    </div>
  );
}
