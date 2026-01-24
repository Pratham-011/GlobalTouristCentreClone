"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

const WHATSAPP_NUMBER = "919067972295";

const HomeForm: React.FC = () => {
  const { t,locale } = useI18n();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hello, I would like a travel quote.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
    `.trim();

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#f7f8fb] to-[#e6ebf1] py-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <div className="mb-12">
          <div className="relative inline-block">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              {t.home.formtitle}
            </h2>

            <span
              aria-hidden="true"
              className="
                absolute left-0 -bottom-1
                h-[4px] w-20 rounded-full
                bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
              "
            />
          </div>

          <p className="text-slate-600 max-w-xl mt-4">{t.home.formsubtitle}</p>
        </div>

        {/* FORM */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h3 className="text-xl font-semibold text-center mb-2">
              {t.hero.subtitle}
            </h3>
            <p className="text-slate-600 text-center mb-8 text-sm">
              {t.home.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.form.name}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.form.email}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.form.phone}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              {/* TEAL CTA */}
              <button
                type="submit"
                className="
                  w-full py-4 rounded-full font-semibold
                  bg-teal-600 text-white
                  hover:bg-teal-700
                  transition-all duration-300
                  shadow-md hover:shadow-lg
                "
              >
                {t.form.submit}sitema
              </button>

              <p className="text-center text-xs text-slate-500 mt-4">
                {t.form.privacyNote}{" "}
                <a
                  href={`${locale}/legal/privacy-policy`}
                  className="text-teal-600 hover:underline"
                >
                  {t.form.privacyPolicy}
                </a>{" "}
                {t.form.and}{" "}
                <a
                  href={`${locale}/legal/terms-and-conditions`}
                  className="text-teal-600 hover:underline"
                >
                  {t.form.termsOfUse}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeForm;
