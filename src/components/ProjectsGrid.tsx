import { personalProjects } from "@/data/personalProjects";
import { Animated } from "@/components/Animated";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function ProjectsGrid() {
  return (
    <section id="proyectos" className="px-4 md:px-8 max-w-[1400px] mx-auto py-20">
      <SectionHeader
        eyebrow="Proyectos"
        title="Casos relevantes y entregables concretos"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {personalProjects.map((project, index) => (
          <Animated key={project.id} className="card-3d card-hover">
            <div className="h-full rounded-[24px] border border-[rgba(93,224,255,0.18)] bg-[linear-gradient(135deg,rgba(12,27,56,0.96),rgba(18,38,74,0.99))] p-6 shadow-[0_18px_48px_rgba(4,12,28,0.42)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <Badge variant="soft">Caso {index + 1}</Badge>
                <Badge>{project.stack.length} tecnologías</Badge>
              </div>

              <h3 className="font-bold text-xl mb-2 text-foreground">{project.title}</h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-background/80 border border-border px-2.5 py-1 text-[11px] font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 text-sm">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent-secondary underline underline-offset-4">
                    GitHub →
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent-secondary underline underline-offset-4">
                    Ver sitio →
                  </a>
                )}
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
}