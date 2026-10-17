"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock, Home, MessageCircle, Phone } from "lucide-react";

const TEAL = "#008081";
const WHATSAPP_NUMBER = "919067972295";

export function ThankYouClient() {
  const params = useSearchParams();
  const trip = params.get("trip");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    trip ? `Hi! I just submitted an enquiry for ${trip}.` : "Hi! I just submitted an enquiry on your website."
  )}`;

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-xl rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm sm:p-10">
        <CheckCircle2 className="mx-auto h-16 w-16" style={{ color: TEAL }} aria-hidden="true" />

        <h1 className="mt-5 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">Thank you!</h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          We&apos;ve received your {trip ? <strong>{trip}</strong> : null} enquiry. One of our travel experts will call
          you within <strong>24 hours</strong> with a personalised quote and itinerary options.
        </p>

        <div
          className="mt-6 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium"
          style={{ backgroundColor: `${TEAL}0f`, color: "#006566" }}
        >
          <Clock className="h-4 w-4" aria-hidden="true" />
          Typical response time: under 24 hours
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white hover:opacity-95"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Message us on WhatsApp
          </a>
          <a
            href="tel:+919067972295"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 px-6 text-sm font-semibold transition-colors hover:text-white"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call +91 90679 72295
          </a>
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          style={{ color: TEAL }}
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
