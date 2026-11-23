"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/components/LanguageProvider";

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="flex h-9 items-center rounded-lg border border-border p-0.5 text-xs font-semibold">
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`h-full rounded-md px-2.5 uppercase transition ${
            locale === code ? "bg-white/10 text-foreground" : "text-subtle hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { locale, translations } = useLanguage();
  const { home, experience, projects, services, contact, menu } = translations.navbar;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/experiencia", label: experience },
    { href: "/proyectos", label: projects },
    { href: "/servicios", label: services },
    { href: "/contacto", label: contact },
  ];

  const cvHref = `/assets/perfil/${locale === "en" ? "resume.pdf" : "cv.pdf"}`;
  const cvName = locale === "en" ? "resume-gary-chunga.pdf" : "cv-gary-chunga.pdf";

  return (
    <header
      className={`site-navbar sticky top-0 z-40 border-b backdrop-blur-xl transition-colors ${
        scrolled || open ? "border-border bg-background/80" : "border-transparent bg-background/40"
      }`}
    >
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={home} className="flex items-center gap-2.5">
          <Logo size={32} />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Gary Chunga
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a href={cvHref} download={cvName} className="btn btn-primary btn-sm hidden sm:inline-flex">
            <FiDownload aria-hidden="true" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={menu}
            className="icon-btn h-9 w-9 md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="page-container flex flex-col gap-1 border-t border-border pb-4 pt-2 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-sm ${
                pathname === href ? "bg-white/5 text-foreground" : "text-muted"
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={cvHref} download={cvName} className="btn btn-primary mt-2 sm:hidden">
            <FiDownload aria-hidden="true" />
            {translations.hero.downloadCV}
          </a>
        </nav>
      )}
    </header>
  );
}
