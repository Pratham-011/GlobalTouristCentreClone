"use client";

import { teamMembers } from "./about";
import { TeamMemberCard } from "@/components/team-member-card";
import { useI18n } from "@/lib/i18n/context";

export function AboutTeam() {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="mb-16">
          <div className="relative inline-block">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              {t.about.meetTeam}
            </h1>

            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-[3px] w-20 rounded-full
                bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </div>
          <p className="text-gray-600 text-lg mt-4">
            {t.about.meetTeamSubtitle}
          </p>
        </div>
        <div className="relative">
          <div
            className="
    flex gap-6 overflow-x-auto pb-4
    snap-x snap-mandatory
    sm:grid sm:grid-cols-2 sm:overflow-visible
    lg:grid-cols-3
    xl:grid-cols-3
    sm:gap-8
    scrollbar-hide
  "
          >
            {teamMembers.map((member) => (
              <div key={member.name} className="snap-center shrink-0 sm:shrink">
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>

          {/* Swipe indicator (mobile only) */}
          <div className="mt-4 flex items-center justify-center gap-2 md:hidden text-sm text-gray-500">
            <span>Swipe to see more</span>
            <span className="animate-pulse">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
