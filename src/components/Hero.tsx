"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiDownload,
  FiGitBranch,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMonitor,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";
import { Animated } from "@/components/Animated";

export function Hero() {
  const { translations, locale } = useLanguage();
  const { name, role, location, englishLevel, github, linkedin, email } = personalInfo[locale];
  const currentJob = experiences[locale].find((exp) => exp.current);
  const t = translations.hero;

  const [firstName, ...rest] = name.split(" ");
  const middle = rest.slice(0, 1).join(" ");
  const lastNames = rest.slice(1).join(" ");

  const facts = [
    { label: t.locationLabel, value: location },
    { label: t.experienceLabel, value: t.experienceValue },
    { label: t.englishLevelLabel, value: englishLevel },
    { label: t.modeLabel, value: t.modeValue },
  ];

  const focusAreas = [
    { icon: FiServer, title: t.backend, description: t.backendDescription },
    { icon: FiSmartphone, title: t.mobile, description: t.mobileDescription },
    { icon: FiMonitor, title: t.desktop, description: t.desktopDescription },
    { icon: FiGitBranch, title: t.delivery, description: t.deliveryDescription },
  ];

  const cvHref = `/assets/perfil/${locale === "en" ? "resume.pdf" : "cv.pdf"}`;
  const cvName = locale === "en" ? "resume-gary-chunga.pdf" : "cv-gary-chunga.pdf";

  return (
    <section className="page-container pb-20 pt-14 md:pb-28 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
        <div className="fade-up min-w-0">
          {currentJob && (
            <p className="mb-6 inline-flex max-w-full items-center gap-2 rounded-2xl sm:rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted sm:text-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span>
                <span className="text-foreground">{t.currentlyLabel}:</span> {currentJob.role} ·{" "}
                {currentJob.company}
              </span>
            </p>
          )}

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {firstName} {middle}
            <br />
            <span className="text-subtle">{lastNames}</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-foreground md:text-xl">
            {role} <span className="text-accent">·</span>{" "}
            <span className="text-muted">{t.headline}</span>
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{t.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/proyectos" className="btn btn-primary">
              {t.projects}
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link href="/contacto" className="btn btn-secondary">
              {t.contact}
            </Link>
            <div className="flex items-center gap-2 sm:ml-2">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <FiLinkedin />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <FiGithub />
              </a>
              <a href={`mailto:${email}`} aria-label="Email" className="icon-btn">
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <aside className="card fade-up min-w-0 p-6 [animation-delay:120ms]">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/perfil/foto-perfil.jpg"
              alt={name}
              width={72}
              height={72}
              priority
              className="h-[72px] w-[72px] rounded-xl object-cover ring-1 ring-border-strong"
            />
            <div className="min-w-0">
              <p className="font-semibold leading-snug text-foreground">{name}</p>
              <p className="text-sm text-muted">{role}</p>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {facts.map(({ label, value }) => (
              <div key={label} className="bg-surface p-4">
                <dt className="text-xs text-subtle">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <a href={cvHref} download={cvName} className="btn btn-secondary mt-6 w-full">
            <FiDownload aria-hidden="true" />
            {t.downloadCV}
          </a>
        </aside>
      </div>

      <div className="mt-16 md:mt-20">
        <p className="eyebrow mb-5">{t.focus}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <Animated key={title} className="h-full">
              <div className="card card-interactive h-full p-5">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                  <Icon />
                </span>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
