"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppState";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";
import { quotationDocumentUrl } from "@/data/serviceCatalog";

export function Contact() {
  const { locale, translations } = useLanguage();
  const { email, phone, github, linkedin } = personalInfo[locale];
  const {
    talk,
    projectTitle,
    projectDescription,
    employee,
    freelance,
    downloadCV,
    fastReply,
    requirementsTitle,
    requirementsDescription,
    requirementsButton,
    downloadCatalog,
    directMessage,
    whatsappIntro,
    freelanceProjectLabel,
    services,
    serviceCards,
    emailCardTitle,
    emailCardFooter,
    whatsapp,
    githubCard,
    githubFooter,
    linkedinCard,
    linkedinFooter,
    cvCard,
    cvFooter,
    coverage,
    employeeDescription,
    freelanceDescription,
    allServices,
  } = translations.contact;

  const { contactAudience, setContactAudience } = useAppState();
  const experiencesList = experiences[locale];
  const freelanceProjects = experiencesList.filter(({ type }) => type === "freelance");

  const cleanWhatsAppNumber = phone?.replace(/\D/g, "") ?? "";
  const whatsappHref = cleanWhatsAppNumber
    ? `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(whatsappIntro)}`
    : `mailto:${email}`;

  return (
    <section
      id="contacto"
      className="px-4 md:px-8 max-w-[1400px] mx-auto py-24 border-t border-border"
    >
      <div className="mb-10 rounded-[28px] border border-[rgba(213,178,124,0.16)] bg-[linear-gradient(135deg,rgba(40,29,21,0.95),rgba(31,24,19,0.98))] p-6 shadow-[0_18px_54px_rgba(8,5,3,0.35)] backdrop-blur-sm">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent-secondary mb-3">
          {talk}
        </p>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {projectTitle}
        </h2>
        <p className="max-w-2xl text-muted text-sm md:text-base">
          {projectDescription}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
        <div className="space-y-4">
          <div className="card-3d rounded-[24px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(37,27,19,0.93),rgba(29,23,18,0.98))] p-6 shadow-[0_16px_46px_rgba(8,5,3,0.35)]">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setContactAudience("empleado")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  contactAudience === "empleado"
                    ? "bg-accent text-background border-accent"
                    : "border-[rgba(213,178,124,0.18)] text-muted hover:border-accent-secondary hover:text-accent-secondary"
                }`}
              >
                {employee}
              </button>
              <button
                onClick={() => setContactAudience("freelance")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  contactAudience === "freelance"
                    ? "bg-accent text-background border-accent"
                    : "border-[rgba(213,178,124,0.18)] text-muted hover:border-accent-secondary hover:text-accent-secondary"
                }`}
              >
                {freelance}
              </button>
            </div>

            {contactAudience === "empleado" ? (
              <div className="space-y-4">
                <p className="text-muted max-w-lg">{employeeDescription}</p>
                <a
                  href={`/assets/perfil/${locale === "en" ? "resume.pdf" : "cv.pdf"}`}
                  download={locale === "en" ? "resume-gary-chunga.pdf" : "cv-gary-chunga.pdf"}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  {downloadCV}
                  <FiArrowRight />
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-muted max-w-lg">{freelanceDescription}</p>
                <div className="space-y-3">
                  {freelanceProjects.map(({ id, company, description, url }) => (
                    <div key={id} className="rounded-[18px] border border-border bg-background/90 p-4">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-secondary">
                        {freelanceProjectLabel}
                      </p>
                      <p className="font-semibold text-foreground">{company}</p>
                      <p className="mt-1 text-sm text-muted">{description[0]}</p>
                      {url && (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex text-sm text-accent-secondary underline underline-offset-4"
                        >
                          {translations.contact.viewSiteLabel}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary underline underline-offset-4"
                >
                  {allServices}
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          <div className="card-3d rounded-[24px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(38,28,20,0.94),rgba(32,24,18,0.98))] p-5 shadow-[0_16px_46px_rgba(8,5,3,0.35)]">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-secondary mb-3">{services}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceCards.map((service) => (
                <div key={service.title} className="rounded-[18px] border border-[rgba(213,178,124,0.12)] bg-[rgba(243,234,223,0.04)] p-3">
                  <p className="font-semibold text-foreground">{service.title}</p>
                  <p className="mt-1 text-sm text-muted">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[24px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(37,27,19,0.94),rgba(31,24,19,0.98))] p-6 shadow-[0_18px_48px_rgba(8,5,3,0.38)] md:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">{talk}</p>
              <h3 className="text-2xl font-semibold text-foreground">{requirementsTitle}</h3>
            </div>
            <span className="rounded-full bg-accent-secondary/10 px-3 py-1 text-[11px] font-semibold text-accent-secondary">
              {fastReply}
            </span>
          </div>

          <p className="mb-6 max-w-xl text-sm leading-6 text-muted">
            {requirementsDescription}
          </p>

          <div className="grid gap-3">
            <Link
              href="/servicios#requisitos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-secondary px-4 py-3 text-center text-sm font-semibold text-background transition hover:opacity-90"
            >
              {requirementsButton}
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a
              href={quotationDocumentUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:border-accent-secondary"
            >
              <FiDownload aria-hidden="true" />
              {downloadCatalog}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-secondary bg-background/90 px-4 py-3 text-sm font-semibold text-accent-secondary transition hover:bg-accent-secondary hover:text-background"
            >
              <FiMessageCircle />
              {directMessage} · {whatsapp}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        <a
          href={`mailto:${email}`}
          className="card-3d rounded-[20px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(37,27,19,0.95),rgba(31,24,19,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(8,5,3,0.32)] transition hover:-translate-y-1"
        >
          <FiMail className="mb-2 text-lg text-accent-secondary" />
          <p className="font-semibold text-foreground">{emailCardTitle}</p>
          <p className="text-muted">{emailCardFooter || email}</p>
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="card-3d rounded-[20px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(37,27,19,0.95),rgba(31,24,19,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(8,5,3,0.32)] transition hover:-translate-y-1"
        >
          <FiGithub className="mb-2 text-lg text-accent-secondary" />
          <p className="font-semibold text-foreground">{githubCard}</p>
          <p className="text-muted">{githubFooter}</p>
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="card-3d rounded-[20px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(37,27,19,0.95),rgba(31,24,19,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(8,5,3,0.32)] transition hover:-translate-y-1"
        >
          <FiLinkedin className="mb-2 text-lg text-accent-secondary" />
          <p className="font-semibold text-foreground">{linkedinCard}</p>
          <p className="text-muted">{linkedinFooter}</p>
        </a>

        <a
          href={`/assets/perfil/${locale === "en" ? "resume.pdf" : "cv.pdf"}`}
          download={locale === "en" ? "resume-gary-chunga.pdf" : "cv-gary-chunga.pdf"}
          className="card-3d rounded-[20px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(37,27,19,0.95),rgba(31,24,19,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(8,5,3,0.32)] transition hover:-translate-y-1"
        >
          <FiGlobe className="mb-2 text-lg text-accent-secondary" />
          <p className="font-semibold text-foreground">{cvCard}</p>
          <p className="text-muted">{cvFooter}</p>
        </a>
      </div>

      <div className="mt-8 rounded-[18px] border border-border bg-background/85 p-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-accent-secondary" />
          <span>{coverage}</span>
        </div>
      </div>
    </section>
  );
}