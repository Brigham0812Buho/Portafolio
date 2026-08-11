"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

export function ExperienceHighlights({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="px-6 md:px-16 max-w-6xl mx-auto py-8 md:py-12">
      <div className="mb-6 rounded-[24px] border border-[rgba(0,242,195,0.18)] bg-[linear-gradient(135deg,rgba(93,224,255,0.14),rgba(0,242,195,0.1))] p-5 md:p-6 shadow-[0_18px_60px_rgba(3,10,25,0.25)] backdrop-blur-sm">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-accent-secondary">Resumen por empresa</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Una mirada más directa a cada etapa
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="card-3d rounded-[24px] border border-[rgba(93,224,255,0.14)] bg-[linear-gradient(135deg,rgba(12,27,54,0.95),rgba(16,35,68,0.99))] p-5 shadow-[0_18px_46px_rgba(2,10,24,0.45)]"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full bg-accent-secondary/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                {exp.type === "freelance" ? "Freelance" : "Empleo"}
              </span>
              <span className="text-[11px] font-semibold text-muted">{exp.startDate} — {exp.endDate}</span>
            </div>

            <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
            <p className="mt-1 text-sm text-muted">{exp.role}</p>

            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              {exp.description.slice(0, 2).map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            {exp.url && (
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-accent-secondary underline underline-offset-4"
              >
                Abrir sitio →
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
