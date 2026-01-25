export const locales = ["ru", "it", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = "en";
