"use client";

import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "@/components/hero-section";
import {
    Check,
    Send,
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Clock,
    Users,
    IndianRupee,
    ClipboardList,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function CustomizeTripPackagePage() {
    const { t } = useI18n();
    const page = t.servicePages.customizeTripPackage;
    // Fallback for form translations if not yet updated in other languages
    const form = t.servicePages.form || {};

    const benefits = [
        page.benefit1,
        page.benefit2,
        page.benefit3,
        page.benefit4,
        page.benefit5,
        page.benefit6,
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { question: page.faq1Question, answer: page.faq1Answer },
        { question: page.faq2Question, answer: page.faq2Answer },
        { question: page.faq3Question, answer: page.faq3Answer },
        { question: page.faq4Question, answer: page.faq4Answer },
    ];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const message = `
New Travel Enquiry 🌍✈️

Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}

Destination(s): ${formData.get("destination")}
Travel Dates: ${formData.get("dates")}
Duration: ${formData.get("duration")}
Travelers: ${formData.get("travelers")}
Budget: ${formData.get("budget")}

Special Requirements:
${formData.get("special") || "None"}
`;

      const whatsappUrl = `https://wa.me/919067972295?text=${encodeURIComponent(
        message.trim()
      )}`;

      window.open(whatsappUrl, "_blank");
    };


    return (
      <>
        <HeroSection
          title={page.heroTitle}
          backgroundQuery="custom-tour-hero"
        />

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/assets/services/custom-tour-about.webp"
                  alt={page.aboutTitle}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-6">
                  {page.aboutTitle}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {page.aboutDesc}
                </p>
                <div>
                  <h3 className="font-semibold text-xl text-emerald-900 mb-4">
                    {page.whyChooseTitle}
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
                {page.formTitle}
              </h2>
              <p className="text-gray-600 text-lg">{page.formDesc}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-xl text-emerald-950">
                  {page.formHeader}
                </h3>
                <p className="text-gray-500 mt-2">{page.formSubtitle}</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name & Email - Full Width on Mobile, Half on Desktop */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.yourName || "Your Name*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder={form.namePlaceholder || "Full name"}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.email || "Email*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder={
                          form.emailPlaceholder || "Your email address"
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Destination */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.phone || "Phone Number*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder={form.phonePlaceholder || "Phone number"}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.destination || "Destination(s) of Interest*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="destination"
                        placeholder={
                          form.destinationPlaceholder ||
                          "Countries/cities you want to visit"
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Dates & Duration */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {page.travelDates || "Preferred Travel Dates"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="dates"
                        placeholder={
                          page.datesPlaceholder || "Flexible or specific dates"
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {page.durationLabel || "Trip Duration*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="duration"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition appearance-none bg-white"
                        required
                      >
                        <option value="">
                          {page.durationPlaceholder || "Select Duration"}
                        </option>
                        <option value="3-5">
                          {page.duration3to5 || "3-5 Days"}
                        </option>
                        <option value="6-8">
                          {page.duration6to8 || "6-8 Days"}
                        </option>
                        <option value="9-12">
                          {page.duration9to12 || "9-12 Days"}
                        </option>
                        <option value="13+">
                          {page.duration13plus || "13+ Days"}
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Travelers & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {page.travelersLabel || "Number of Travelers*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        min="1"
                        name="travelers"
                        placeholder={
                          page.travelersPlaceholder || "Adults and children"
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {page.budgetLabel || "Approximate Budget (per person)"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IndianRupee className="h-5 w-5 text-gray-400" />
                      </div>
                      <select name="budget"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition appearance-none bg-white">
                        <option value="">
                          {page.budgetPlaceholder || "Select Budget Range"}
                        </option>
                        <option value="economy">
                          {page.budgetEconomy || "Economy (₹15,000 - ₹30,000)"}
                        </option>
                        <option value="mid-range">
                          {page.budgetMid || "Mid-Range (₹30,000 - ₹60,000)"}
                        </option>
                        <option value="luxury">
                          {page.budgetLuxury || "Luxury (₹60,000+)"}
                        </option>
                        <option value="flexible">
                          {page.budgetFlexible || "Flexible/Not Sure"}
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {page.specialLabel || "Special Requirements"}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <ClipboardList className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                    name="special"
                      rows={4}
                      placeholder={
                        page.specialPlaceholder ||
                        "Dietary needs, accessibility requirements, special occasions, etc."
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {page.submitButton || "Get Custom Itinerary"}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  {page.privacyNote ||
                    "We respect your privacy. Your information will not be shared."}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
                {page.faqTitle || "Custom Tour FAQs"}
              </h2>
              <p className="text-gray-600 text-lg">
                {page.faqSubtitle ||
                  "Answers to common questions about our customized tour packages."}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-emerald-950 text-lg pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`transform transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openFaq === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}
