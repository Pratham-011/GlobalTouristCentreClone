const faqs = [
  {
    question: "What to buy in Goa for ladies?",
    answer:
      "You can shop for jewellery, clothes, spices and local food in Goa. Look for shell and silver jewellery, cotton kaftans, beach dresses, handloom sarees and handmade bags. Cashew nuts, Goan masala and bebinca make good gifts. Try the Anjuna Flea Market, Arpora Saturday Night Market and Panjim's Fontainhas lanes. Bargain politely at flea markets.",
  },
  {
    question: "Is Goa safe for foreign women?",
    answer:
      "Goa is one of India's more tourist-friendly states, and many foreign women travel here safely. Petty theft and scams still happen. Stay in a well-reviewed place in a busy area. Avoid empty beaches after dark. Never leave your drink unattended. Use registered taxis or trusted apps at night. Save 112, the national emergency number. Share your live location with someone you trust.",
  },
  {
    question: "What to wear for a Goa trip for women?",
    answer:
      "Wear light, breathable clothes in cotton, linen or rayon. Pack sundresses, shorts, crop tops, co-ord sets and loose kaftans. Beachwear is fine on the beach. Cover up when you visit churches, temples and local markets. Carry a light shawl or sarong for this. Add a cap or sunglasses for the strong sun.",
  },
  {
    question: "What are the must-have accessories for a Goa trip?",
    answer:
      "You need sunglasses, a wide-brim hat, sunscreen with SPF 30 or higher and a crossbody bag. Add a waterproof pouch for your phone and cash. Carry a reusable water bottle and a power bank. A lightweight scarf helps with sun and temple visits. Keep a small first-aid kit with insect repellent.",
  },
  {
    question: "How do you pack a Goa trip suitcase efficiently for women?",
    answer:
      "Pack light and roll your clothes. Stick to a simple colour palette so outfits mix and match. Use packing cubes to separate swimwear, daywear and evening wear. Keep toiletries in travel-size bottles. Put heavy items at the bottom. Leave some space for shopping. Carry a separate bag for wet swimwear.",
  },
  {
    question: "What are some good Goa accessories for women?",
    answer:
      "Boho jewellery suits Goa's beach mood. Pick shell necklaces, silver anklets, beaded bracelets and oxidised earrings. Carry a straw or jute tote for the beach. Add a bandana, scrunchies and a pair of statement sunglasses. Choose waterproof or lightweight pieces. Skip expensive jewellery, as sand and seawater can damage it.",
  },
  {
    question: "What essential items should women pack for a trip to Goa?",
    answer:
      "Pack sunscreen, sunglasses, swimwear, light clothes, flip-flops and a hat. Carry a basic medical kit, insect repellent and any regular medicines. Bring a power bank, a universal adapter and copies of your ID. Add sanitary products, since stock can be limited at some beaches. Keep a small lock for your bag and hostel locker.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};
