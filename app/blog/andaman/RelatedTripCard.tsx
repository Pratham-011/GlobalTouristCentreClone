"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { useParams } from "next/navigation";

type Props = {
  title: string;
  desc: string;
  image: string;
  link?: string;
  isComingSoon?: boolean;
};

const RelatedTripCard = ({ title, desc, image, link, isComingSoon }: Props) => {
  const { t } = useI18n();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col relative">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>

        {!isComingSoon && link ? (
          <Link
            href={`/${locale}/blog/${link}`}
            className="mt-auto inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
          >
            {t.blog.readMore} <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        ) : (
          <span className="text-gray-400 text-sm mt-auto">{t.blog.comingSoon}</span>
        )}
      </div>

      {isComingSoon && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold">
            {t.blog.comingSoon}
          </span>
        </div>
      )}
    </div>
  );
};

export default RelatedTripCard;
