import type { Metadata } from "next";

import EnrollClient from "./enroll-client";

/* ------------------------------------------------------------------ */
/* METADATA — unlisted page: kept out of search, sitemap and nav      */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Kashmir Group Trip – Enrollment | Global Tourist Centre",
  description:
    "Enroll for the Global Tourist Centre Kashmir group trip from Goa. Pick your batch, share your details and our team will confirm your seat.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function KashmirEnrollPage() {
  return <EnrollClient />;
}
