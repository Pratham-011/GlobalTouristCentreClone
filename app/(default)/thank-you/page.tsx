import type { Metadata } from "next";
import { Suspense } from "react";

import { ThankYouClient } from "./thank-you-client";

/* Confirmation page shown after a landing-page enquiry is submitted.
   Kept out of search — it is only ever reached after a form submission,
   and it doubles as the Google Ads conversion URL. */
export const metadata: Metadata = {
  title: "Thank You | Global Tourist Centre",
  description: "Your enquiry has been received. Our team will contact you within 24 hours.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-[70vh] bg-slate-50" />}>
      <ThankYouClient />
    </Suspense>
  );
}
