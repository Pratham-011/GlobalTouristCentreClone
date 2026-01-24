"use client";

import { Calendar, Tag, User } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { useI18n } from "@/lib/i18n/context";

const BlogMetaHeader = () => {
  const { t } = useI18n();
  return (
    <>
      <HeroSection
        title={t.blogKerala.heroTitle}
        subtitle={t.blogKerala.heroSubtitle}
        backgroundQuery="Kerala-hero"
      />
      <div className="flex flex-wrap gap-4 text-sm text-emerald-800/80 mb-8">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" /> {t.blog.juneDate}
        </span>
        <span className="flex items-center gap-1.5">
          <Tag className="w-4 h-4" /> {t.blog.groupTours}
        </span>
        <span className="flex items-center gap-1.5">
          <User className="w-4 h-4" /> {t.blog.globalTeam}
        </span>
      </div>
    </>
  );
};

export default BlogMetaHeader;
