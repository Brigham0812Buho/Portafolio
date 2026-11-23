import { TechCategory } from "@/types";

export const techStack = {
  es: [
    { category: "Lenguajes", items: ["Java", "JavaScript", "TypeScript", "Dart", "PHP", "C#"] },
    { category: "Backend", items: ["Spring Boot", "Node.js", "PHP", ".NET Framework 4.5", "GraphQL", "APIs REST"] },
    { category: "Frontend y Móvil", items: ["Angular", "React", "Flutter", "Tauri", "Tailwind CSS", "Bootstrap", "Material UI", "HTML", "CSS"] },
    { category: "Bases de Datos", items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "IndexedDB"] },
    { category: "CI/CD y Calidad", items: ["Jenkins", "SonarQube", "Docker", "Git", "Git Flow"] },
    { category: "Herramientas", items: ["Swagger", "TCP/Sockets", "OCR (Tesseract)", "Inno Setup", "PM2", "Vercel"] },
  ] as TechCategory[],

  en: [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Dart", "PHP", "C#"] },
    { category: "Backend", items: ["Spring Boot", "Node.js", "PHP", ".NET Framework 4.5", "GraphQL", "REST APIs"] },
    { category: "Frontend & Mobile", items: ["Angular", "React", "Flutter", "Tauri", "Tailwind CSS", "Bootstrap", "Material UI", "HTML", "CSS"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "IndexedDB"] },
    { category: "CI/CD & Quality", items: ["Jenkins", "SonarQube", "Docker", "Git", "Git Flow"] },
    { category: "Tools", items: ["Swagger", "TCP/Sockets", "OCR (Tesseract)", "Inno Setup", "PM2", "Vercel"] },
  ] as TechCategory[],
};
