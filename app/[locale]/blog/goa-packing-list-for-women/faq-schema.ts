import { getFaqs } from "./content";

export function getFaqSchema(locale: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getFaqs(locale).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
