/**
 * lib/i18n/seo.ts
 *
 * Utility for generating SEO metadata — including hreflang alternate links —
 * in Next.js 14 App Router pages via `generateMetadata`.
 *
 * Usage in page.tsx:
 *
 *   import { buildAlternates } from "@/lib/i18n/seo";
 *
 *   export async function generateMetadata({ params }): Promise<Metadata> {
 *     return {
 *       alternates: buildAlternates("/destinations"),
 *       // ...other metadata
 *     };
 *   }
 *
 * This produces hreflang link tags such as:
 *   <link rel="alternate" hreflang="en"        href="https://globaltouristcentre.com/destinations/" />
 *   <link rel="alternate" hreflang="ru"        href="https://globaltouristcentre.com/ru/destinations/" />
 *   <link rel="alternate" hreflang="fr"        href="https://globaltouristcentre.com/fr/destinations/" />
 *   <link rel="alternate" hreflang="de"        href="https://globaltouristcentre.com/de/destinations/" />
 *   <link rel="alternate" hreflang="it"        href="https://globaltouristcentre.com/it/destinations/" />
 *   <link rel="alternate" hreflang="x-default" href="https://globaltouristcentre.com/destinations/" />
 */

import type { Metadata } from "next";
import { locales, defaultLocale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

/** All supported locales including the unprefixed English default. */
const allLocales = [defaultLocale, ...locales] as const;

/**
 * Constructs the absolute canonical URL for a given locale + path.
 *
 * - English (defaultLocale):  SITE_URL/path/
 * - Other locales:            SITE_URL/{locale}/path/
 *
 * Trailing slashes are normalised to match `trailingSlash: true` in next.config.
 */
export function buildLocalizedUrl(locale: string, path: string): string {
  // Normalise: strip leading slash, we'll re-add it
  const cleanPath = path.replace(/^\/+/, "").replace(/\/+$/, "");

  const segments =
    locale === defaultLocale
      ? cleanPath
        ? `/${cleanPath}/`
        : "/"
      : cleanPath
      ? `/${locale}/${cleanPath}/`
      : `/${locale}/`;

  return `${SITE_URL}${segments}`;
}

/**
 * Generates a Next.js `Metadata.alternates` object with hreflang links for all
 * supported languages plus `x-default` pointing to the English version.
 *
 * @param path - The page path WITHOUT a locale prefix (e.g. "/destinations").
 *               Pass "/" or "" for the homepage.
 *
 * @example
 *   alternates: buildAlternates("/about")
 *   // → canonical + hreflang for en, ru, fr, de, it, x-default
 */
export function buildAlternates(path: string = "/"): Metadata["alternates"] {
  const languages: Record<string, string> = {};

  for (const locale of allLocales) {
    languages[locale] = buildLocalizedUrl(locale, path);
  }

  // x-default should point to the canonical (English) version
  languages["x-default"] = buildLocalizedUrl(defaultLocale, path);

  return {
    canonical: buildLocalizedUrl(defaultLocale, path),
    languages,
  };
}
