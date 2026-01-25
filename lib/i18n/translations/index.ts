import { en } from "./en";
import { it } from "./it";
import { fr } from "./fr";
import { ru } from "./ru";
import { de } from "./de";

export const translations = {
  en,
  fr,
  it,
  ru,
  de,
} as const;

export type Locale = keyof typeof translations;
type RawTranslationKeys = typeof translations.en;
export type TourDataItem = RawTranslationKeys["tourData"]["aurangabad-heritage-tour-from-goa"];

export interface TranslationKeys extends Omit<RawTranslationKeys, "tourData"> {
  tourData: Record<string, TourDataItem>;
}

export type ExperienceId = keyof typeof translations.en.experiences.items;
export type CollectionId = keyof typeof translations.en.collections.items;
export type HomeItemKey = keyof typeof translations.en.home.items;

/* ✅ NEW — tour slug typing */
export type TripId = keyof RawTranslationKeys["trips"];