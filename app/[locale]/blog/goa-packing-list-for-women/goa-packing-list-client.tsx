import { HeroSection } from "@/components/hero-section";
import type { ReactNode } from "react";
import Image from "next/image";
import { getContent } from "./content";

const list = (items: string[]) => (
  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">{title}</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed text-lg">{children}</div>
    </section>
  );
}

export default function GoaPackingListClient({ locale = "en" }: { locale?: string }) {
  const { ui, sections } = getContent(locale);

  return (
    <>
      <HeroSection title={ui.title} backgroundQuery="Goa-hero" />
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-800/80 font-medium mb-8">
            <span>{ui.date}</span><span>{ui.category}</span><span>{ui.team}</span>
          </div>

          {sections.map((section, i) =>
            section.img ? (
              <figure key={i} className="mb-12 mx-auto max-w-[360px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={section.img}
                  alt={section.alt ?? ""}
                  width={section.img.includes("beachwear") ? 1365 : 1638}
                  height={2048}
                  unoptimized
                  className="h-auto w-full"
                />
              </figure>
            ) : (
              <Section key={i} title={section.title as string}>
                {section.blocks?.map((block, j) =>
                  block.p ? (
                    <p key={j}>{block.p}</p>
                  ) : block.h3 ? (
                    <h3 key={j} className="font-serif text-xl font-bold text-emerald-950">{block.h3}</h3>
                  ) : (
                    <div key={j}>{list(block.ul ?? [])}</div>
                  )
                )}
              </Section>
            )
          )}
        </div>
      </article>
    </>
  );
}
