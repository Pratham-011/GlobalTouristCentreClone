"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  CheckCircle2,
  Hotel,
  Music,
  ShieldCheck,
  Train,
  Waves,
} from "lucide-react";

import { DetailedTourHero } from "@/components-eng/tours/detailed-tour-hero";
import { Input } from "@/components-eng/ui/input";
import { Label } from "@/components-eng/ui/label";

/* ------------------------------------------------------------------ */
/* CONFIG — edit trip details here                                    */
/* ------------------------------------------------------------------ */

/** Web3Forms access key (public by design). Enrollments are emailed to the inbox it was created for. */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const WHATSAPP_NUMBER = "919067972295";

const TRIP_NAME = "Himachal Group Trip from Goa";
const BASE_PRICE = 13599;

/** Confirms the seat — collected by the team on the confirmation call, not on this page. */
const BOOKING_ADVANCE = 3000;

const BATCHES = [
  { id: "batch-1", label: "Batch 1", dates: "February 2027", month: "FEB", days: "2027" },
  { id: "batch-2", label: "Batch 2", dates: "March 2027", month: "MAR", days: "2027" },
] as const;

const ADD_ONS = [
  {
    id: "skip-train",
    icon: Train,
    title: "Skip the train",
    description: "Meet the group directly at the destination",
    delta: -1500,
  },
  {
    id: "ac-train",
    icon: Train,
    title: "Upgrade train to AC",
    description: "Travel in an AC coach instead of sleeper",
    delta: 3000,
  },
  {
    id: "two-sharing",
    icon: BedDouble,
    title: "Upgrade to 2-sharing",
    description: "Private room for two at every stay",
    delta: 3000,
  },
] as const;

type AddOnId = (typeof ADD_ONS)[number]["id"];

const QUICK_INFO = [
  { icon: Train, title: "Train Journey", description: "Overnight trains, Goa to Chandigarh" },
  { icon: Hotel, title: "Premium Stays", description: "10 nights in handpicked hotels" },
  { icon: Waves, title: "River Rafting", description: "Included rafting on the Beas at Kullu" },
  { icon: Music, title: "DJ Night", description: "Riverside DJ night in Kasol" },
];

const ITINERARY_PREVIEW = [
  { day: "Day 1 – 2", title: "Goa – Chandigarh – Manali", note: "Overnight trains north, then the climb into the hills" },
  { day: "Day 3 – 4", title: "Manali & Solang Valley", note: "Snow activities and the Solang ropeway", highlight: true },
  { day: "Day 5", title: "Kullu & Kasol", note: "River rafting on the Beas, then on to Kasol", highlight: true },
  { day: "Day 6", title: "Kasol & Manikaran", note: "Hot springs by day, DJ night by the river" },
  { day: "Day 7", title: "Dalhousie & Khajjiar", note: "Alpine meadows of the 'Mini Switzerland of India'" },
  { day: "Day 8 – 9", title: "Dharamshala & McLeod Ganj", note: "Dalai Lama Temple and the Tibetan market" },
  { day: "Day 10 – 11", title: "Return to Goa", note: "Overnight journey back with the group" },
];

/* Public-domain (CC0) photography. Labels describe what each photo actually
   shows — swap in your own shots of Solang, Kasol and Khajjiar when you have them. */
const GALLERY = [
  {
    src: "/assets/destinations/Himachal/Manali.webp",
    alt: "Snow-covered mountains above the hill station of Manali, Himachal Pradesh",
    label: "Manali",
  },
  {
    src: "/assets/destinations/Himachal/Snow-Peaks.webp",
    alt: "Snowy Himalayan peak above coniferous forest, Himachal Pradesh",
    label: "Snow Peaks",
  },
  {
    src: "/assets/destinations/Himachal/Pine-Valleys.webp",
    alt: "Pine forest and river bed below snow-capped ridges near Manali",
    label: "Pine Valleys",
  },
  {
    src: "/assets/destinations/Himachal/Dharamshala.webp",
    alt: "Tibetan prayer flags strung through the forest at Dharamshala",
    label: "Dharamshala",
  },
];

