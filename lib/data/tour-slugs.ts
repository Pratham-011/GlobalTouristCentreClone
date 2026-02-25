export const LOCALES = ["en", "fr", "it", "de", "ru"] as const;

export const TOUR_CATEGORIES = {
  "day-trips": [
    "south-goa-day-exursion", // verified
    "south-goa-sightseeing-tour", // verified // peresnt in en.ts
    "south-goa-sunset-cruise", // verified // peresnt in en.ts
    "goa-one-day-sightseeing-tour", // verified // peresnt in en.ts
    "dudhsagar-waterfal-excursion", // verified
    "palolem-cola-beach-dolphin-tour", // verified
    "north-goa-day-excursion", // verified
    "goa-sightseeing-tour", // verified //prent in en.ts
    //"crocodile-sightseeing-trip", // temporarily removed (used in home)
    "luxury-yacht-day-tour-goa", // verified
    // "grand-island-water-sports", // temporarily removed (used in home)
    "gokarna-murdeshwar-day-excursion", // verified
    "dandeli-day-excursion",
    "netravali-wildlife-day-excursion", //verified
    "mumbai-one-day-excursion", // verified
  ],

  domestic: [
    "goa-luxury-retreat-serai-cabo", // verified
    "goa-sightseeing-tour", // verified //prent in en.ts
    // "mysore-ooty-tour", // temporarily removed (used in home)
    "aurangabad-heritage-tour-from-goa", // verified
    // "taj-mahal-tour", // temporarily removed (used in home)
    "kerala-tour-package-from-goa", // verified
    "dandeli-2-day-tour-from-goa", // verified
    "amritsar-tour-package-from-goa", // verified
    "golden-triangle-4-day-tour-from-goa", // verified // two are there with same name
    "golden-triangle-tour-from-goa", // verified
    "delhi-agra-tour-from-goa", // verified
    "odhpur-udaipur-tour-from-goa", // temporarily removed (used in home) // verified
    "rajasthan-royal-tour-from-goa", // temporarily removed (used in desination.ts)  // verified
    "north-india-heritage-tour-from-goa", // verified
    "mathura-vrindavan-tour-from-goa", // verified
    "tamil-nadu-tour-package-from-goa", //verified
    "kashmir-tour-package-from-goa", // verified
    "sikkim-darjeeling-gangtok-tour-from-goa", // verified
    "lakshadweep-islands-tour-from-goa", // verified
    "andaman-islands-tour-from-goa", // verified
    // "wondrous-wilderness",
    "hampi-badami-heritage-tour-from-goa", // verified
    "shimoga-nature-tour-from-goa", // verified
    "ajanta-ellora-caves-tour-from-goa", // verified
    // "ladakh-tour-package-from-goa",
    "varanasi-tour-package-from-goa", // verified
    "bijapur-heritage-tour-from-goa", // verified // not used anywhere
    "hyderabad-tour-package-from-goa", // temporarily removed (used in html code) // verified
    "jodhpur-tour-package-from-goa", // verified //temporarily added not used anywhere
    "ladakh-tour-package-from-goa", // temporarily removed (used in en.ts) // verified
    "meghalaya-tour", // verified // temporarily removed (used in en.ts)
  ],

  international: [
    // "maldives-luxury-tour",
    "sri-lanka-tour", // verified
    "bhutan-tour", // verified
    "bali-luxury-getaway", // verified
    "wonders-of-vietnam", // verified
    "best-of-vietnam", // temporarily removed (used in destination.ts) // verified
    // "beautiful-nepal",
    "nepal-muktinath-special", // verified
    "classic-singapore-malaysia", // verified
    "thailand-bangkok-pattaya-tour", //verified
    "thailand-bangkok-pattaya-tour-special", // verified //present in en.ts
    "thailand-tour", // verified
    "thailand-tour-special", // verified
    "turkey-istanbul-cappadocia-tour", // verified
    "glimpse-of-turkey-tour",
    "dubai-luxury-tour", // verified
    "phuket-krabi-island-tour", // verified
    "hong-kong-macau-tour", // verified
    "azerbaijan-baku-tour", // verified
    "cambodia-laos-discovery", // verified
    "georgia-caucasus-adventure", // verified
    "japan-luxury-experience", // verified
    "kazakhstan-almaty-explorer", // temporarily removed (used in destination.ts) // verified
    // "nepal-tour", // temporarily removed (used in en.ts) // verified
  ],

  luxury: [
    "kerala-luxury",
    "mumbai-luxury",
    "golden-triangle-luxury",
    "rajasthan-luxury",
    "karnataka-luxury",
    "mahraja-train-tour-package"
  ],
} as const;
