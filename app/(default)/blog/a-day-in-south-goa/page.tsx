import type { Metadata } from "next";
import { HeroSection } from "@/components-eng/hero-section";
import { SouthGoaDayBlogContent, faqs } from "@/components/SouthGoaDayBlogContent";

export const metadata: Metadata = {
  title: "A Day in South Goa: Experience Goa Like a Local",
  description:
    "Plan a South Goa day trip with beaches, heritage, local food, airport tips, 2 to 4 day itineraries and answers to common South Goa travel questions.",
  keywords: ["South Goa day trip", "Things to do in South Goa", "South Goa one day itinerary", "south goa beaches"],
  alternates: { canonical: "https://globaltouristcentre.com/blog/a-day-in-south-goa/" },
  openGraph: {
    title: "A Day in South Goa: Experience Goa Like a Local",
    description: "A practical South Goa day trip itinerary and travel guide.",
    type: "article",
    images: ["/assets/destinations/South-goa/south-goa-sunset.webp"],
  },
};

export default function SouthGoaDayBlog() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <>
      <HeroSection title="A Day in South Goa: Experience Goa Like a Local" backgroundQuery="Goa-hero" />
      <SouthGoaDayBlogContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
