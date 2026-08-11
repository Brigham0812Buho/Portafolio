import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "fireno",
    company: "Fireno S.A.C.",
    role: "Asistente de Programación",
    startDate: "Enero 2026",
    endDate: "Mayo 2026",
    type: "empleo",
    description: [
      "Desarrollo de un sistema de monitoreo en tiempo real de paneles contra incendios: aplicación de escritorio con Tauri y React, comunicación TCP, decodificación de mensajes, base de datos SQLite, instalador con Inno Setup orquestando subsistemas mediante PM2 y configuración XML, y sistema de envío de logs de error.",
      "Desarrollo de aplicaciones web con PHP, React, Bootstrap y CSS para gestión de recursos contra incendios y administración de accesos, con MySQL e IndexedDB. Generación automática de certificados de mantenimiento en PDF e integración de OCR para extracción de datos en un sistema de gastos.",
    ],
    url: "https://www.fireno.com/",
    stack: ["Tauri", "React", "PHP", "Bootstrap", "MySQL", "SQLite", "IndexedDB", "PM2", "OCR"],
  },
  {
    id: "data-service",
    company: "Data Service Capacitación S.R.L.",
    url: "https://dscont.pe/",
    role: "Desarrollador de Software",
    startDate: "Mayo 2023",
    endDate: "Diciembre 2025",
    type: "empleo",
    description: [
      "Desarrollo FrontEnd con React y Material UI para sistemas CRM y ERP, e implementación de API GraphQL.",
      "Migración de código hacia patrón de componentes y arquitectura limpia, desarrollo de stored procedures complejos en MySQL para lógica contable, y sistema de actualización/monitoreo de base de datos con .NET 4.5.",
      "Aplicación móvil con Flutter para facturación electrónica: diseño de base de datos, BackEnd con APIs REST en Node.js documentadas con Swagger, IndexedDB para catálogos, y publicación en Play Store.",
    ],
    stack: ["React", "Material UI", "GraphQL", "MySQL", ".NET 4.5", "Flutter", "Node.js", "Swagger"],
  },
  {
    id: "viaja-cusco-tours",
    company: "Viaja Cusco Tours",
    role: "Desarrollador Freelance",
    startDate: "2026",
    endDate: "2026",
    type: "freelance",
    url: "https://www.viajacuscotours.com",
    description: [
      "Desarrollo integral de una landing page turística con Tailwind CSS: diseño, implementación y despliegue en Vercel, incluyendo optimización SEO para mejorar visibilidad y posicionamiento en motores de búsqueda.",
    ],
    stack: ["Tailwind CSS", "Vercel", "SEO"],
  },
];