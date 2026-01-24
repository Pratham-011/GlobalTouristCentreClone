"use client";

import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "@/components/hero-section";
import {
    Check,
    FileText,
    Globe,
    Clock,
    Calendar,
    Shield,
    Send,
    User,
    Mail,
    Phone,
    MapPin,
    ClipboardList,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function VisaAgentPage() {
    const { t } = useI18n();
    const page = t.servicePages.visaAgent;
    // Fallback for form translations
    const form = t.servicePages.visaAgent || {};

    const services = [
        page.service1,
        page.service2,
        page.service3,
        page.service4,
        page.service5,
        page.service6,
    ];

    const steps = [
        {
            title: page.step1Title,
            desc: page.step1Desc,
            icon: <Globe className="w-8 h-8 text-teal-600" />,
        },
        {
            title: page.step2Title,
            desc: page.step2Desc,
            icon: <FileText className="w-8 h-8 text-teal-600" />,
        },
        {
            title: page.step3Title,
            desc: page.step3Desc,
            icon: <Send className="w-8 h-8 text-teal-600" />,
        },
        {
            title: page.step4Title,
            desc: page.step4Desc,
            icon: <Shield className="w-8 h-8 text-teal-600" />,
        },
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
🛂 Visa Request Enquiry

Full Name: ${formData.get("fullName")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}

Destination Country: ${formData.get("destination")}
Visa Type: ${formData.get("visaType")}
Planned Travel Date: ${formData.get("travelDate")}

Additional Notes:
${formData.get("notes") || "—"}
`;

      const whatsappUrl = `https://wa.me/919067972295?text=${encodeURIComponent(
        message.trim()
      )}`;

      window.open(whatsappUrl, "_blank");
    };


    return (
      <>
        <HeroSection title={page.heroTitle} backgroundQuery="visa-hero" />

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/assets/services/visa-about.webp"
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

        {/* Process Section */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
                {page.processTitle}
              </h2>
              <p className="text-gray-600 text-lg">{page.processDesc}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-emerald-950 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-emerald-950 mb-2">
                  {form.formTitle || "Apply for Visa Assistance"}
                </h2>
                <p className="text-gray-600">
                  {form.formDesc ||
                    "Fill out this form and our visa experts will contact you within 24 hours."}
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.fullNameLabel || "Full Name*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder={
                          form.fullNamePlaceholder || "Your full name"
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.emailLabel || "Email*"}
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.phoneLabel || "Phone Number*"}
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.destinationLabel || "Destination Country*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="destination"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition appearance-none bg-white"
                        title={form.destinationLabel || "Destination Country"}
                        required
                      >
                        <option value="">
                          {form.destinationPlaceholder || "Select Country"}
                        </option>
                        <option value="UAE">UAE</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visa Type & Date */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.visaTypeLabel || "Visa Type*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="visaType"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition appearance-none bg-white"
                        title={form.visaTypeLabel || "Visa Type"}
                        required
                      >
                        <option value="">
                          {form.visaTypePlaceholder || "Select Visa Type"}
                        </option>
                        <option value="Tourist">Tourist Visa</option>
                        <option value="Business">Business Visa</option>
                        <option value="Transit">Transit Visa</option>
                        <option value="Student">Student Visa</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {form.travelDateLabel || "Planned Travel Date*"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        name="travelDate"
                        type="date"
                        // placeholder={form.travelDatePlaceholder || "Select your travel date"}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {form.notesLabel || "Additional Notes"}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <ClipboardList className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      rows={4}
                      name="notes"
                      placeholder={
                        form.notesPlaceholder ||
                        "Any special requirements or notes"
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-5 h-5" />
                  {form.submitButton || "Submit Visa Request"}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  {form.privacyNote ||
                    "We respect your privacy. Your information will not be shared."}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
                {page.faqTitle || "Visa FAQs"}
              </h2>
              <p className="text-gray-600 text-lg">
                {page.faqDesc ||
                  "Common questions about our visa assistance services."}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
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
