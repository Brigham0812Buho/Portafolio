import { Navbar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { HomeServices } from "@/components/HomeServices";
import { Timeline } from "@/components/Timeline";
import { SkillsEducation } from "@/components/SkillsEducation";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HomeServices />
      <Timeline />
      <SkillsEducation />
      <ProjectsGrid />
      <Contact />
    </main>
  );
}