import { Timeline } from "@/components/Timeline";
import { SkillsEducation } from "@/components/SkillsEducation";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/experiencia");

export default function ExperienciaPage() {
  return (
    <main>
      <Timeline />
      <SkillsEducation />
    </main>
  );
}
