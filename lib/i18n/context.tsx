"use client";

import { createContext, useContext, useMemo } from "react";
import {
  translations,
  type Locale,
  type TranslationKeys,
} from "./translations/index";

interface I18nContextType {
  locale: Locale;
  t: any;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      locale,
      t: translations[locale],
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}
