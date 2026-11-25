import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SkillsEducation } from "@/components/SkillsEducation";
import { HomeServices } from "@/components/HomeServices";
import { Contact } from "@/components/Contact";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <main>
      <Hero />
      <Timeline />
      <ProjectsGrid />
      <SkillsEducation />
      <HomeServices />
      <Contact />
    </main>
  );
}
