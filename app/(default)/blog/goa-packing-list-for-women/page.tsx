import type { Metadata } from "next";
import GoaPackingListClient from "./goa-packing-list-client";

export const metadata: Metadata = {
  title: "Goa Packing List for Women: Essential Items for a Beachy, Comfortable Trip | Global Tourist Centre",
  description:
    "Planning a Goa trip? Explore this complete Goa packing list for women with must-pack outfits, beachwear, skincare, documents, and travel safety essentials.",
  alternates: {
    canonical: "https://globaltouristcentre.com/blog/goa-packing-list-for-women/",
    languages: {
      en: "https://globaltouristcentre.com/blog/goa-packing-list-for-women/",
      it: "https://globaltouristcentre.com/it/blog/goa-packing-list-for-women/",
      fr: "https://globaltouristcentre.com/fr/blog/goa-packing-list-for-women/",
      de: "https://globaltouristcentre.com/de/blog/goa-packing-list-for-women/",
      ru: "https://globaltouristcentre.com/ru/blog/goa-packing-list-for-women/",
      "x-default": "https://globaltouristcentre.com/blog/goa-packing-list-for-women/",
    },
  },
  openGraph: {
    title: "Goa Packing List for Women: Essential Items for a Beachy, Comfortable Trip",
    description:
      "A practical travel checklist for women visiting Goa, including weather-ready outfits, beachwear, skincare, documents, and safety essentials.",
    type: "article",
    url: "https://globaltouristcentre.com/blog/goa-packing-list-for-women/",
    images: [
      {
        url: "/assets/blog/goa/goa-packing-list-thumbnail.jpeg",
        width: 1200,
        height: 630,
        alt: "Goa packing list for women",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Packing List for Women: Essential Items for a Beachy, Comfortable Trip",
    description:
      "A practical travel checklist for women visiting Goa, including weather-ready outfits, beachwear, skincare, documents, and safety essentials.",
    images: ["/assets/blog/goa/goa-packing-list-thumbnail.jpeg"],
  },
};

export default function GoaPackingListBlogPage() {
  return <GoaPackingListClient />;
}
