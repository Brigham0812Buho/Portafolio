"use client";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";
import { TimelineItem } from "@/components/TimelineItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Timeline() {
  const { locale, translations } = useLanguage();
  // Los datos ya vienen ordenados del más reciente al más antiguo.
  const items = experiences[locale];

  return (
    <section id="experiencia" className="px-4 md:px-8 max-w-[1400px] mx-auto py-8 md:py-12">
      <SectionHeader
        eyebrow={translations.timeline.eyebrow}
        title={translations.timeline.title}
      />

      <ol className="mx-auto max-w-5xl">
        {items.map((exp, idx) => (
          <TimelineItem
            key={exp.id}
            exp={exp}
            index={idx}
            isLast={idx === items.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
