"use client";

import React from "react";
import RelatedTripCard from "./RelatedTripCard";
import { useI18n } from "@/lib/i18n/context";

const RelatedTrips: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="pt-8 border-t border-gray-100">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-8">
        {t.blogKerala.youMightAlsoLike}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RelatedTripCard
          title={t.blog.andamanTitle}
          desc={t.blog.andamanSubtitle}
          image="/assets/destinations/Thumbnails/Andaman.webp"
          link="andaman"
        />

        <RelatedTripCard
          title={t.blog.comingSoonTitle}
          desc={t.blog.comingSoonSubtitle}
          image="/assets/destinations/Thumbnails/Sikkim.webp"
          isComingSoon
        />
      </div>
    </section>
  );
};

export default RelatedTrips;
