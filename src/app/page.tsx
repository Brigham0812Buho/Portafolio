import { Navbar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Timeline />
      <ProjectsGrid />
      <Contact />
    </main>
  );
}