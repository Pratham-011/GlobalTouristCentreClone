"use client";

import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "@/components/hero-section";
import { Check, User, Phone, Users, MapPin, Calendar, Clock, IndianRupee, ClipboardList, Send } from "lucide-react";

export default function CustomizedGroupTripPage() {
    const { t } = useI18n();
    const page = t.servicePages.groupTrip;
    // Use type assertion or optional chaining to access form properties safely
    const form = page as any;

    const benefits = [
        page.benefit1,
        page.benefit2,
        page.benefit3,
        page.benefit4,
        page.benefit5,
        page.benefit6,
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
New Group Tour Enquiry 🧳👥

Organizer Name: ${formData.get("organizerName")}
Phone: ${formData.get("phone")}

Group Type: ${formData.get("groupType")}
Group Size: ${formData.get("groupSize")}

Destination: ${formData.get("destination")}
Start Date: ${formData.get("startDate")}
Trip Duration (days): ${formData.get("duration")}

Budget: ${formData.get("budget")}

Interests / Notes:
${formData.get("interests") || "Not specified"}
`;

      const whatsappUrl = `https://wa.me/919067972295?text=${encodeURIComponent(
        message.trim()
      )}`;

      window.open(whatsappUrl, "_blank");
    };


    return (
      <>
        <HeroSection title={page.heroTitle} backgroundQuery="grouptour-hero" />

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/assets/services/group-tour-about.webp"
                  alt={page.aboutTitle}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-6">
                  {page.aboutTitle}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {page.aboutDesc}
                </p>
                <div>
                  <h3 className="font-semibold text-xl text-emerald-900 mb-4">
                    {page.benefitsTitle}
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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-emerald-950 mb-2">
                  {form.formHeader}
                </h2>
                <p className="text-gray-500">{form.formSubtitle}</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Group Organizer Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {form.groupOrganizerName}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="organizerName"
                      placeholder={form.namePlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {form.phoneNumber}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={form.phonePlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                {/* Group Type & Size */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.groupType}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="groupType"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white appearance-none"
                      >
                        <option value="">{form.groupTypePlaceholder}</option>
                        <option value="corporate">Corporate</option>
                        <option value="educational">
                          Educational / School
                        </option>
                        <option value="family-friends">Family & Friends</option>
                        <option value="pilgrimage">Pilgrimage</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
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
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.groupSize}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="groupSize"
                        min="8"
                        placeholder={form.groupSizePlaceholder}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Destination & Start Date */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.destination}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        name="destination"
                        type="text"
                        placeholder={form.destinationPlaceholder}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.startDate}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        name="startDate"
                        type="text"
                        placeholder={form.startDatePlaceholder}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Trip Duration */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.tripDuration}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="duration"
                        min="1"
                        placeholder={form.tripDurationPlaceholder}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  {/* Empty column to match screenshot layout if needed, or just let it be single item in row if we want */}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {form.budget}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IndianRupee className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="budget"
                      placeholder={form.budgetPlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {form.interests}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <ClipboardList className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      rows={4}
                      name="interests"
                      placeholder={form.interestsPlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-12 rounded-full transition-colors flex items-center gap-2 shadow-md"
                  >
                    <Send className="w-5 h-5" />
                    {form.submit}
                  </button>
                </div>
                <p className="text-center text-gray-400 text-sm mt-4">
                  {form.privacyFooter}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-emerald-950 mb-2">
                {page.faqTitle}
              </h2>
              <div className="h-1 w-20 bg-yellow-400 mb-4"></div>
              <p className="text-gray-600 text-lg">{page.faqDesc}</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer select-none">
                      <h3 className="font-bold text-lg text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <span className="transition-transform group-open:rotate-180">
                        <svg
                          className="w-6 h-6 text-gray-400"
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
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
