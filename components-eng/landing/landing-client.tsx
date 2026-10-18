"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  IndianRupee,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Star,
  User,
  Users,
} from "lucide-react";

import { AboutTestimonials } from "@/app/(default)/about/AboutTestimonials";
import { Input } from "@/components-eng/ui/input";
import { Label } from "@/components-eng/ui/label";
import {
  BUDGETS,
  DURATIONS,
  LANDING_STATS,
  TRAVEL_WITH,
  type LandingPageData,
} from "@/lib/data/landing-pages";

/** Web3Forms access key (public by design). Enquiries are emailed to the inbox it was created for. */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const TEAL = "#008081";

type FormState = {
  name: string;
  phone: string;
  email: string;
  travelWith: string;
  startPoint: string;
  startDate: string;
  people: string;
  duration: string;
  budget: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  travelWith: "",
  startPoint: "",
  startDate: "",
  people: "",
  duration: "",
  budget: "",
  message: "",
};

function validate(f: FormState) {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (f.name.trim().length < 2) e.name = "Enter your full name";
  if (!/^[6-9]\d{9}$/.test(f.phone)) e.phone = "Enter a valid 10-digit mobile number";
  if (!f.travelWith) e.travelWith = "Select who you're travelling with";
  if (!f.startPoint.trim()) e.startPoint = "Enter your starting city";
  if (!f.startDate) e.startDate = "Choose a start date";
  if (!f.people || Number(f.people) < 1) e.people = "Enter number of travellers";
  if (!f.duration) e.duration = "Select a duration";
  return e;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-600">{msg}</p>;
}

function FieldLabel({ icon: Icon, children, required }: { icon: any; children: React.ReactNode; required?: boolean }) {
  return (
    <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-600">
      <Icon className="h-3.5 w-3.5" style={{ color: TEAL }} aria-hidden="true" />
      {children}
      {required && <span className="text-red-600">*</span>}
    </span>
  );
}

const selectClass =
  "h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:border-[#008081] focus:outline-none focus:ring-1 focus:ring-[#008081]";

