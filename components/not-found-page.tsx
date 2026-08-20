"use client";

import Link from "next/link";
import { ArrowRight, Mountain, Compass, LifeBuoy, MapPin, Sparkles } from "lucide-react";
import { Header } from "@/components-eng/header";
import { useI18n } from "@/lib/i18n/context";

function getLocalizedHref(locale: string, path: string) {
  return locale === "en" ? path : `/${locale}${path}`;
}

export function NotFoundPage() {
  const { t, locale } = useI18n();

  const primaryHref = getLocalizedHref(locale, "/");
  const destinationsHref = getLocalizedHref(locale, "/destinations");
  const contactHref = getLocalizedHref(locale, "/contact-us");

  return (
    <div className="min-h-screen bg-[#0f1724] text-white overflow-hidden">
      <Header />

      <main className="relative isolate flex min-h-[calc(100vh-0px)] items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,213,107,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(13,148,136,0.16),_transparent_28%),linear-gradient(180deg,_#172033_0%,_#0f1724_52%,_#0d1420_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.16)_100%)]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-4%] bottom-[12%] h-56 w-[42vw] max-w-[38rem] rounded-[55%_45%_0_0] bg-[linear-gradient(180deg,#24324b_0%,#101927_100%)] opacity-95 shadow-[0_-18px_60px_rgba(0,0,0,0.35)]" />
          <div className="absolute left-[18%] bottom-[8%] h-44 w-[34vw] max-w-[30rem] rounded-[60%_40%_0_0] bg-[linear-gradient(180deg,#31435e_0%,#121b2b_100%)] opacity-90 shadow-[0_-18px_60px_rgba(0,0,0,0.3)]" />
          <div className="absolute right-[-6%] bottom-[10%] h-52 w-[40vw] max-w-[36rem] rounded-[48%_52%_0_0] bg-[linear-gradient(180deg,#202c43_0%,#0e1523_100%)] opacity-95 shadow-[0_-18px_60px_rgba(0,0,0,0.3)]" />
          <div className="absolute left-1/2 top-[18%] h-52 w-52 -translate-x-1/2 rounded-full bg-[#f8d56b]/10 blur-3xl" />
          <div className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-white/80 shadow-[0_0_22px_rgba(255,255,255,0.85)]" />
          <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-[#f8d56b] shadow-[0_0_16px_rgba(248,213,107,0.8)]" />
          <div className="absolute right-[18%] top-[20%] h-3 w-3 rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
        </div>

        <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#f8d56b]">
              <Sparkles className="h-4 w-4" />
              {t.notfound.title}
            </div>

            <div className="relative mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full border border-[#f8d56b]/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_60px_rgba(248,213,107,0.12)] sm:h-44 sm:w-44">
              <div className="absolute inset-3 rounded-full border border-dashed border-[#f8d56b]/35" />
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,_rgba(248,213,107,0.16),_transparent_70%)]" />
              <Compass className="absolute h-14 w-14 text-white/70 sm:h-16 sm:w-16" />
              <span className="absolute bottom-8 right-7 rotate-12 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#f8d56b]/80">
                N
              </span>
              <span className="absolute top-8 right-8 -rotate-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/60">
                E
              </span>
              <span className="absolute top-8 left-8 rotate-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/60">
                W
              </span>
              <span className="absolute bottom-8 left-7 -rotate-12 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#f8d56b]/80">
                S
              </span>
              <span className="font-serif text-6xl font-semibold tracking-tight text-[#f8d56b] sm:text-7xl">
                404
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {t.notfound.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {t.notfound.description}
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm uppercase tracking-[0.28em] text-slate-400">
              {locale === "en"
                ? "Let us guide you back to incredible destinations and unforgettable experiences"
                : "Позвольте нам вернуть вас к невероятным направлениям и незабываемым впечатлениям"}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#f8d56b] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-white"
              >
                {t.notfound.buttons.home}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={destinationsHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:border-[#f8d56b]/50 hover:bg-white/10"
              >
                {t.notfound.buttons.destinations}
              </Link>
              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:border-[#f8d56b]/50 hover:bg-white/10"
              >
                <LifeBuoy className="h-4 w-4" />
                {t.notfound.buttons.contact}
              </Link>
            </div>

            <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: locale === "en" ? "Back on track" : "Вернуться на путь",
                  text:
                    locale === "en"
                      ? "Find curated trips, travel support, and destinations from Goa."
                      : "Найдите подобранные туры, поддержку в поездке и направления из Гоа.",
                },
                {
                  icon: Compass,
                  title: locale === "en" ? "Fresh direction" : "Новое направление",
                  text:
                    locale === "en"
                      ? "Use the navigation above to head toward the right page."
                      : "Используйте навигацию выше, чтобы перейти на нужную страницу.",
                },
                {
                  icon: LifeBuoy,
                  title: locale === "en" ? "Need help" : "Нужна помощь",
                  text:
                    locale === "en"
                      ? "Reach out and we'll help you find the journey you wanted."
                      : "Свяжитесь с нами, и мы поможем найти нужное путешествие.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f8d56b]/15 text-[#f8d56b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-lg font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
