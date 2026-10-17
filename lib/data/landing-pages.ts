/* ------------------------------------------------------------------ */
/* Google Ads landing pages — one config per destination.             */
/* Structure follows the agreed layout: hero, lead form, packages,    */
/* destination tiles, reviews, gallery, FAQ.                          */
/* ------------------------------------------------------------------ */

export type LandingPackage = {
  name: string;
  duration: string;
  price: string;
  route: string;
  image: string;
  highlights: string[];
};

export type LandingTile = {
  image: string;
  title: string;
  subtitle: string;
};

export type LandingFaq = { q: string; a: string };

export type LandingPageData = {
  slug: string;
  /** Short label used in the form subject line and the thank-you page */
  destination: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Lowest live package price for this destination */
  priceFrom: string;
  heroImage: string;
  heroCollage: string[];
  packages: LandingPackage[];
  tiles: LandingTile[];
  gallery: string[];
  faqs: LandingFaq[];
};

/** Shared across all three pages */
export const LANDING_STATS = [
  { value: "15+ Years", label: "Travel experience" },
  { value: "4.9★", label: "Traveller rating" },
  { value: "Customised Trips", label: "families & couples" },
] as const;

export const TRAVEL_WITH = ["Family", "Couple", "Friends", "Group"] as const;

export const DURATIONS = [
  "4 – 5 days",
  "6 – 7 days",
  "8 – 10 days",
  "More than 10 days",
  "Not decided yet",
] as const;

export const BUDGETS = [
  "Under ₹50,000",
  "₹50,000 – ₹75,000",
  "₹75,000 – ₹1,00,000",
  "Above ₹1,00,000",
] as const;

/* ------------------------------------------------------------------ */

const SINGAPORE: LandingPageData = {
  slug: "singapore-malaysia-tour-packages",
  destination: "Singapore & Malaysia",
  titleTag: "Singapore Malaysia Tour Packages for Families & Couples",
  metaDescription:
    "Explore Singapore and Malaysia with customised tour packages for families and couples. Enjoy exciting attractions, comfortable stays and memorable experiences with Global Tourist Centre.",
  h1: "Best Singapore Malaysia Tour Package From Goa",
  intro:
    "Discover Singapore's iconic skyline, exciting attractions and vibrant city life, then experience Malaysia's cultural charm, beautiful landscapes and family-friendly adventures. Choose from thoughtfully planned tour packages for families and couples, with transparent pricing and customisable itineraries.",
  priceFrom: "₹52,499",
  heroImage: "/assets/hero/Singapore-hero.webp",
  heroCollage: [
    "/assets/destinations/Singapore/Marina Bay Sands.webp",
    "/assets/destinations/Singapore/Gardens by the Bay.webp",
    "/assets/destinations/Singapore/Petronas Twin Towers.webp",
  ],
  packages: [
    {
      name: "Singapore Malaysia Tour",
      duration: "6N / 7D",
      price: "₹52,499",
      route: "Singapore – Kuala Lumpur",
      image: "/assets/destinations/Singapore/Marina Bay Sands.webp",
      highlights: ["5-star stays", "Sightseeing", "Transfers", "Breakfast"],
    },
  ],
  tiles: [
    {
      image: "/assets/destinations/Singapore/Marina Bay Sands.webp",
      title: "Marina Bay Sands",
      subtitle: "Singapore's skyline icon",
    },
    {
      image: "/assets/destinations/Singapore/Gardens by the Bay.webp",
      title: "Gardens by the Bay",
      subtitle: "Supertrees & Cloud Forest",
    },
    {
      image: "/assets/destinations/Singapore/Universal Studios.webp",
      title: "Universal Studios",
      subtitle: "Family favourite on Sentosa",
    },
    {
      image: "/assets/destinations/Singapore/Petronas Twin Towers.webp",
      title: "Petronas Twin Towers",
      subtitle: "Kuala Lumpur landmark",
    },
    {
      image: "/assets/destinations/Singapore/Batu Caves.webp",
      title: "Batu Caves",
      subtitle: "Limestone caves & temples",
    },
  ],
  gallery: [
    "/assets/destinations/Singapore/Marina Bay Sands.webp",
    "/assets/destinations/Singapore/Gardens by the Bay.webp",
    "/assets/destinations/Singapore/Universal Studios.webp",
    "/assets/destinations/Singapore/Petronas Twin Towers.webp",
    "/assets/destinations/Singapore/Batu Caves.webp",
  ],
  faqs: [
    {
      q: "How long is the flight from Goa to Singapore?",
      a: "There are generally no regular nonstop flights from Goa to Singapore, so travellers usually connect through another city. The total journey typically takes around 7–12 hours or more, depending on the connecting airport and layover time. We can help you find suitable flight options from Goa based on your travel dates and preferred schedule.",
    },
    {
      q: "What's included in the Singapore–Malaysia tour package price?",
      a: "Our package inclusions depend on the itinerary you choose. They may include hotel stays, airport transfers, sightseeing, selected attraction tickets, breakfast and transfers between Singapore and Malaysia. Flights, visa fees, travel insurance and other meals may be included or charged separately, so we'll clearly explain what's covered before you book.",
    },
    {
      q: "Can we customise the tour for our family or couple trip?",
      a: "Absolutely! Every traveller has different preferences. Families can include theme parks, kid-friendly attractions and comfortable sightseeing, while couples can opt for scenic experiences, romantic dinners or a more relaxed itinerary. Tell us your travel dates, budget and interests, and we'll help plan a trip that suits you.",
    },
    {
      q: "What if the number of travellers changes?",
      a: "That's okay — just let us know as early as possible. We'll check hotel availability, transport arrangements and any changes to attraction bookings. The total price may change depending on the final group size, room requirements and supplier policies. Any applicable extra costs or cancellation charges will be explained to you.",
    },
    {
      q: "Do you provide assistance during the trip?",
      a: "Yes, we provide travel assistance according to your booking arrangements. Our team can help with itinerary questions, transfer coordination and general travel-related concerns during your holiday. Before departure, we'll share your confirmed itinerary, booking details and the appropriate contact information so you know whom to reach if you need help.",
    },
  ],
};

