"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/translations";
// import { locales } from "@/lib/i18n/config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components-eng/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const ROUTE_LOCALES: Locale[] = ["ru", "de", "it", "fr"];

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "it", label: "IT" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];



type LanguageSwitcherProps = {
  variant?: "dark" | "light";
};

/* --------------------------------------------------
   Helpers
-------------------------------------------------- */
function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/")[1];
  return ROUTE_LOCALES.includes(firstSegment as Locale)
    ? (firstSegment as Locale)
    : "en";
}

function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (ROUTE_LOCALES.includes(firstSegment as Locale)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname === "" ? "/" : pathname;
}


/* --------------------------------------------------
   Component
-------------------------------------------------- */
export function LanguageSwitcher({ variant = "dark" }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = getLocaleFromPath(pathname);

  function handleLanguageChange(newLocale: Locale) {
    if (newLocale === currentLocale) return;
    const basePath = stripLocaleFromPath(pathname);


    // Switch to English → no locale prefix
    if (newLocale == "en") {
      router.replace(basePath || "/");
      router.refresh()
      return;
    }

    // Switch to non-English → add locale prefix
    router.replace(`/${newLocale}${basePath === "/" ? "" : basePath}`);
  }

  return (
    <>
      <div className="hidden lg:flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="
          group inline-flex items-center gap-2
          px-5 py-2.5 rounded-full
          text-sm font-semibold uppercase tracking-wider
          text-white
          bg-black/30 backdrop-blur-md
          border border-white/20
          shadow-sm
          transition-all duration-200
          hover:bg-black/40
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
        "
              aria-label="Select language"
            >
              {currentLocale.toUpperCase()}
              <ChevronDown
                className="
            h-4 w-4
            transition-transform duration-200
            group-data-[state=open]:rotate-180
          "
              />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="
        min-w-[140px]
        rounded-xl
        border border-gray-200
        bg-white
        shadow-lg
        p-1
      "
          >
            {languages.map((lang) => {
              const isActive = lang.code === currentLocale;

              return (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`
              flex items-center justify-between
              rounded-lg px-3 py-2.5
              text-sm font-medium
              cursor-pointer
              transition-colors
              ${isActive
                      ? "bg-amber-50 text-amber-600" // Golden background tint & Golden text
                      : "text-gray-700 hover:bg-gray-100"
                    }
            `}
                >
                  {lang.label}
                  {isActive && (
                    // Also made the checkmark golden
                    <span className="text-xs font-bold text-amber-600">✓</span>
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* //mobile  */}
      <div className="lg:hidden">
        <div
          className={`
      flex gap-1 p-1 rounded-full border
      ${variant === "dark"
              ? "bg-white/10 backdrop-blur-md border-white/20"
              : "bg-gray-100 border-gray-200"
            }
    `}
          aria-label="Language selector"
        >
          {languages.map((lang) => {
            const isActive = currentLocale === lang.code;

            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Switch language to ${lang.label}`}
                className={`
            px-3 py-1.5 rounded-full
            text-xs font-medium uppercase tracking-wide
            transition-all duration-300
            ${isActive
                    ? "bg-[#f8d56b] text-gray-900 shadow-sm"
                    : variant === "dark"
                      ? "text-white hover:text-[#f8d56b] hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-200"
                  }
          `}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

