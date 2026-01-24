"use client";

import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "@/components/hero-section";
import { Check, Plane, Send } from "lucide-react";

export default function FlightBookingPage() {
  const { t } = useI18n();
  const page = t.servicePages.flightBooking;

  const form = page as any;

  const services = [
    page.service1,
    page.service2,
    page.service3,
    page.service4,
    page.service5,
    page.service6,
  ];

  const faqs = [
    {
      question: page.faq1Question,
      answer: page.faq1Answer,
    },
    {
      question: page.faq2Question,
      answer: page.faq2Answer,
    },
    {
      question: page.faq3Question,
      answer: page.faq3Answer,
    },
    {
      question: page.faq4Question,
      answer: page.faq4Answer,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const message = `
✈️ Flight Enquiry

Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}

Trip Type: ${formData.get("tripType")}
From: ${formData.get("from")}
To: ${formData.get("to")}

Departure Date: ${formData.get("departureDate")}
Return Date: ${formData.get("returnDate") || "N/A"}

Passengers:
Adults: ${formData.get("adults")}
Children: ${formData.get("children") || 0}
Infants: ${formData.get("infants") || 0}

Preferred Class: ${formData.get("preferredClass") || "Any"}
Preferred Airlines: ${formData.get("preferredAirlines") || "No preference"}

Message:
${formData.get("message") || "—"}
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
        backgroundQuery="flight-booking-hero"
      />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/services/flight-booking-about.webp"
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
                  {page.servicesTitle}
                </h3>
                <ul className="space-y-3">
                  {services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
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
                <Plane className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-xl text-emerald-950">
                {page.formHeader}
              </h3>
              <p className="text-gray-500 mt-2">{page.formSubtitle}</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.yourName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={form.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.tripType}
                  </label>
                  <select
                    name="tripType"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">{form.tripTypePlaceholder}</option>
                    <option value="one-way">One Way</option>
                    <option value="round-trip">Round Trip</option>
                    <option value="multi-city">Multi-city</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.from}
                  </label>
                  <input
                    type="text"
                    name="from"
                    placeholder={form.fromPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.to}
                  </label>
                  <input
                    type="text"
                    name="to"
                    placeholder={form.toPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.departureDate}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.returnDate}
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    name="departureDate"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.adults}
                  </label>
                  <input
                    type="number"
                    name="adults"
                    min="1"
                    placeholder="1"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.children}
                  </label>
                  <input
                    type="number"
                    name="children"
                    min="0"
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.infants}
                  </label>
                  <input
                    type="number"
                    name="infants"
                    min="0"
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.preferredClass}
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white">
                    <option value="">{form.preferredClassPlaceholder}</option>
                    <option value="economy">Economy</option>
                    <option value="premium-economy">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {form.preferredAirlines}
                  </label>
                  <input
                    type="text"
                    placeholder={form.preferredAirlinesPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {form.message}
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder={form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
              {page.faqTitle}
            </h2>
            <p className="text-gray-600 text-lg">{page.faqDesc}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-lg text-emerald-950 pr-8">
                      {faq.question}
                    </h3>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        className="w-6 h-6 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-200">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
