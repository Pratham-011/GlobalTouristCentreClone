import type { Metadata } from "next";

import EnrollClient from "./enroll-client";

/* ------------------------------------------------------------------ */
/* METADATA — unlisted page: kept out of search, sitemap and nav      */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Himachal Group Trip for College Students from Goa",
  description:
    "Join our Himachal group trip from Goa in February and March 2027! Manali, Solang Valley, Kasol, Dalhousie, Khajjiar and McLeod Ganj from ₹13,599 per person. Book now!",
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

export default function HimachalEnrollPage() {
  return <EnrollClient />;
}
