// lib/i18n/getTranslations.ts
import { translations } from "./translations/index";

export function getTranslations(locale: string) {
  return (translations as any)[locale] ?? translations.en;
}
