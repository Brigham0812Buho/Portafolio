import { Project } from "@/types";

export const personalProjects = {
  es: [
    {
      id: "task-manager",
      title: "Task Manager — App de gestión de tareas",
      description:
        "App móvil de gestión de tareas con backend en Clean Architecture: listado, filtrado por estado/prioridad y detalle, consumiendo una API REST vía stored procedures.",
      stack: [
        "React Native",
        "TypeScript",
        ".NET 8",
        "ASP.NET Core",
        "Dapper",
        "SQL Server",
        "Jest",
        "xUnit",
      ],
      repoUrl: "", // pega aquí el link del repo
    },
    {
      id: "viaja-cusco-tours",
      title: "Viaja Cusco Tours",
      description:
        "Landing page turística freelance: diseño, implementación y despliegue, con optimización SEO para mejorar visibilidad en buscadores.",
      stack: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
      demoUrl: "https://www.viajacuscotours.com",
    },
  ] as Project[],

  en: [
    {
      id: "task-manager",
      title: "Task Manager — Task management app",
      description:
        "Mobile task management app with a Clean Architecture backend: listing, filtering by status/priority and detail views, consuming a REST API via stored procedures.",
      stack: [
        "React Native",
        "TypeScript",
        ".NET 8",
        "ASP.NET Core",
        "Dapper",
        "SQL Server",
        "Jest",
        "xUnit",
      ],
      repoUrl: "",
    },
    {
      id: "viaja-cusco-tours",
      title: "Viaja Cusco Tours",
      description:
        "Tourism landing page (freelance): design, implementation and deployment, with SEO optimization to improve visibility on search engines.",
      stack: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
      demoUrl: "https://www.viajacuscotours.com",
    },
  ] as Project[],
};