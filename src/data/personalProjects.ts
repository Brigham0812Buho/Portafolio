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
      repoUrl: "https://github.com/Brigham0812Buho/reto_tecnico_experis", 
    },
    {
      id: "viaja-cusco-tours",
      title: "Viaja Cusco Tours",
      description:
        "Landing page turística freelance: diseño, implementación y despliegue, con optimización SEO para mejorar visibilidad en buscadores.",
      stack: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
      demoUrl: "https://www.viajacuscotours.com",
    },
    {
      id: "resbooker-api",
      title: "ResBooker API — Reservas de recursos compartidos",
      description:
        "API REST y GraphQL para gestión de reservas de recursos compartidos (salas, tours, equipos), con Clean Architecture por features, autenticación JWT con roles, stored procedures transaccionales en MySQL para evitar overbooking, y documentación interactiva con Swagger.",
      stack: [
        "Node.js",
        "TypeScript",
        "Express",
        "GraphQL",
        "MySQL",
        "JWT",
        "Swagger",
      ],
      repoUrl: "https://github.com/Brigham0812Buho/resbooker-api",
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
      repoUrl: "https://github.com/Brigham0812Buho/reto_tecnico_experis",
    },
    {
      id: "viaja-cusco-tours",
      title: "Viaja Cusco Tours",
      description:
        "Tourism landing page (freelance): design, implementation and deployment, with SEO optimization to improve visibility on search engines.",
      stack: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
      demoUrl: "https://www.viajacuscotours.com",
    },
    {
      id: "resbooker-api",
      title: "ResBooker API — Shared resource booking",
      description:
        "REST and GraphQL API for managing shared resource bookings (rooms, tours, equipment), with Clean Architecture organized by features, JWT authentication with roles, transactional MySQL stored procedures to prevent overbooking, and interactive Swagger documentation.",
      stack: [
        "Node.js",
        "TypeScript",
        "Express",
        "GraphQL",
        "MySQL",
        "JWT",
        "Swagger",
      ],
      repoUrl: "https://github.com/Brigham0812Buho/resbooker-api",
    },
  ] as Project[],
};