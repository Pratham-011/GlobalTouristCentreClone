"use client";

import RelatedTripCard from "./RelatedTripCard";
import { useI18n } from "@/lib/i18n/context";

const RelatedTrips = () => {
  const { t } = useI18n();

  return (
    <section className="pt-8 border-t">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">
        {t.blogAndaman.youMightAlsoLike}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RelatedTripCard
          title={t.blog.keralaTitle}
          desc={t.blog.keralaSubtitle}
          image="/assets/destinations/Thumbnails/Kerala.webp"
          link="kerala"
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
