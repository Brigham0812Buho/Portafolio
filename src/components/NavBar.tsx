"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/components/LanguageProvider";

export function Navbar() {
  const { locale, setLocale, translations } = useLanguage();
  const { home, experience, projects, contact, context } = translations.navbar;

  return (
    <header className="sticky top-0 z-20 bg-[rgba(5,12,26,0.95)] backdrop-blur border-b border-[rgba(93,224,255,0.18)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between gap-3">
        <Link
          href="/"
          aria-label={home}
          className="flex items-center gap-2 rounded-full border border-[rgba(93,224,255,0.24)] bg-[rgba(93,224,255,0.06)] px-2 py-1"
        >
          <Logo size={28} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-secondary">
            Gary C.
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-2 md:gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
            <Link
              href="/experiencia"
              className="rounded-full px-2.5 py-1.5 text-muted hover:bg-[rgba(93,224,255,0.1)] hover:text-accent-secondary transition"
            >
              {experience}
            </Link>
            <Link
              href="/proyectos"
              className="rounded-full px-2.5 py-1.5 text-muted hover:bg-[rgba(93,224,255,0.1)] hover:text-accent-secondary transition"
            >
              {projects}
            </Link>
            <Link
              href="/contacto"
              className="rounded-full px-2.5 py-1.5 text-muted hover:bg-[rgba(93,224,255,0.1)] hover:text-accent-secondary transition"
            >
              {contact}
            </Link>
          </nav>

          <div className="flex items-center gap-1 rounded-full border border-[rgba(93,224,255,0.18)] bg-[rgba(255,255,255,0.04)] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            <button
              onClick={() => setLocale("es")}
              className={`rounded-full px-2 py-1 transition ${
                locale === "es" ? "bg-accent text-background" : "hover:bg-[rgba(93,224,255,0.1)]"
              }`}
            >
              ES
            </button>
            <span className="text-[10px] text-accent-secondary">|</span>
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-2 py-1 transition ${
                locale === "en" ? "bg-accent text-background" : "hover:bg-[rgba(93,224,255,0.1)]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-2 text-[11px] text-accent-secondary/70">
        {context}
      </div>
    </header>
  );
}
