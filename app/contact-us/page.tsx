

import { ContactHero } from "./ContactHero";
import { ContactInfoGrid } from "./ContactInfoGrid";
import { ContactForm } from "./ContactForm";
import { ContactFAQ } from "./ContactFAQ";
import ContactTitle from "./ContactTitle";
import ContactFaqTitle from "./ContactFaqTitle";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";


type PageProps = {
  params: {
    locale: string;
  };
};


export async function generateMetadata({params}: {params: PageProps["params"];
}): Promise<Metadata> {
  const t = await getTranslations(params.locale);

  const image ="/assets/hero/Contact-hero.webp";

  return {
    title: t.metadata?.contact?.title ?? "Contact Us | Global Tourist Centre",
    description:t.metadata?.contact?.description ?? "Contact Global Tourist Centre for personalized travel packages and visa assistance.",
    alternates: {
      canonical: `https://globaltouristcentre.com/${params.locale}/contact-us`,
    },
    openGraph: {
      title: t.metadata?.contact?.title ?? "Contact Us | Global Tourist Centre",
      description:t.metadata?.contact?.description ?? "Contact Global Tourist Centre for personalized travel packages and visa assistance.",
      images: [image],
      siteName: t.metadata?.brandname,
      type: "website",
      url: `https://globaltouristcentre.com/${params.locale}/contact-us`,
    },
    twitter: {
      title: t.metadata?.contact?.title ?? "Contact Us | Global Tourist Centre",
      description:t.metadata?.contact?.description ?? "Contact Global Tourist Centre for personalized travel packages and visa assistance.",
      card: "summary_large_image",
      images: [ 
        {
          url: image,
          width: 1200,
          height: 630,
          alt: t.metadata?.contact?.title ?? "Contact Us | Global Tourist Centre",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title ABOVE the grid */}
          <ContactTitle />

          {/* Grid starts AFTER title */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <ContactInfoGrid />
            <div className="lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <ContactFaqTitle />
      <ContactFAQ />
    </>
  );
}
