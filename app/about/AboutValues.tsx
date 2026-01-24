"use client";
import { useI18n } from "@/lib/i18n/context";
import { Card, CardContent } from "@/components/ui/card";

export function AboutValues() {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          { title: t.about.visionTitle, desc: t.about.visionDesc },
          { title: t.about.missionTitle, desc: t.about.missionDesc },
        ].map((item, i) => (
          <Card
            key={i}
            className="border-t-4 border-t-[#f8d56b] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-lg overflow-hidden"
          >
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </CardContent>
          </Card>
        ))}

        <Card className="border-t-4 border-t-[#f8d56b] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-lg overflow-hidden">
          <CardContent className="p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
              {t.about.valuesTitle}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                t.about.integrity,
                t.about.passion,
                t.about.innovation,
                t.about.responsibility,
              ].map((v, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#f8d56b] mr-2 font-bold">•</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