const INCLUSIONS = [
  "10 nights in premium stays",
  "Return train travel from Goa",
  "All transfers & sightseeing by road",
  "River rafting at Kullu",
  "DJ night in Kasol",
  "Trip coordinator with the group",
];

const GENDERS = ["Male", "Female", "Other"] as const;

/* ------------------------------------------------------------------ */
/* HELPERS                                                            */
/* ------------------------------------------------------------------ */

const inr = (n: number) => `₹${Math.abs(n).toLocaleString("en-IN")}`;
const signedInr = (n: number) => `${n < 0 ? "−" : "+"} ${inr(n)}`;

type FormState = {
  batch: string;
  name: string;
  phone: string;
  age: string;
  gender: string;
  email: string;
  college: string;
  coupon: string;
  addOns: AddOnId[];
  agreed: boolean;
};

const EMPTY_FORM: FormState = {
  batch: "",
  name: "",
  phone: "",
  age: "",
  gender: "",
  email: "",
  college: "",
  coupon: "",
  addOns: [],
  agreed: false,
};

function validate(f: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!f.batch) errors.batch = "Please choose a batch";
  if (f.name.trim().length < 2) errors.name = "Enter your full name";
  if (!/^[6-9]\d{9}$/.test(f.phone)) errors.phone = "Enter a valid 10-digit mobile number";
  const age = Number(f.age);
  if (!age || age < 5 || age > 90) errors.age = "Enter a valid age";
  if (!f.gender) errors.gender = "Select gender";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errors.email = "Enter a valid email";
  if (!f.agreed) errors.agreed = "Please accept the terms to book";
  return errors;
}

/* ------------------------------------------------------------------ */
/* SMALL UI PIECES                                                    */
/* ------------------------------------------------------------------ */

