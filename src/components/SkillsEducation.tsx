"use client";

import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiLayers } from "react-icons/fi";
import { techStack } from "@/data/techStack";
import { education, certifications } from "@/data/education";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { getTechIcon } from "@/lib/techIcons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, delay, ease: "easeOut" as const },
});

function PanelTitle({ icon: Icon, children }: { icon: typeof FiLayers; children: React.ReactNode }) {
  return (
    <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent-secondary">
      <Icon className="text-base" />
      {children}
    </h3>
  );
}

export function SkillsEducation() {
  const { locale, translations } = useLanguage();
  const t = translations.skills;

  return (
    <section id="formacion" className="px-4 md:px-8 max-w-[1400px] mx-auto py-8 md:py-12">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        <motion.div {...fadeUp()}>
          <GlassCard className="h-full p-5 md:p-6">
            <PanelTitle icon={FiLayers}>{t.stackTitle}</PanelTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              {techStack[locale].map(({ category, items }) => (
                <div
                  key={category}
                  className="rounded-[18px] border border-[rgba(213,178,124,0.12)] bg-background/40 p-4"
                >
                  <p className="mb-3 text-sm font-semibold text-foreground">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => {
                      const Icon = getTechIcon(item);
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-medium text-foreground"
                        >
                          <Icon className="text-sm text-accent-secondary" />
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid gap-4">
          <motion.div {...fadeUp(0.08)}>
            <GlassCard className="p-5 md:p-6">
              <PanelTitle icon={FiBookOpen}>{t.educationTitle}</PanelTitle>
              <ul className="space-y-4">
                {education[locale].map(({ id, degree, institution, startDate, endDate, note, current }) => (
                  <li key={id} className="relative border-l-2 border-accent/40 pl-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-foreground">{degree}</p>
                      {current && (
                        <span className="rounded-full bg-accent-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-background">
                          {t.inProgressLabel}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">{institution}</p>
                    {note && <p className="mt-0.5 text-xs text-muted/80">{note}</p>}
                    <p className="mt-1 font-mono text-xs text-accent-secondary">
                      {startDate} — {endDate}
                    </p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp(0.16)}>
            <GlassCard className="p-5 md:p-6">
              <PanelTitle icon={FiAward}>{t.certificationsTitle}</PanelTitle>
              <ul className="divide-y divide-[rgba(213,178,124,0.12)]">
                {[...certifications[locale]].reverse().map(({ id, name, institution, hours, year }) => (
                  <li key={id} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{name}</p>
                      <p className="mt-0.5 text-xs text-muted">
                        {institution}
                        {hours ? ` · ${hours}` : ""}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-accent-secondary">
                      {year}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
