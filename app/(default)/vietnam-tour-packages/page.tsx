import type { Metadata } from "next";

import { LandingClient } from "@/components-eng/landing/landing-client";
import { LANDING_PAGES } from "@/lib/data/landing-pages";

const data = LANDING_PAGES["vietnam-tour-packages"];

export const metadata: Metadata = {
  title: data.titleTag,
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}/` },
  openGraph: {
    title: data.titleTag,
    description: data.metaDescription,
    url: `/${data.slug}/`,
    type: "website",
  },
};

export default function VietnamLandingPage() {
  return <LandingClient data={data} />;
}
