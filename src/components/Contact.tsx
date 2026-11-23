"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppState";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { useLanguage } from "@/components/LanguageProvider";
import { quotationDocumentUrl } from "@/data/serviceCatalog";

export function Contact() {
  const { locale, translations } = useLanguage();
  const { email, phone, github, linkedin } = personalInfo[locale];
  const t = translations.contact;
  const { contactAudience, setContactAudience } = useAppState();

  const cleanWhatsAppNumber = phone?.replace(/\D/g, "") ?? "";
  const whatsappHref = cleanWhatsAppNumber
    ? `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(t.whatsappIntro)}`
    : `mailto:${email}`;
  const cvHref = `/assets/perfil/${locale === "en" ? "resume.pdf" : "cv.pdf"}`;
  const cvName = locale === "en" ? "resume-gary-chunga.pdf" : "cv-gary-chunga.pdf";

  const channels = [
    { icon: FiMail, label: t.emailCardTitle, value: email, href: `mailto:${email}` },
    { icon: FiMessageCircle, label: t.whatsapp, value: "+51 927 536 516", href: whatsappHref, external: true },
    { icon: FiLinkedin, label: t.linkedinCard, value: t.linkedinFooter, href: linkedin, external: true },
    { icon: FiGithub, label: t.githubCard, value: t.githubFooter, href: github, external: true },
  ];

  return (
    <section id="contacto" className="border-t border-border py-20 md:py-28">
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">{t.talk}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              {t.projectTitle}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{t.projectDescription}</p>

            <ul className="mt-10 divide-y divide-border border-y border-border">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 py-4"
                  >
                    <Icon className="shrink-0 text-lg text-subtle transition group-hover:text-accent" />
                    <span className="w-24 shrink-0 text-sm text-subtle">{label}</span>
                    <span className="min-w-0 flex-1 truncate text-sm text-foreground">{value}</span>
                    <FiArrowUpRight className="shrink-0 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-center gap-2 text-sm text-subtle">
              <FiMapPin className="text-accent" />
              {t.coverage}
            </p>
          </div>

          <div className="card p-6 md:p-8">
            <div
              role="tablist"
              className="mb-8 grid grid-cols-2 rounded-lg border border-border bg-background p-1 text-sm font-medium"
            >
              {(
                [
                  ["empleado", t.employee],
                  ["freelance", t.freelance],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={contactAudience === value}
                  onClick={() => setContactAudience(value)}
                  className={`rounded-md px-3 py-2 transition ${
                    contactAudience === value ? "bg-white/10 text-foreground" : "text-subtle hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {contactAudience === "empleado" ? (
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{t.employeeTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.employeeDescription}</p>
                <div className="mt-8 grid gap-3">
                  <a href={cvHref} download={cvName} className="btn btn-primary w-full">
                    <FiDownload aria-hidden="true" />
                    {t.downloadCV}
                  </a>
                  <a href={`mailto:${email}`} className="btn btn-secondary w-full">
                    <FiMail aria-hidden="true" />
                    {t.emailMe}
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{t.requirementsTitle}</h3>
                  <span className="text-xs font-medium text-success">{t.fastReply}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.requirementsDescription}</p>
                <div className="mt-8 grid gap-3">
                  <Link href="/servicios#requisitos" className="btn btn-primary w-full">
                    <FiFileText aria-hidden="true" />
                    {t.requirementsButton}
                  </Link>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full">
                    <FiMessageCircle aria-hidden="true" />
                    {t.directMessage} · {t.whatsapp}
                  </a>
                  <a href={quotationDocumentUrl} download className="btn btn-ghost w-full">
                    <FiDownload aria-hidden="true" />
                    {t.downloadCatalog}
                  </a>
                </div>
                <Link
                  href="/servicios"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-secondary"
                >
                  {t.allServices}
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
