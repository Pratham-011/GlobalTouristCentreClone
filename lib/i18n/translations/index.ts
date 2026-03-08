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

export type LuxuryTrainItem = RawTranslationKeys["luxuryTrain"]["mahraja-train-tour-package"];
export type LuxuryPageItem = RawTranslationKeys["luxuryPages"]["mumbai-luxury"];


export interface TranslationKeys extends Omit<RawTranslationKeys, "tourData" | "luxuryTrain" | "luxuryPages"> {
  tourData: Record<string, TourDataItem>;
  luxuryTrain: Record<string, LuxuryTrainItem>;
  luxuryPages: Record<string, LuxuryPageItem>;
}


export type ExperienceId = keyof typeof translations.en.experiences.items;
export type CollectionId = keyof typeof translations.en.collections.items;
export type HomeItemKey = keyof typeof translations.en.home.items;

/* ✅ NEW — tour slug typing */
export type TripId = keyof RawTranslationKeys["trips"];