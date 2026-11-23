"use client";

import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { locale, translations } = useLanguage();
  const { name, email, github, linkedin } = personalInfo[locale];
  const t = translations.footer;

  return (
    <footer className="site-footer mt-auto border-t border-border">
      <div className="page-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo size={28} />
          <p className="text-sm text-subtle">
            © {new Date().getFullYear()} {name}. {t.rights}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn h-9 w-9">
            <FiLinkedin />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn h-9 w-9">
            <FiGithub />
          </a>
          <a href={`mailto:${email}`} aria-label="Email" className="icon-btn h-9 w-9">
            <FiMail />
          </a>
          <Link href="#top" aria-label={t.backToTop} className="icon-btn ml-2 h-9 w-9">
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
