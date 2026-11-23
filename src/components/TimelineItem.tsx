"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { Experience } from "@/types";
import { useLanguage } from "@/components/LanguageProvider";
import { Badge } from "@/components/ui/Badge";
import { getTechIcon } from "@/lib/techIcons";

export function TimelineItem({
  exp,
  index,
  isLast,
}: {
  exp: Experience;
  index: number;
  isLast: boolean;
}) {
  const { translations } = useLanguage();
  const { company, startDate, endDate, type, description, stack, url, role, project, current } = exp;
  const t = translations.timeline;

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: Math.min(index, 2) * 0.05, ease: "easeOut" }}
      className="relative grid gap-2 pl-8 md:grid-cols-[180px_1fr] md:gap-10 md:pl-0"
    >
      {/* Riel (móvil: a la izquierda; escritorio: entre fecha y contenido) */}
      <span
        aria-hidden
        className={`absolute left-[5px] top-2 w-px bg-border md:left-[199px] ${isLast ? "h-0" : "-bottom-2"}`}
      />
      <span
        aria-hidden
        className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 md:left-[194px] ${
          current ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(229,166,99,0.15)]" : "border-border-strong bg-background"
        }`}
      />

      <p className="pt-0.5 font-mono text-xs uppercase tracking-wider text-subtle md:text-right">
        {startDate} — {endDate}
      </p>

      <div className={isLast ? "" : "pb-12"}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            {role}
            <span className="text-subtle"> · </span>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-accent hover:text-accent-secondary"
              >
                {company}
                <FiArrowUpRight className="text-base transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : (
              <span className="text-accent">{company}</span>
            )}
          </h3>
          {current && <Badge variant="success">{t.currentLabel}</Badge>}
          {type === "freelance" && <Badge>{t.freelanceLabel}</Badge>}
        </div>

        {project && <p className="mt-1.5 text-sm text-subtle">{project}</p>}

        <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-muted">
          {description.map((line, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-accent/70" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((tech) => {
            const Icon = getTechIcon(tech);
            return (
              <span key={tech} className="chip">
                <Icon aria-hidden className="text-[13px]" />
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </motion.li>
  );
}
