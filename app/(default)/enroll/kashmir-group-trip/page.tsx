import type { Metadata } from "next";

import EnrollClient from "./enroll-client";

/* ------------------------------------------------------------------ */
/* METADATA — unlisted page: kept out of search, sitemap and nav      */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Kashmir Group Trip for College Students from Goa",
  description:
    "Join our Kashmir group trip from Goa in February 2027! Explore Srinagar, Gulmarg, Sonamarg and Pahalgam from ₹9,999 per person. Book now!",
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
