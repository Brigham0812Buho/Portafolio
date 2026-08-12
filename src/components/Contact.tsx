"use client";

import { useMemo } from "react";
import { useAppState, Audience, ProjectType } from "@/context/AppState";
import {
  FiArrowRight,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";

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
    services,
    serviceCards,
    projectField,
    projectOptions,
    placeholder,
    defaultProjectMessage,
    email: emailLabel,
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
    quoteLabel,
    quoteTitle,
    mailSubjectPrefix,
    mailBodyIntro,
    mailBodyDescriptionLabel,
    mailBodySignOff,
    whatsappTextIntro,
    whatsappTextFooter,
    employeeDescription,
    freelanceDescription,
  } = translations.contact;

  const {
    contactAudience,
    setContactAudience,
    selectedProjectType,
    setSelectedProjectType,
    projectMessage,
    setProjectMessage,
  } = useAppState();
  const experiencesList = experiences[locale];
  const freelanceProjects = experiencesList.filter(({ type }) => type === "freelance");

  const mailToHref = useMemo(() => {
    const safeMessage = projectMessage.trim() || defaultProjectMessage;
    const subject = encodeURIComponent(`${mailSubjectPrefix} ${selectedProjectType}`);
    const body = encodeURIComponent(
      `${mailBodyIntro} ${selectedProjectType}.\n\n${mailBodyDescriptionLabel}\n${safeMessage}${mailBodySignOff}`
    );

    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, defaultProjectMessage, mailBodyDescriptionLabel, mailBodyIntro, mailBodySignOff, mailSubjectPrefix, projectMessage, selectedProjectType]);

  const cleanWhatsAppNumber = phone?.replace(/\D/g, "") ?? "";
  const whatsappHref = cleanWhatsAppNumber
    ? `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
        `${whatsappTextIntro} ${selectedProjectType}.${whatsappTextFooter}${projectMessage}`
      )}`
    : mailToHref;

  return (
    <section
      id="contacto"
      className="px-4 md:px-8 max-w-[1400px] mx-auto py-24 border-t border-border"
    >
      <div className="mb-10 rounded-[28px] border border-[rgba(93,224,255,0.16)] bg-[linear-gradient(135deg,rgba(10,23,42,0.95),rgba(16,39,68,0.98))] p-6 shadow-[0_18px_54px_rgba(3,10,25,0.35)] backdrop-blur-sm">
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
          <div className="card-3d rounded-[24px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(10,21,38,0.93),rgba(16,36,64,0.98))] p-6 shadow-[0_16px_46px_rgba(4,12,28,0.35)]">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setContactAudience("empleado")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  contactAudience === "empleado"
                    ? "bg-accent text-background border-accent"
                    : "border-[rgba(93,224,255,0.18)] text-muted hover:border-accent-secondary hover:text-accent-secondary"
                }`}
              >
                {employee}
              </button>
              <button
                onClick={() => setContactAudience("freelance")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  contactAudience === "freelance"
                    ? "bg-accent text-background border-accent"
                    : "border-[rgba(93,224,255,0.18)] text-muted hover:border-accent-secondary hover:text-accent-secondary"
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
              </div>
            )}
          </div>

          <div className="card-3d rounded-[24px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(11,28,50,0.94),rgba(18,40,70,0.98))] p-5 shadow-[0_16px_46px_rgba(4,12,28,0.35)]">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-secondary mb-3">{services}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceCards.map((service) => (
                <div key={service.title} className="rounded-[18px] border border-[rgba(93,224,255,0.12)] bg-[rgba(255,255,255,0.04)] p-3">
                  <p className="font-semibold text-foreground">{service.title}</p>
                  <p className="mt-1 text-sm text-muted">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card-3d rounded-[24px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(10,22,44,0.94),rgba(18,39,68,0.98))] p-6 shadow-[0_18px_48px_rgba(4,12,28,0.38)]">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">{quoteLabel}</p>
              <h3 className="text-xl font-semibold text-foreground">{quoteTitle}</h3>
            </div>
            <span className="rounded-full bg-accent-secondary/10 px-3 py-1 text-[11px] font-semibold text-accent-secondary">
              {fastReply}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm text-foreground">
              <span className="mb-2 block">{translations.contact.projectTypeLabel}</span>
              <select
                value={selectedProjectType}
                onChange={(e) => setSelectedProjectType(e.target.value as ProjectType)}
                className="w-full rounded-xl border border-border bg-background/90 px-3 py-2 text-sm outline-none focus:border-accent-secondary"
              >
                {projectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="rounded-xl border border-border bg-background/90 px-3 py-3 text-sm">
              <p className="text-muted">{coverage}</p>
              <p className="mt-1 font-semibold text-foreground">{coverage}</p>
            </div>
          </div>

          <label className="mt-4 block text-sm text-foreground">
            <span className="mb-2 block">{projectField}</span>
            <textarea
              rows={6}
              value={projectMessage}
              onChange={(e) => setProjectMessage(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/90 px-3 py-3 text-sm outline-none focus:border-accent-secondary"
              placeholder={placeholder}
            />
          </label>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <a
              href={mailToHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              <FiMail />
              {emailLabel}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-secondary bg-background/90 px-4 py-3 text-sm font-semibold text-accent-secondary transition hover:bg-accent-secondary hover:text-background"
            >
              <FiMessageCircle />
              {whatsapp}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        <a
          href={`mailto:${email}`}
          className="card-3d rounded-[20px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(10,22,44,0.95),rgba(17,36,65,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(4,12,28,0.32)] transition hover:-translate-y-1"
        >
          <FiMail className="mb-2 text-lg text-accent-secondary" />
          <p className="font-semibold text-foreground">{emailCardTitle}</p>
          <p className="text-muted">{emailCardFooter || email}</p>
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="card-3d rounded-[20px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(10,22,44,0.95),rgba(17,36,65,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(4,12,28,0.32)] transition hover:-translate-y-1"
        >
          <FiGithub className="mb-2 text-lg text-accent-secondary" />
          <p className="font-semibold text-foreground">{githubCard}</p>
          <p className="text-muted">{githubFooter}</p>
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="card-3d rounded-[20px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(10,22,44,0.95),rgba(17,36,65,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(4,12,28,0.32)] transition hover:-translate-y-1"
        >
          <FiLinkedin className="mb-2 text-lg text-accent-secondary" />
          <p className="font-semibold text-foreground">{linkedinCard}</p>
          <p className="text-muted">{linkedinFooter}</p>
        </a>

        <a
          href={`/assets/perfil/${locale === "en" ? "resume.pdf" : "cv.pdf"}`}
          download={locale === "en" ? "resume-gary-chunga.pdf" : "cv-gary-chunga.pdf"}
          className="card-3d rounded-[20px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(10,22,44,0.95),rgba(17,36,65,0.98))] p-4 text-sm shadow-[0_12px_30px_rgba(4,12,28,0.32)] transition hover:-translate-y-1"
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