"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { Animated } from "@/components/Animated";
import { GlassCard } from "@/components/ui/GlassCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const { name, role, location, englishLevel } = personalInfo;
  const {
    summary,
    projects,
    contact,
    downloadCV,
    focus,
    mobile,
    desktop,
    delivery,
    mobileDescription = "",
    desktopDescription = "",
    deliveryDescription = "",
  } = t.hero;

  return (
    <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-5 md:py-7">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="rounded-[30px] p-4 md:p-5">
          <div className="flex items-center gap-4 mb-4">
            <Animated className="rounded-full float-slow">
              <Image
                src="/assets/perfil/foto-perfil.jpg"
                alt={personalInfo.name}
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
              +3 años de experiencia
            </span>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              Inglés: {englishLevel}
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
                href="/assets/perfil/cv.pdf"
                download="cv-gary-chunga.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[rgba(93,224,255,0.22)] bg-[rgba(255,255,255,0.05)] text-foreground hover:border-accent-secondary transition font-medium text-sm"
              >
                {downloadCV}
                <FiDownload />
              </a>
            </Animated>
          </div>
        </GlassCard>

        <GlassCard className="rounded-[30px] p-4 md:p-5">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted mb-3">
            {focus}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 auto-rows-fr">
            <FeatureCard title={mobile} description={mobileDescription} />
            <FeatureCard title={desktop} description={desktopDescription} />
            <FeatureCard
              title={delivery}
              description={deliveryDescription}
              span
            />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}