export const luxuryPageContent = {
  "kerala-luxury": {
    image: "/assets/Luxury/Kerala/KeralaBackwaters.webp",
  },
  "mumbai-luxury": {
    image: "/assets/Luxury/Mumbai/mumbai-hero.webp",
  },
  "golden-triangle-luxury": {
    image: "/assets/Luxury/Golden Triangle/hero.webp",
  },
  "rajasthan-luxury": {
    image: "/assets/Luxury/Rajasthan/Rajasthan-Luxury-hero.webp",
  },
  "karnataka-luxury": {
    image: "/assets/Luxury/Karnataka/hero.webp",
  },
} as const;

export const LUXURY_TRAIN_CONTENT = {
  "maharaja-train-tour-package": {
    image: "/assets/Luxury/Maharaja/maharaja-hero.webp",
  },
} as const;

export type LuxuryTrainSlug = keyof typeof LUXURY_TRAIN_CONTENT;

export const LUXURY_TOUR_SLUGS = [
  "4n-5d-rajasthan-luxury-package",
  "6n-7d-golden-triangle-luxury-tour-package",
  "6n-7d-rajasthan-luxury-package",
  "golden-triangle-luxury-package",
  "karnataka-luxury-package",
  "kerala-luxury-package",
  "kerala-luxury-tour-package",
  "mumbai-luxury-package",
  "rajasthan-luxury-package",
] as const;

export type LuxuryTourSlug = (typeof LUXURY_TOUR_SLUGS)[number];

export type LuxurySlug = keyof typeof luxuryPageContent;

export const DESTINATION_TOURS: Partial<Record<LuxurySlug, LuxuryTourSlug[]>> = {
  "kerala-luxury": [
    "kerala-luxury-package",
    "kerala-luxury-tour-package",
  ],

  "mumbai-luxury": [
    "mumbai-luxury-package",
  ],

  "golden-triangle-luxury": [
    "golden-triangle-luxury-package",
    "6n-7d-golden-triangle-luxury-tour-package",
  ],

  "rajasthan-luxury": [
    "4n-5d-rajasthan-luxury-package",
    "6n-7d-rajasthan-luxury-package",
    "rajasthan-luxury-package",
  ],

  "karnataka-luxury": [
    "karnataka-luxury-package",
  ],
};