const VIETNAM: LandingPageData = {
  slug: "vietnam-tour-packages",
  destination: "Vietnam",
  titleTag: "Vietnam Tour Packages for Families & Couples",
  metaDescription:
    "Explore Vietnam tour packages from Goa with customised itineraries for families, couples and friends. Discover Ha Long Bay, Hanoi, Da Nang and Hoi An with Global Tourist Centre.",
  h1: "Best Vietnam Tour Package From Goa",
  intro:
    "From the lantern-lit streets of Hoi An to the breathtaking limestone islands of Ha Long Bay, experience Vietnam's culture, natural beauty and unforgettable adventures. Explore thoughtfully planned Vietnam holiday packages for families, couples and friends, with customisable itineraries to suit your travel style and budget.",
  priceFrom: "₹54,999",
  heroImage: "/assets/hero/Vietnam-hero.webp",
  heroCollage: [
    "/assets/destinations/Vietnam/Ha Long Bay.webp",
    "/assets/destinations/Vietnam/Golden Bridge.webp",
    "/assets/destinations/Vietnam/Hoi An.webp",
  ],
  packages: [
    {
      name: "Vietnam Tour Package",
      duration: "5N / 6D",
      price: "₹54,999",
      route: "Hanoi – Ha Long Bay",
      image: "/assets/destinations/Vietnam/Ha Long Bay.webp",
      highlights: ["Max 15 travellers", "AC vehicles", "Sightseeing", "Breakfast"],
    },
    {
      name: "Vietnam Grand Tour",
      duration: "7N / 8D",
      price: "₹64,999",
      route: "Hanoi – Da Nang – Hoi An",
      image: "/assets/destinations/Vietnam/Golden Bridge.webp",
      highlights: ["3★/4★ hotels", "Ocean view", "Transfers", "Breakfast"],
    },
  ],
  tiles: [
    {
      image: "/assets/destinations/Vietnam/Ha Long Bay.webp",
      title: "Ha Long Bay",
      subtitle: "UNESCO limestone islands",
    },
    {
      image: "/assets/destinations/Vietnam/Golden Bridge.webp",
      title: "Golden Bridge",
      subtitle: "Ba Na Hills, Da Nang",
    },
    {
      image: "/assets/destinations/Vietnam/Hoi An.webp",
      title: "Hoi An",
      subtitle: "Lantern-lit old town",
    },
    {
      image: "/assets/destinations/Vietnam/Hanoi.webp",
      title: "Hanoi",
      subtitle: "Old Quarter & street life",
    },
    {
      image: "/assets/destinations/Vietnam/Mekong Delta.webp",
      title: "Mekong Delta",
      subtitle: "River villages & markets",
    },
  ],
  gallery: [
    "/assets/destinations/Vietnam/Ha Long Bay.webp",
    "/assets/destinations/Vietnam/Golden Bridge.webp",
    "/assets/destinations/Vietnam/Hoi An.webp",
    "/assets/destinations/Vietnam/Hanoi.webp",
    "/assets/destinations/Vietnam/Mekong Delta.webp",
    "/assets/destinations/Vietnam/Local Cuisine.webp",
  ],
  faqs: [
    {
      q: "How long is the flight from Goa to Vietnam?",
      a: "There are generally no regular nonstop flights from Goa to Vietnam, so travellers usually connect through another city. The total journey typically takes around 7–12 hours or more, depending on the connecting airport and layover time. We can help you find suitable flight options from Goa based on your travel dates and preferred schedule.",
    },
    {
      q: "What's included in the Vietnam tour package price?",
      a: "Our package inclusions depend on the itinerary you choose. They may include hotel stays, airport transfers, sightseeing, selected attraction tickets, breakfast and transfers within Vietnam. Flights, visa fees, travel insurance and other meals may be included or charged separately, so we'll clearly explain what's covered before you book.",
    },
    {
      q: "Can we customise the tour for our family or couple trip?",
      a: "Absolutely! Every traveller has different preferences. Families can include theme parks, kid-friendly attractions and comfortable sightseeing, while couples can opt for scenic experiences, romantic dinners or a more relaxed itinerary. Tell us your travel dates, budget and interests, and we'll help plan a trip that suits you.",
    },
    {
      q: "What if the number of travellers changes?",
      a: "That's okay — just let us know as early as possible. We'll check hotel availability, transport arrangements and any changes to attraction bookings. The total price may change depending on the final group size, room requirements and supplier policies. Any applicable extra costs or cancellation charges will be explained to you.",
    },
    {
      q: "Do you provide assistance during the trip?",
      a: "Yes, we provide travel assistance according to your booking arrangements. Our team can help with itinerary questions, transfer coordination and general travel-related concerns during your holiday. Before departure, we'll share your confirmed itinerary, booking details and the appropriate contact information so you know whom to reach if you need help.",
    },
  ],
};

