"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { experiences } from "@/data/experience";
import { Animated } from "@/components/Animated";
import { GlassCard } from "@/components/ui/GlassCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { translations, locale } = useLanguage();
  const { name, role, location, englishLevel, github, linkedin } = personalInfo[locale];
  const currentJob = experiences[locale].find((exp) => exp.current);
  const {
    summary,
    projects,
    contact,
    downloadCV,
    focus,
    mobile,
    desktop,
    delivery,
    backend,
    experience,
    englishLevelLabel,
    fullStack,
    currentlyLabel,
    backendDescription = "",
    mobileDescription = "",
    desktopDescription = "",
    deliveryDescription = "",
  } = translations.hero;

  return (
    <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-5 md:py-7">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="rounded-[30px] p-4 md:p-5">
          <div className="flex items-center gap-4 mb-4">
            <Animated className="rounded-full float-slow">
              <Image
                src="/assets/perfil/foto-perfil.jpg"
                alt={name}
                width={64}
                height={64}
                className="rounded-full object-cover border-2 border-border"
              />
            </Animated>

            <div>
              <Animated>
                <p className="text-sm uppercase tracking-[0.35em] text-muted font-mono">
                  {role}
                </p>
              </Animated>
              <Animated>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <FiMapPin className="text-accent-secondary" />
                  {location}
                </p>
              </Animated>
            </div>
          </div>

          {currentJob && (
            <Animated>
              <p className="mb-3 inline-flex flex-wrap items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1.5 text-xs text-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-semibold text-accent-secondary">{currentlyLabel}:</span>
                {currentJob.role} · {currentJob.company}
              </p>
            </Animated>
          )}

          <Animated>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-foreground leading-tight">
              {name}
            </h1>
          </Animated>

          <Animated>
            <p className="text-sm md:text-base text-muted max-w-2xl mb-5 leading-relaxed">
              {summary}
            </p>
          </Animated>

          <div className="flex flex-wrap gap-2.5 mb-6">
            <span className="rounded-full bg-accent-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
              Full Stack
            </span>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              {fullStack}
            </span>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              {experience}
            </span>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              {englishLevelLabel}: {englishLevel}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Animated>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-background rounded-full hover:opacity-95 transition font-medium btn-cta text-sm"
              >
                {projects}
                <FiArrowRight />
              </Link>
            </Animated>

            <Animated>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-accent-secondary bg-accent-secondary/10 text-accent-secondary rounded-full hover:bg-accent-secondary hover:text-background transition font-medium btn-cta text-sm"
              >
                {contact}
              </Link>
            </Animated>

            <Animated>
              <a
                href={`/assets/perfil/${locale === "en" ? "resume.pdf" : "cv.pdf"}`}
                download={locale === "en" ? "resume-gary-chunga.pdf" : "cv-gary-chunga.pdf"}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[rgba(213,178,124,0.22)] bg-[rgba(243,234,223,0.05)] text-foreground hover:border-accent-secondary transition font-medium text-sm"
              >
                {downloadCV}
                <FiDownload />
              </a>
            </Animated>

            <div className="flex items-center gap-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(213,178,124,0.22)] text-muted transition hover:border-accent-secondary hover:text-accent-secondary"
              >
                <FiLinkedin />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(213,178,124,0.22)] text-muted transition hover:border-accent-secondary hover:text-accent-secondary"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="rounded-[30px] p-4 md:p-5">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted mb-3">
            {focus}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 auto-rows-fr">
            <FeatureCard title={backend} description={backendDescription} />
            <FeatureCard title={mobile} description={mobileDescription} />
            <FeatureCard title={desktop} description={desktopDescription} />
            <FeatureCard title={delivery} description={deliveryDescription} />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}