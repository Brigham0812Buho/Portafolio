import { ProjectsGrid } from "@/components/ProjectsGrid";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/proyectos");

export default function ProyectosPage() {
  return (
    <main>
      <ProjectsGrid />
    </main>
  );
}
