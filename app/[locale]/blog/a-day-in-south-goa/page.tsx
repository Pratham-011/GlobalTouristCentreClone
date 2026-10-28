import type { Metadata } from "next";
import { LOCALES } from "@/lib/data/tour-slugs";
import { HeroSection } from "@/components/hero-section";
import { SouthGoaDayBlogContent, faqs } from "@/components/SouthGoaDayBlogContent";

type PageProps = { params: { locale: string } };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = "A Day in South Goa: Experience Goa Like a Local";
  const description =
    "Plan a South Goa day trip with beaches, heritage, local food, airport tips, 2 to 4 day itineraries and answers to common South Goa travel questions.";
  return {
    title,
    description,
    keywords: ["South Goa day trip", "Things to do in South Goa", "South Goa one day itinerary", "south goa beaches"],
    alternates: { canonical: `https://globaltouristcentre.com/${params.locale}/blog/a-day-in-south-goa/` },
    openGraph: { title, description, type: "article", images: ["/assets/destinations/South-goa/south-goa-sunset.webp"] },
  };
}

export default function SouthGoaDayBlog({ params }: PageProps) {
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
      <SouthGoaDayBlogContent basePath={`/${params.locale}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
