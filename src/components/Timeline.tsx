"use client";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";
import { TimelineItem } from "@/components/TimelineItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Timeline() {
  const { locale, translations } = useLanguage();

  const localized = [...experiences[locale]];
  const orderedExperiences = localized.sort((a, b) => {
    const yearA = Number(a.startDate.match(/(\d{4})/)?.[1] ?? 0);
    const yearB = Number(b.startDate.match(/(\d{4})/)?.[1] ?? 0);

    return yearA - yearB;
  });
  return (
    <section id="experiencia" className="px-4 md:px-8 max-w-[1400px] mx-auto py-8 md:py-12">
      <SectionHeader
        eyebrow={translations.timeline.eyebrow}
        title={translations.timeline.title}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {orderedExperiences.map((exp, idx) => (
          <TimelineItem key={exp.id} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
}