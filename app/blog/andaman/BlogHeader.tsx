"use client";

import { HeroSection } from "@/components/hero-section";
import { Calendar, Tag, User } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const BlogPostHeader = () => {
  const { t } = useI18n();
  return (
    <>
      <HeroSection
        title={t.blogAndaman.heroTitle}
        backgroundQuery="Andaman-hero"
      />
      <header className="mb-10 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-emerald-800/80 font-medium mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> {t.blog.julyDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag className="w-4 h-4" /> {t.blog.photography}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" /> {t.blog.globalTeam}
          </span>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p className="font-serif text-xl sm:text-2xl text-emerald-950 italic">
            "{t.blogAndaman.introQuote}"
          </p>
          <p>{t.blogAndaman.introParagraph}</p>
        </div>
      </header>
    </>
  );
};

export default BlogPostHeader;
