import { Experience } from "@/types";

export const experiences = {
  es: [
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
  ] as Experience[],

  en: [
    {
      id: "fireno",
      company: "Fireno S.A.C.",
      role: "Programming Assistant",
      startDate: "January 2026",
      endDate: "May 2026",
      type: "empleo",
      description: [
        "Developed a real-time monitoring system for fire control panels: desktop app using Tauri and React, TCP communication, message decoding, SQLite database, installer with Inno Setup orchestrating subsystems via PM2 and XML configuration, and an error log shipping system.",
        "Built web applications with PHP, React, Bootstrap and CSS for firefighting resource management and access control, using MySQL and IndexedDB. Implemented automatic PDF maintenance certificate generation and integrated OCR for data extraction in an expense system.",
      ],
      url: "https://www.fireno.com/",
      stack: ["Tauri", "React", "PHP", "Bootstrap", "MySQL", "SQLite", "IndexedDB", "PM2", "OCR"],
    },
    {
      id: "data-service",
      company: "Data Service Capacitación S.R.L.",
      url: "https://dscont.pe/",
      role: "Software Developer",
      startDate: "May 2023",
      endDate: "December 2025",
      type: "empleo",
      description: [
        "Frontend development with React and Material UI for CRM and ERP systems, and GraphQL API implementation.",
        "Refactored code toward component patterns and clean architecture, developed complex stored procedures in MySQL for accounting logic, and implemented a DB update/monitoring system using .NET 4.5.",
        "Mobile app with Flutter for electronic invoicing: DB design, backend REST APIs in Node.js documented with Swagger, IndexedDB for catalogs, and Play Store publishing.",
      ],
      stack: ["React", "Material UI", "GraphQL", "MySQL", ".NET 4.5", "Flutter", "Node.js", "Swagger"],
    },
    {
      id: "viaja-cusco-tours",
      company: "Viaja Cusco Tours",
      role: "Freelance Developer",
      startDate: "2026",
      endDate: "2026",
      type: "freelance",
      url: "https://www.viajacuscotours.com",
      description: [
        "End-to-end development of a tourism landing page with Tailwind CSS: design, implementation and deployment on Vercel, including SEO optimization to improve visibility and search rankings.",
      ],
      stack: ["Tailwind CSS", "Vercel", "SEO"],
    },
  ] as Experience[],
};