const AZERBAIJAN: LandingPageData = {
  slug: "azerbaijan-tour-packages",
  destination: "Azerbaijan",
  titleTag: "Azerbaijan Tour Packages for Families & Couples",
  metaDescription:
    "Explore Azerbaijan tour packages from Goa for families and couples. Discover Baku, Gabala and Shahdag with customised itineraries and memorable travel experiences.",
  h1: "Best Azerbaijan Tour Package From Goa",
  intro:
    "Experience the charm of Baku's modern skyline, explore the historic streets of the Old City, and escape to the scenic mountain landscapes of Gabala and Shahdag. Discover Azerbaijan with thoughtfully planned holiday packages for families and couples, featuring memorable sightseeing, comfortable stays and itineraries tailored to your travel preferences.",
  priceFrom: "₹47,999",
  heroImage: "/assets/hero/Baku-hero.webp",
  heroCollage: [
    "/assets/destinations/Baku/Flame_Towers.webp",
    "/assets/destinations/Baku/Shahdag_Mountain.webp",
    "/assets/destinations/Baku/Nohur_Lake.webp",
  ],
  packages: [
    {
      name: "Baku Tour Package",
      duration: "6N / 7D",
      price: "₹47,999",
      route: "Baku – Gabala – Shahdag",
      image: "/assets/destinations/Baku/Flame_Towers.webp",
      highlights: ["Quality hotels", "All meals", "Sightseeing", "Transfers"],
    },
  ],
  tiles: [
    {
      image: "/assets/destinations/Baku/Flame_Towers.webp",
      title: "Flame Towers",
      subtitle: "Baku's modern skyline",
    },
    {
      image: "/assets/destinations/Baku/Shahdag_Mountain.webp",
      title: "Shahdag Mountain",
      subtitle: "Alpine resort escape",
    },
    {
      image: "/assets/destinations/Baku/Nohur_Lake.webp",
      title: "Nohur Lake",
      subtitle: "Gabala's emerald water",
    },
    {
      image: "/assets/destinations/Baku/Gobustan_Rock_Carvings.webp",
      title: "Gobustan",
      subtitle: "UNESCO rock carvings",
    },
    {
      image: "/assets/destinations/Baku/Yanar_Dag.webp",
      title: "Yanar Dag",
      subtitle: "The burning mountain",
    },
  ],
  gallery: [
    "/assets/destinations/Baku/Flame_Towers.webp",
    "/assets/destinations/Baku/Shahdag_Mountain.webp",
    "/assets/destinations/Baku/Nohur_Lake.webp",
    "/assets/destinations/Baku/Gobustan_Rock_Carvings.webp",
    "/assets/destinations/Baku/Yanar_Dag.webp",
    "/assets/destinations/Baku/Sheki_Khans_Palace.webp",
  ],
  faqs: [
    {
      q: "How long is the flight from Goa to Azerbaijan?",
      a: "There are generally no regular nonstop flights from Goa to Azerbaijan, so travellers usually connect through another city. The total journey typically takes around 8–14 hours or more, depending on the connecting airport and layover time. We can help you find suitable flight options from Goa based on your travel dates and preferred schedule.",
    },
    {
      q: "What's included in the Azerbaijan tour package price?",
      a: "Our package inclusions depend on the itinerary you choose. They may include hotel stays, airport transfers, sightseeing, selected attraction tickets, breakfast and transfers within Azerbaijan. Flights, visa fees, travel insurance and other meals may be included or charged separately, so we'll clearly explain what's covered before you book.",
    },
    {
      q: "Can we customise the tour for our family or couple trip?",
      a: "Absolutely! Every traveller has different preferences. Families can include theme parks, kid-friendly attractions and comfortable sightseeing, while couples can opt for scenic experiences, romantic dinners or a more relaxed itinerary. Tell us your travel dates, budget and interests, and we'll help plan a trip that suits you.",
    },
    {
      q: "What if the number of travellers changes?",
      a: "That's okay — just let us know as early as possible. We'll check hotel availability, transport arrangements and any changes to attraction bookings. The total price may change depending on the final group size, room requirements and supplier policies. Any applicable extra costs or cancellation charges will be explained to you.",
    },
    {
      q: "Do you provide assistance during the trip?",
      a: "Yes, we provide travel assistance according to your booking arrangements. Our team can help with itinerary questions, transfer coordination and general travel-related concerns during your holiday. Before departure, we'll share your confirmed itinerary, booking details and the appropriate contact information so you know whom to reach if you need help.",
    },
  ],
};

export const LANDING_PAGES: Record<string, LandingPageData> = {
  [SINGAPORE.slug]: SINGAPORE,
  [VIETNAM.slug]: VIETNAM,
  [AZERBAIJAN.slug]: AZERBAIJAN,
};
