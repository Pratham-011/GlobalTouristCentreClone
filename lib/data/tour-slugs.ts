export const LOCALES = ["en", "fr", "it", "de", "ru"] as const;

export const TOUR_CATEGORIES = {
  "day-trips": [
    "south-goa-1-day-cultural-and-beach-tour-package", // verified
    // "south-goa-sightseeing-tour", // verified // peresnt in en.ts
    "south-goa-sunset-cruise", // verified // peresnt in en.ts
    // "goa-one-day-sightseeing-tour", // verified // peresnt in en.ts
    "dudhsagar-spice-plantation-day-trip-package", // verified
    "south-goa-1-day-trip-package", // verified
    "one-day-south-goa-trip-package",
    "north-goa-english-tour", // verified
    // "goa-sightseeing-tour", // verified //prent in en.ts
    "hampi-1n-2d-trip-package", // verified
    "luxury-yacht-day-tour-goa", // verified
    "gokarna-murdeshwar-one-day-trip-package", // verified
    "dandeli-elephant-safari-day-trip-package",
    "netravali-day-trip-package", //verified
    "mumbai-day-trip-package", // verified
    "aurangabad-1n-2d-trip-package", // verified
    "delhi-agra-1n-2d-trip-package",
    "cabo-serai-2n-3d-luxury-getaway",
    "1n-2d-shimoga-trip-package",
    "wondrous-wildernest-trip-package",

  ],

  domestic: [
    // verified
    "andaman-islands-tour-from-goa",
    "goa-sightseeing-tour", // verified //prent in en.ts
    // "mysore-ooty-tour", // temporarily removed (used in home)
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

    // verified
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
    "srilanka-tour-package", // verified
    "7n-8d-bhutan-tour-package", // verified
    "bali-tour-package", // verified
    "7n-8d-vietam-tour-package", // verified
    "vitnam-tour-package-from-goa", // temporarily removed (used in destination.ts) // verified
    "singapore-tour-package", // verified
    "4N-5D-bangkok-tour-package", //verified
    "7N-8D-thailand-tour-package", // verified
    "3N-4D-thailand-tour-package", // verified
    "thailand-bangkok-pattaya-tour-special", // verified //present in en.ts
    "8n-9d-turkey-tour-package", // verified
    "turkey-tour-package",
    "dubai-tour-package", // verified
    "phuket-krabi-tour-package", // verified
    "5n-6d-hongkong-tour-package", // verified
    "baku-tour-package", // verified
    "combodia-tour-package", // verified
    "georgia-tour-package", // verified
    "japan-tour-package", // verified
    "kazakhstan-almaty-explorer", // temporarily removed (used in destination.ts) // verified
    "nepal-tour-package", // temporarily removed (used in en.ts) // verified
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
