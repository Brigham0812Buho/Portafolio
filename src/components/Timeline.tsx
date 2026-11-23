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
    <section id="experiencia" className="border-t border-border py-20 md:py-28">
      <div className="page-container">
        <SectionHeader
          eyebrow={translations.timeline.eyebrow}
          title={translations.timeline.title}
          description={translations.timeline.description}
        />

        <ol>
          {items.map((exp, idx) => (
            <TimelineItem key={exp.id} exp={exp} index={idx} isLast={idx === items.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
