import { Navbar } from "@/components/NavBar";
import { Timeline } from "@/components/Timeline";
import { ExperienceHighlights } from "@/components/ExperienceHighlights";
import { experiences } from "@/data/experience";

export default function ExperienciaPage() {
  return (
    <main>
      <Navbar />
      <Timeline />
    </main>
  );
}
