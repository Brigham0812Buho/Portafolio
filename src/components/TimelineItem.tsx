"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
  SiBootstrap,
  SiDotnet,
  SiFlutter,
  SiGraphql,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiTauri,
  SiVercel,
} from "react-icons/si";
import type { Experience } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";

const techIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tauri: SiTauri,
  PHP: SiPhp,
  Bootstrap: SiBootstrap,
  MySQL: SiMysql,
  SQLite: FiCode,
  IndexedDB: FiCode,
  PM2: FiCode,
  OCR: FiCode,
  "Tailwind CSS": SiTailwindcss,
  Vercel: SiVercel,
  SEO: FiCode,
  "Material UI": FiCode,
  GraphQL: SiGraphql,
  ".NET 4.5": SiDotnet,
  Flutter: SiFlutter,
  "Node.js": SiNodedotjs,
  Swagger: SiSwagger,
};

function getTechIcon(name: string): IconType {
  return techIcons[name] ?? FiCode;
}

export function TimelineItem({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const initials = exp.company
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const yearMatch = exp.startDate.match(/(\d{4})$/);
  const year = yearMatch ? yearMatch[1] : exp.startDate.split(" ").pop();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="h-full"
    >
      <motion.article
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <GlassCard className="h-full">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-secondary text-xs font-bold text-background shadow-sm">
                {initials}
              </div>
              <div>
                <Badge variant="soft">{exp.type === "freelance" ? "Freelance" : "Empleo"}</Badge>
                <p className="mt-2 text-sm text-muted">{exp.startDate} — {exp.endDate}</p>
              </div>
            </div>
            <div className="rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold text-accent-secondary">
              {year}
            </div>
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-foreground md:text-xl">{exp.company}</h3>
            <p className="mt-1 text-sm text-muted">{exp.role}</p>
          </div>

          <ul className="mt-3 space-y-2 text-sm text-foreground/90">
            {exp.description.slice(0, 2).map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {exp.stack.map((tech) => {
              const Icon = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-medium text-foreground transition-transform duration-200 hover:scale-[1.03]"
                >
                  <Icon className="text-sm" />
                  {tech}
                </span>
              );
            })}
          </div>

          {exp.url && (
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-secondary underline-offset-4 hover:underline"
            >
              {exp.type === "empleo" ? "Ver empresa →" : "Ver sitio →"}
            </a>
          )}
        </GlassCard>
      </motion.article>
    </motion.div>
  );
}