function StepHeading({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#008081] text-xs font-bold text-white">
        {n}
      </span>
      <h3 className="font-serif text-lg font-semibold text-slate-900">{children}</h3>
    </div>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-600">{msg}</p>;
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#008081] sm:text-sm">{label}</p>
      <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function EnrollClient() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleAddOn = (id: AddOnId) => {
    setForm((prev) => {
      let next = prev.addOns.includes(id)
        ? prev.addOns.filter((a) => a !== id)
        : [...prev.addOns, id];
      // Skipping the train and upgrading it are mutually exclusive
      if (id === "skip-train" && next.includes("skip-train")) next = next.filter((a) => a !== "ac-train");
      if (id === "ac-train" && next.includes("ac-train")) next = next.filter((a) => a !== "skip-train");
      return { ...prev, addOns: next };
    });
  };

  const selectedBatch = BATCHES.find((b) => b.id === form.batch);
  const selectedAddOns = ADD_ONS.filter((a) => form.addOns.includes(a.id));
  const total = BASE_PRICE + selectedAddOns.reduce((sum, a) => sum + a.delta, 0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById("enroll-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          subject: `New Booking – ${TRIP_NAME} – ${selectedBatch?.label} (${selectedBatch?.dates}) – ${form.name.trim()}`,
          from_name: "Global Tourist Centre – Bookings",
          replyto: form.email.trim(),
          "Trip": TRIP_NAME,
          "Batch": `${selectedBatch?.label} · ${selectedBatch?.dates}`,
          "Full Name": form.name.trim(),
          "Mobile": `+91 ${form.phone}`,
          "Email": form.email.trim(),
          "Age": form.age,
          "Gender": form.gender,
          "College / Organisation": form.college.trim() || "—",
          "Customisations": selectedAddOns.length
            ? selectedAddOns.map((a) => `${a.title} (${signedInr(a.delta)})`).join(", ")
            : "None",
          "Coupon Code": form.coupon.trim() || "—",
          "Estimated Trip Price": inr(total),
          "Submitted From": typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");

      setSubmitted(form);
      setStatus("done");
      setForm(EMPTY_FORM);
      document.getElementById("enroll-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setStatus("error");
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I just booked the ${TRIP_NAME}${
      submitted ? ` (${BATCHES.find((b) => b.id === submitted.batch)?.label}) – ${submitted.name}` : ""
    }.`
  )}`;

  return (
    <div className="bg-white">
      <DetailedTourHero
        title="Himachal Group Trip February & March 2027"
        subtitle="Manali, Solang Valley, Kasol, Dalhousie, Khajjiar & McLeod Ganj with fellow travellers from Goa. Choose your batch and book — no payment needed today."
        backgroundImage="/assets/hero/Himachal-hero.webp"
        meta={{ duration: "10 Nights / 11 Days", locations: 6, rating: "" }}
      />

      {/* Booking strip */}
      <div className="border-b border-slate-100 bg-[#008081]/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008081] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#008081]" />
            </span>
            Bookings open for February and March 2027 batches
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <ShieldCheck className="h-4 w-4 text-[#008081]" aria-hidden="true" />
            Book free · Our team confirms your seat within 24 hours
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* ---------------- LEFT: trip details ---------------- */}
        <div className="space-y-14 lg:col-span-7">
          {/* Batches */}
          <section aria-labelledby="batches-heading">
            <SectionTitle label="Departures" title="Available Batches" />
            <div className="grid gap-4 sm:grid-cols-2">
              {BATCHES.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-[#d8972f]/10 text-[#8a5a10]">
                    <span className="text-[10px] font-bold tracking-widest">{b.month}</span>
                    <span className="text-base font-extrabold leading-tight">{b.days}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#008081]">{b.label}</p>
                    <p className="font-serif text-lg font-bold text-slate-900">{b.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick info */}
          <section aria-label="Trip at a glance">
            <SectionTitle label="At a glance" title="What the trip looks like" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {QUICK_INFO.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center">
                  <Icon className="mx-auto h-6 w-6 text-[#008081]" aria-hidden="true" />
                  <p className="mt-2 text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary preview */}
          <section aria-labelledby="itinerary-heading">
            <SectionTitle label="Itinerary" title="11 days across the Himachal hills" />

            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {GALLERY.map((g) => (
                <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs font-semibold text-white">{g.label}</span>
                </div>
              ))}
            </div>

            <ol className="relative space-y-4 border-l-2 border-[#008081]/20 pl-6">
              {ITINERARY_PREVIEW.map((d) => (
                <li key={d.day} className="relative">
                  <span
                    className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-white ${
                      d.highlight ? "bg-[#d8972f]" : "bg-[#008081]"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#008081]">{d.day}</p>
                  <p className="font-semibold text-slate-900">
                    {d.title}
                    {d.highlight && (
                      <span className="ml-2 rounded-full bg-[#d8972f]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#8a5a10]">
                        Highlight
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-slate-600">{d.note}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Inclusions */}
          <section aria-label="Inclusions">
            <SectionTitle label="Included" title="What's covered" />
            <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              {INCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="mt-px inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#008081]/10 sm:mt-0.5 sm:h-5 sm:w-5">
                    <Check className="h-2.5 w-2.5 stroke-[3] text-[#008081] sm:h-3 sm:w-3" aria-hidden="true" />
                  </span>
                  <span className="text-[13px] leading-snug text-slate-700 sm:text-sm sm:leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ---------------- RIGHT: booking form ---------------- */}
        <aside className="lg:col-span-5">
          <div
            id="enroll-form"
            className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white shadow-xl lg:sticky lg:top-6"
          >
            <div className="rounded-t-2xl bg-gradient-to-r from-[#008081] to-[#0d9488] px-6 py-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Booking form</p>
              <h2 className="font-serif text-2xl font-bold">Reserve your seat</h2>
              <p className="mt-1 text-sm text-white/85">
                Starting at <span className="font-bold text-white">{inr(BASE_PRICE)}</span> per person · No payment now
              </p>
            </div>

            {status === "done" && submitted ? (
              <div className="px-6 py-10 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-[#008081]" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900">You're booked!</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Thanks {submitted.name.split(" ")[0]}, we've received your booking for{" "}
                  <strong>{BATCHES.find((b) => b.id === submitted.batch)?.dates}</strong>. Our team will call you on{" "}
                  <strong>+91 {submitted.phone}</strong> within 24 hours to confirm your seat and share the next steps.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Message us on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setSubmitted(null);
                  }}
                  className="mt-3 block w-full text-sm font-medium text-[#008081] hover:underline"
                >
                  Book another traveller
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8 px-6 py-6">
                {/* honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Step 1 — batch */}
                <fieldset>
                  <legend className="sr-only">Choose batch</legend>
                  <StepHeading n={1}>Choose your batch</StepHeading>
                  <div className="grid gap-3">
                    {BATCHES.map((b) => {
                      const active = form.batch === b.id;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => set("batch", b.id)}
                          className={`flex items-center justify-between rounded-xl border-2 px-3 py-2.5 text-left transition-all sm:px-4 sm:py-3 ${
                            active
                              ? "border-[#008081] bg-[#008081]/5 shadow-sm"
                              : "border-slate-200 hover:border-[#008081]/50"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <CalendarDays
                              className={`h-4 w-4 sm:h-5 sm:w-5 ${active ? "text-[#008081]" : "text-slate-400"}`}
                            />
                            <span>
                              <span className="block text-sm font-semibold text-slate-900">{b.label}</span>
                              <span className="block text-xs text-slate-600">{b.dates}</span>
                            </span>
                          </span>
                          <span
                            className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 sm:h-5 sm:w-5 ${
                              active ? "border-[#008081] bg-[#008081]" : "border-slate-300"
                            }`}
                          >
                            {active && <Check className="h-2 w-2 stroke-[3] text-white sm:h-3 sm:w-3" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <FieldError msg={errors.batch} />
                </fieldset>

                {/* Step 2 — details */}
                <fieldset className="space-y-4">
                  <legend className="sr-only">Your details</legend>
                  <StepHeading n={2}>Your details</StepHeading>

                  <div>
                    <Label htmlFor="en-name" className="text-sm font-medium">
                      Full name <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="en-name"
                      autoComplete="name"
                      placeholder="As per government ID"
                      value={form.name}
                      onChange={(e) => {
                        if (/^[A-Za-z\s.]*$/.test(e.target.value)) set("name", e.target.value);
                      }}
                      className="mt-1.5 h-11"
                      aria-invalid={!!errors.name}
                    />
                    <FieldError msg={errors.name} />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <Label htmlFor="en-phone" className="text-sm font-medium">
                        Mobile <span className="text-red-600">*</span>
                      </Label>
                      <div className="relative mt-1.5">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">+91</span>
                        <Input
                          id="en-phone"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          placeholder="98765 43210"
                          value={form.phone}
                          onChange={(e) => {
                            const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                            set("phone", v);
                          }}
                          className="h-11 pl-11"
                          aria-invalid={!!errors.phone}
                        />
                      </div>
                      <FieldError msg={errors.phone} />
                    </div>
                    <div>
                      <Label htmlFor="en-age" className="text-sm font-medium">
                        Age <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="en-age"
                        inputMode="numeric"
                        placeholder="21"
                        value={form.age}
                        onChange={(e) => set("age", e.target.value.replace(/\D/g, "").slice(0, 2))}
                        className="mt-1.5 h-11"
                        aria-invalid={!!errors.age}
                      />
                      <FieldError msg={errors.age} />
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium">
                      Gender <span className="text-red-600">*</span>
                    </span>
                    <div className="mt-1.5 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Gender">
                      {GENDERS.map((g) => (
                        <button
                          key={g}
                          type="button"
                          role="radio"
                          aria-checked={form.gender === g}
                          onClick={() => set("gender", g)}
                          className={`h-11 rounded-md border text-sm font-medium transition-colors ${
                            form.gender === g
                              ? "border-[#008081] bg-[#008081] text-white"
                              : "border-slate-200 text-slate-700 hover:border-[#008081]/50"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                    <FieldError msg={errors.gender} />
                  </div>

                  <div>
                    <Label htmlFor="en-email" className="text-sm font-medium">
                      Email <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="en-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className="mt-1.5 h-11"
                      aria-invalid={!!errors.email}
                    />
                    <FieldError msg={errors.email} />
                  </div>

                  <div>
                    <Label htmlFor="en-college" className="text-sm font-medium">
                      College / Organisation
                    </Label>
                    <Input
                      id="en-college"
                      placeholder="Optional"
                      value={form.college}
                      onChange={(e) => set("college", e.target.value)}
                      className="mt-1.5 h-11"
                    />
                  </div>
                </fieldset>

                {/* Step 3 — customise */}
                <fieldset>
                  <legend className="sr-only">Customise your trip</legend>
                  <StepHeading n={3}>Customise your trip</StepHeading>
                  <div className="space-y-2.5">
                    {ADD_ONS.map(({ id, icon: Icon, title, description, delta }) => {
                      const active = form.addOns.includes(id);
                      return (
                        <button
                          key={id}
                          type="button"
                          role="checkbox"
                          aria-checked={active}
                          onClick={() => toggleAddOn(id)}
                          className={`flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all sm:gap-3 sm:px-4 sm:py-3 ${
                            active ? "border-[#008081] bg-[#008081]/5" : "border-slate-200 hover:border-[#008081]/50"
                          }`}
                        >
                          <span
                            className={`flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded border-2 sm:h-5 sm:w-5 ${
                              active ? "border-[#008081] bg-[#008081]" : "border-slate-300"
                            }`}
                          >
                            {active && <Check className="h-2 w-2 stroke-[3] text-white sm:h-3 sm:w-3" />}
                          </span>
                          <Icon className="h-3.5 w-3.5 flex-shrink-0 text-slate-500 sm:h-4 sm:w-4" aria-hidden="true" />
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-slate-900">{title}</span>
                            <span className="block text-xs text-slate-600">{description}</span>
                          </span>
                          <span
                            className={`whitespace-nowrap text-sm font-semibold ${
                              delta < 0 ? "text-emerald-700" : "text-[#8a5a10]"
                            }`}
                          >
                            {signedInr(delta)}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="en-coupon" className="text-sm font-medium">
                      Coupon code
                    </Label>
                    <Input
                      id="en-coupon"
                      placeholder="Optional"
                      value={form.coupon}
                      onChange={(e) => set("coupon", e.target.value.toUpperCase())}
                      className="mt-1.5 h-11 uppercase"
                    />
                  </div>
                </fieldset>

                {/* Step 4 — summary */}
                <div>
                  <StepHeading n={4}>Booking summary</StepHeading>
                  <dl className="space-y-2 rounded-xl bg-slate-50 p-4 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-600">Batch</dt>
                      <dd className="text-right font-medium text-slate-900">
                        {selectedBatch ? selectedBatch.dates : "—"}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-600">Package price</dt>
                      <dd className="font-medium text-slate-900">{inr(BASE_PRICE)}</dd>
                    </div>
                    {selectedAddOns.map((a) => (
                      <div key={a.id} className="flex justify-between gap-4">
                        <dt className="text-slate-600">{a.title}</dt>
                        <dd className="font-medium text-slate-900">{signedInr(a.delta)}</dd>
                      </div>
                    ))}
                    <div className="flex justify-between gap-4 border-t border-slate-200 pt-2">
                      <dt className="font-semibold text-slate-900">Estimated trip price</dt>
                      <dd className="font-bold text-slate-900">{inr(total)}</dd>
                    </div>
                    <div className="flex justify-between gap-4 rounded-lg bg-[#008081]/10 px-3 py-2">
                      <dt className="font-semibold text-[#006566]">Payable today</dt>
                      <dd className="font-extrabold text-[#006566]">₹0</dd>
                    </div>
                  </dl>
                  <p className="mt-2 text-xs text-slate-500">
                    GST extra. A {inr(BOOKING_ADVANCE)} booking advance confirms your seat — our team shares the payment
                    details and the balance schedule when they call.
                  </p>
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-2.5 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      checked={form.agreed}
                      onChange={(e) => set("agreed", e.target.checked)}
                      className="mt-0.5 h-3 w-3 accent-[#008081] sm:h-4 sm:w-4"
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/legal/terms-and-conditions" target="_blank" className="text-[#008081] hover:underline">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/legal/privacy-policy" target="_blank" className="text-[#008081] hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  <FieldError msg={errors.agreed} />
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong while sending your booking. Please try again or{" "}
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                      message us on WhatsApp
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  aria-busy={status === "sending"}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#008081] text-base font-semibold text-white shadow-md transition-all hover:bg-[#006566] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Book Now
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
