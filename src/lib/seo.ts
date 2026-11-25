import type { Metadata } from "next";

const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const origin = process.env.SITE_URL || (host && `https://${host}`);
if (!origin && process.env.VERCEL) {
  throw new Error("Configura SITE_URL con la URL pública de producción del portafolio.");
}
export const siteUrl = new URL(origin || "http://localhost:3000");

const pages = {
  "/": {
    title: "Desarrollador freelance en Cusco | Gary Chunga, Full Stack Developer",
    description: "Soy Gary Chunga, desarrollador de software en Cusco. Creo aplicaciones web, móviles y sistemas a medida. Conoce mis proyectos, experiencia y servicios freelance.",
  },
  "/servicios": {
    title: "Desarrollo web y software a medida en Cusco | Gary Chunga",
    description: "Explora mis servicios de desarrollo freelance en Cusco y cuéntame qué necesitas para tu página web, aplicación o sistema a medida.",
  },
  "/proyectos": {
    title: "Proyectos de desarrollo de software | Gary Chunga",
    description: "Explora mi portafolio de proyectos y conoce las tecnologías que utilizo para desarrollar aplicaciones y sistemas.",
  },
  "/experiencia": {
    title: "Experiencia como desarrollador full stack | Gary Chunga",
    description: "Conoce mi trayectoria en desarrollo de software para el sector público y privado, mi formación y las tecnologías con las que trabajo.",
  },
  "/contacto": {
    title: "Contacta a Gary Chunga | Desarrollador freelance en Cusco",
    description: "Conversemos sobre tu proyecto de desarrollo web o software a medida. Encuentra mis canales de contacto y perfiles profesionales.",
  },
} as const;

export const publicPaths = Object.keys(pages);

export function pageMetadata(path: keyof typeof pages): Metadata {
  const { title, description } = pages[path];
  const url = new URL(path, siteUrl);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, locale: "es_PE", type: "website" },
  };
}
