"use client"

import React from "react";
import { useI18n } from "@/lib/i18n/context";

const ContactTitle = () => {
  const { t } = useI18n();
  return (
    <div className="mb-16">
      <div className="relative inline-block">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
          {t.contact.mainTitle}
        </h1>

        <span
          aria-hidden="true"
          className="absolute left-0 bottom-0 h-[3px] w-20 rounded-full
                    bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
        />
      </div>

      <p className="text-gray-600 text-lg mt-4">{t.contact.mainSubtitle}</p>
    </div>
  );
};

export default ContactTitle;
