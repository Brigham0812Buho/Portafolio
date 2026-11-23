"use client";
import { FiArrowUpRight, FiFolder, FiGithub } from "react-icons/fi";
import { personalProjects } from "@/data/personalProjects";
import { Animated } from "@/components/Animated";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/types";

export function ProjectsGrid() {
  const { locale, translations } = useLanguage();
  const projects = personalProjects[locale];
  const t = translations.projects;

  return (
    <section id="proyectos" className="border-t border-border py-20 md:py-28">
      <div className="page-container">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map(({ id, title, description, stack, repoUrl, demoUrl }: Project) => {
            const [name, subtitle] = title.split(" — ");
            const primaryUrl = demoUrl ?? repoUrl;
            return (
              <Animated key={id} className="h-full">
                <article className="card card-interactive group relative flex h-full flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-accent">
                      <FiFolder />
                    </span>
                    <div className="relative z-10 flex items-center gap-1">
                      {repoUrl && (
                        <a
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub · ${name}`}
                          className="icon-btn h-9 w-9 border-transparent"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {demoUrl && (
                        <a
                          href={demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.viewSiteLabel} · ${name}`}
                          className="icon-btn h-9 w-9 border-transparent"
                        >
                          <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {primaryUrl ? (
                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition group-hover:text-accent after:absolute after:inset-0 after:content-['']"
                      >
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                  </h3>
                  {subtitle && <p className="mt-1 text-sm text-subtle">{subtitle}</p>}

                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

                  <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-6 font-mono text-xs text-subtle">
                    {stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </article>
              </Animated>
            );
          })}
        </div>
      </div>
    </section>
  );
}
