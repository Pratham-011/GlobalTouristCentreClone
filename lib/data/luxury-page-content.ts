export const luxuryPageContent = {
  "kerala-luxury": {
    image: "/assets/Luxury/Kerala/Kerala Backwaters.webp",
  },
  "mumbai-luxury": {
    image: "/assets/Luxury/Mumbai/mumbai-hero.webp",
  },
  "golden-triangle-luxury": {
    image: "/assets/Luxury/Golden Triangle/golden-triangle-thumb.webp",
  },
  "rajasthan-luxury": {
    image: "/assets/Luxury/Rajasthan/Rajasthan-Luxury-hero.webp",
  },
  "karnataka-luxury": {
    image: "/assets/Luxury/Karnataka/hero.webp",
  },
  "mahraja-train-tour-package": {
    image: "/assets/Luxury/Maharaja/maharaja.webp",
  },

} as const;

export const LUXURY_TOUR_SLUGS = [
  "4n-5d-rajasthan-luxury-package",
  "6n-7d-golden-triangle-luxury-tour-package",
  "6n-7d-rajasthan-luxury-package",
  "golden-triangle-luxury-package",
  "karnataka-luxury-package",
  "kerala-luxury-package",
  "mumbai-luxury-package",
  "rajasthan-luxury-package",
  "kerala-luxury-tour-package",
  "indian-splendour"
] as const;


export type LuxurySlug = keyof typeof luxuryPageContent;
export type LuxuryTourSlug = (typeof LUXURY_TOUR_SLUGS)[number];

/**
 * Mapping of destination slugs to their valid tour package slugs.
 * This ensures generateStaticParams() only creates valid routes.
 */
export const DESTINATION_TOURS: Record<LuxurySlug, LuxuryTourSlug[]> = {
  "kerala-luxury": ["kerala-luxury-package", "kerala-luxury-tour-package"],
  "mumbai-luxury": ["mumbai-luxury-package"],
  "golden-triangle-luxury": ["golden-triangle-luxury-package", "6n-7d-golden-triangle-luxury-tour-package"],
  "rajasthan-luxury": ["4n-5d-rajasthan-luxury-package", "6n-7d-rajasthan-luxury-package", "rajasthan-luxury-package"],
  "karnataka-luxury": ["karnataka-luxury-package"],
  "mahraja-train-tour-package": ["indian-splendour"],
};

