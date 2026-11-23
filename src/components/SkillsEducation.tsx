"use client";

import { FiAward, FiBookOpen } from "react-icons/fi";
import { techStack } from "@/data/techStack";
import { education, certifications } from "@/data/education";
import { useLanguage } from "@/components/LanguageProvider";
import { Animated } from "@/components/Animated";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { getTechIcon } from "@/lib/techIcons";

export function SkillsEducation() {
  const { locale, translations } = useLanguage();
  const t = translations.skills;

  return (
    <section id="formacion" className="border-t border-border py-20 md:py-28">
      <div className="page-container">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack[locale].map(({ category, items }) => (
            <Animated key={category} className="h-full">
              <div className="card h-full p-5">
                <h3 className="mb-4 text-sm font-semibold text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => {
                    const Icon = getTechIcon(item);
                    return (
                      <span key={item} className="chip">
                        <Icon aria-hidden className="text-[13px]" />
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Animated>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold text-foreground">
              <FiBookOpen className="text-accent" />
              {t.educationTitle}
            </h3>
            <ul className="divide-y divide-border border-y border-border">
              {education[locale].map(({ id, degree, institution, startDate, endDate, note, current }) => (
                <li key={id} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <p className="flex flex-wrap items-center gap-2 font-medium text-foreground">
                      {degree}
                      {current && <Badge variant="accent">{t.inProgressLabel}</Badge>}
                    </p>
                    <p className="mt-1 text-sm text-muted">{institution}</p>
                    {note && <p className="mt-0.5 text-sm text-subtle">{note}</p>}
                  </div>
                  <p className="shrink-0 font-mono text-xs text-subtle sm:pt-1">
                    {startDate} — {endDate}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold text-foreground">
              <FiAward className="text-accent" />
              {t.certificationsTitle}
            </h3>
            <ul className="divide-y divide-border border-y border-border">
              {[...certifications[locale]].reverse().map(({ id, name, institution, hours, year }) => (
                <li key={id} className="flex items-start justify-between gap-6 py-5">
                  <div>
                    <p className="font-medium text-foreground">{name}</p>
                    <p className="mt-1 text-sm text-muted">
                      {institution}
                      {hours ? ` · ${hours}` : ""}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-subtle sm:pt-1">{year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
