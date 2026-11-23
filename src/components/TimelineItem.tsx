"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import type { Experience } from "@/types";
import { useLanguage } from "@/components/LanguageProvider";
import { Badge } from "@/components/ui/Badge";
import { getTechIcon } from "@/lib/techIcons";

function yearRange(startDate: string, endDate: string) {
  const start = startDate.match(/(\d{4})/)?.[1] ?? startDate;
  const end = endDate.match(/(\d{4})/)?.[1] ?? endDate;
  return start === end ? start : `${start} — ${end}`;
}

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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="grid md:grid-cols-[150px_1fr] md:gap-8"
    >
      {/* Fecha (escritorio) */}
      <div className="hidden md:block pt-6 text-right">
        <p className="font-mono text-sm font-semibold tracking-[0.12em] text-accent-secondary">
          {yearRange(startDate, endDate)}
        </p>
        <p className="mt-1 text-xs text-muted">
          {startDate} — {endDate}
        </p>
      </div>

      {/* Riel + tarjeta */}
      <div className={`relative pl-9 md:pl-10 ${isLast ? "" : "pb-6"}`}>
        <span
          aria-hidden
          className={`absolute left-[7px] top-0 w-px bg-gradient-to-b from-accent-secondary/60 to-border ${
            isLast ? "h-7" : "bottom-0"
          }`}
        />
        <span
          aria-hidden
          className={`absolute left-0 top-7 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent-secondary ${
            current ? "bg-accent-secondary" : "bg-background"
          }`}
        >
          {current && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary/60" />
          )}
        </span>

        <article
          className={`group rounded-[24px] border bg-[linear-gradient(135deg,rgba(37,27,19,0.92),rgba(29,23,18,0.98))] p-5 md:p-6 shadow-[0_22px_60px_rgba(8,5,3,0.4)] transition-colors duration-300 hover:border-accent-secondary/50 ${
            current ? "border-accent-secondary/40" : "border-[rgba(213,178,124,0.18)]"
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground md:text-xl">{company}</h3>
              <p className="mt-1 text-sm font-medium text-accent-secondary">{role}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {current && <Badge variant="dark">{t.currentLabel}</Badge>}
              <Badge variant="soft">
                {type === "freelance" ? t.freelanceLabel : t.employmentLabel}
              </Badge>
            </div>
          </div>

          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted md:hidden">
            <FiCalendar className="text-accent-secondary" />
            {startDate} — {endDate}
          </p>

          {project && (
            <p className="mt-3 border-l-2 border-accent/60 pl-3 text-sm italic text-muted">{project}</p>
          )}

          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/90">
            {description.map((line, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(213,178,124,0.12)] pt-4">
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => {
                const Icon = getTechIcon(tech);
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-medium text-foreground"
                  >
                    <Icon className="text-sm text-accent-secondary" />
                    {tech}
                  </span>
                );
              })}
            </div>

            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-secondary underline-offset-4 hover:underline"
              >
                {(type === "empleo" ? t.viewCompanyLabel : t.viewSiteLabel).replace(" →", "")}
                <FiArrowUpRight />
              </a>
            )}
          </div>
        </article>
      </div>
    </motion.li>
  );
}