export function LandingClient({ data }: { data: LandingPageData }) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Honeypot: bots fill hidden fields, humans don't
    const botcheck = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked;
    if (botcheck) return;

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New ${data.destination} enquiry – ${form.name.trim()}`,
          from_name: "Global Tourist Centre – Landing Page",
          replyto: form.email.trim() || undefined,
          Destination: data.destination,
          "Full Name": form.name.trim(),
          Mobile: `+91 ${form.phone}`,
          Email: form.email.trim() || "—",
          "Travel With": form.travelWith,
          "Start Point": form.startPoint.trim(),
          "Start Date": form.startDate,
          "No. of People": form.people,
          Duration: form.duration,
          "Estimated Budget": form.budget || "—",
          Message: form.message.trim() || "—",
          "Submitted From": typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.success) throw new Error(result.message || "Submission failed");

      router.push(`/thank-you/?trip=${encodeURIComponent(data.destination)}`);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${TEAL}14`, color: TEAL }}
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Goa-based specialists · 15+ years
            </span>

            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {data.h1}
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{data.intro}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-7 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
                style={{ backgroundColor: TEAL }}
              >
                Get a free quote
                <Send className="h-4 w-4" aria-hidden="true" />
              </a>
              <div>
                <p className="text-xs text-slate-500">Trips from</p>
                <p className="font-serif text-2xl font-extrabold" style={{ color: TEAL }}>
                  {data.priceFrom}
                  <span className="ml-1 text-sm font-medium text-slate-500">/ person</span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm italic text-slate-500">
              Best holiday, best value — request your personalised quote.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              {LANDING_STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-lg font-bold text-slate-900 sm:text-xl">{s.value}</dt>
                  <dd className="mt-0.5 text-xs text-slate-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-1 row-span-2 aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={data.heroCollage[0]}
                alt={`${data.destination} highlights`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
                priority
              />
            </div>
            {data.heroCollage.slice(1).map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={src} alt={`${data.destination} highlights`} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FORM ---------------- */}
      <section id="enquiry-form" className="scroll-mt-20 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm sm:p-8">
            <h2 className="text-center font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Plan Your Dream {data.destination} Trip Today
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-600">
              Tell us a little about your trip and our team will send you a personalised quote.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* 8 fields across 2 rows of 4, then budget + message + button on row 3 */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <Label htmlFor="lp-name">
                    <FieldLabel icon={User} required>Full name</FieldLabel>
                  </Label>
                  <Input
                    id="lp-name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => {
                      if (/^[A-Za-z\s.]*$/.test(e.target.value)) set("name", e.target.value);
                    }}
                    className="h-11"
                    aria-invalid={!!errors.name}
                  />
                  <FieldError msg={errors.name} />
                </div>

                <div>
                  <Label htmlFor="lp-phone">
                    <FieldLabel icon={Phone} required>Phone number</FieldLabel>
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">+91</span>
                    <Input
                      id="lp-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                      className="h-11 pl-11"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  <FieldError msg={errors.phone} />
                </div>

                <div>
                  <Label htmlFor="lp-email">
                    <FieldLabel icon={Mail}>Email id</FieldLabel>
                  </Label>
                  <Input
                    id="lp-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="lp-travelwith">
                    <FieldLabel icon={Users} required>Travel with</FieldLabel>
                  </Label>
                  <select
                    id="lp-travelwith"
                    value={form.travelWith}
                    onChange={(e) => set("travelWith", e.target.value)}
                    className={selectClass}
                    aria-invalid={!!errors.travelWith}
                  >
                    <option value="">Select</option>
                    {TRAVEL_WITH.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <FieldError msg={errors.travelWith} />
                </div>

                <div>
                  <Label htmlFor="lp-start">
                    <FieldLabel icon={MapPin} required>Start point</FieldLabel>
                  </Label>
                  <Input
                    id="lp-start"
                    placeholder="Your city"
                    value={form.startPoint}
                    onChange={(e) => set("startPoint", e.target.value)}
                    className="h-11"
                    aria-invalid={!!errors.startPoint}
                  />
                  <FieldError msg={errors.startPoint} />
                </div>

                <div>
                  <Label htmlFor="lp-date">
                    <FieldLabel icon={CalendarDays} required>Start date</FieldLabel>
                  </Label>
                  <Input
                    id="lp-date"
                    type="date"
                    value={form.startDate}
                    onChange={(e) => set("startDate", e.target.value)}
                    className="h-11"
                    aria-invalid={!!errors.startDate}
                  />
                  <FieldError msg={errors.startDate} />
                </div>

                <div>
                  <Label htmlFor="lp-people">
                    <FieldLabel icon={Users} required>No. of people</FieldLabel>
                  </Label>
                  <Input
                    id="lp-people"
                    inputMode="numeric"
                    placeholder="2"
                    value={form.people}
                    onChange={(e) => set("people", e.target.value.replace(/\D/g, "").slice(0, 2))}
                    className="h-11"
                    aria-invalid={!!errors.people}
                  />
                  <FieldError msg={errors.people} />
                </div>

                <div>
                  <Label htmlFor="lp-duration">
                    <FieldLabel icon={Clock} required>Select the duration</FieldLabel>
                  </Label>
                  <select
                    id="lp-duration"
                    value={form.duration}
                    onChange={(e) => set("duration", e.target.value)}
                    className={selectClass}
                    aria-invalid={!!errors.duration}
                  >
                    <option value="">Select</option>
                    {DURATIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <FieldError msg={errors.duration} />
                </div>

                <div>
                  <Label htmlFor="lp-budget">
                    <FieldLabel icon={IndianRupee}>Estimated budget per person</FieldLabel>
                  </Label>
                  <select
                    id="lp-budget"
                    value={form.budget}
                    onChange={(e) => set("budget", e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select</option>
                    {BUDGETS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="lg:col-span-2">
                  <Label htmlFor="lp-message">
                    <FieldLabel icon={MessageSquare}>Message</FieldLabel>
                  </Label>
                  <textarea
                    id="lp-message"
                    rows={1}
                    placeholder="Anything else we should know?"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className="h-11 w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#008081] focus:outline-none focus:ring-1 focus:ring-[#008081]"
                  />
                </div>

                {/* Button sits on the same row as budget + message on desktop */}
                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    aria-busy={status === "sending"}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    style={{ backgroundColor: TEAL }}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Book now
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  Something went wrong while sending your enquiry. Please try again, or{" "}
                  <a
                    href="https://wa.me/919067972295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    message us on WhatsApp
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ---------------- PACKAGES ---------------- */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
            Top Selling Tour Packages
          </h2>
          <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full" style={{ backgroundColor: TEAL }} />

          <div
            className={`mt-10 grid gap-6 ${
              data.packages.length === 1 ? "mx-auto max-w-md" : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {data.packages.map((p) => (
              <article
                key={p.name}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                  <span className="absolute left-0 top-3 rounded-r-full bg-[#d8972f] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Exclusive deal
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                    {p.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-slate-900">{p.name}</h3>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <p className="flex items-center gap-1 text-xs text-slate-600">
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                      {p.route}
                    </p>
                    <p className="text-right">
                      <span className="block font-serif text-lg font-extrabold" style={{ color: TEAL }}>
                        {p.price}
                      </span>
                      <span className="block text-[10px] text-slate-500">Per person</span>
                    </p>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Check className="h-3 w-3 stroke-[3]" style={{ color: TEAL }} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#enquiry-form"
                    className="mt-4 flex h-10 w-full items-center justify-center rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: TEAL }}
                  >
                    Ask an expert
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- DESTINATION TILES ---------------- */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">Destinations you'll visit</h2>
          <span className="mt-3 block h-[3px] w-14 rounded-full" style={{ backgroundColor: TEAL }} />

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {data.tiles.map((tile) => (
              <div key={tile.title} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={tile.image}
                  alt={`${tile.title} — ${tile.subtitle}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="font-serif text-sm font-semibold text-white sm:text-base">{tile.title}</h3>
                  <p className="text-[11px] text-white/80 sm:text-xs">{tile.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- REVIEWS (real Google reviews + link to Google) ---------------- */}
      <section className="bg-slate-50">
        <AboutTestimonials />
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-white sm:text-3xl">Gallery</h2>
          <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full" style={{ backgroundColor: TEAL }} />

          <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {data.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[3/4] w-[70%] flex-shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[38%] lg:w-[23%]"
              >
                <Image
                  src={src}
                  alt={`${data.destination} gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 23vw, 70vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full" style={{ backgroundColor: TEAL }} />

          <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {data.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.q}>
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-start justify-between gap-4 py-4 text-left"
                    >
                      <span className="flex gap-3">
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-semibold text-slate-900">{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  {open && (
                    <dd className="pb-4 pl-9 pr-8 text-sm leading-relaxed text-slate-600">{faq.a}</dd>
                  )}
                </div>
              );
            })}
          </dl>

          <div className="mt-10 rounded-2xl p-6 text-center" style={{ backgroundColor: `${TEAL}0f` }}>
            <p className="flex items-center justify-center gap-1 text-sm font-medium text-slate-700">
              <Star className="h-4 w-4 fill-[#d8972f] text-[#d8972f]" aria-hidden="true" />
              Rated 4.9/5 by travellers
            </p>
            <a
              href="#enquiry-form"
              className="mt-4 inline-flex min-h-[48px] items-center gap-2 rounded-full px-8 text-sm font-semibold text-white shadow-md"
              style={{ backgroundColor: TEAL }}
            >
              Request your free quote
              <Send className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Prefer to talk?{" "}
              <Link href="/contact-us/" className="font-semibold hover:underline" style={{ color: TEAL }}>
                Contact our team
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
