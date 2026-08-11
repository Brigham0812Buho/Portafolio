"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "es" | "en";

type Translations = {
  navbar: {
    home: string;
    experience: string;
    projects: string;
    contact: string;
    language: string;
    context: string;
  };
  hero: {
    summary: string;
    projects: string;
    contact: string;
    downloadCV: string;
    focus: string;
    mobile: string;
    desktop: string;
    delivery: string;
    englishLevel: string;
    mobileDescription?: string;
    desktopDescription?: string;
    deliveryDescription?: string;
  };
  contact: {
    talk: string;
    projectTitle: string;
    projectDescription: string;
    employee: string;
    freelance: string;
    downloadCV: string;
    fastReply: string;
    services: string;
    projectField: string;
    email: string;
    whatsapp: string;
    coverage: string;
    githubCard: string;
    linkedinCard: string;
    cvCard: string;
  };
};

const translations: Record<Locale, Translations> = {
  es: {
    navbar: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      language: "Idioma",
      context: "Contenido en español",
    },
    hero: {
      summary:
        "Desarrollador Full Stack con experiencia en web, móvil y sistemas empresariales. Participo en proyectos CRM, ERP y monitoreo industrial, cuidando entrega, rendimiento y arquitectura.",
      projects: "Ver proyectos",
      contact: "Contactarme",
      downloadCV: "Descargar CV",
      focus: "Enfoque",
      mobile: "Móvil",
      desktop: "Escritorio",
      delivery: "Entrega",
      mobileDescription: "Apps móviles con UX clara, flujo funcional y rendimiento fluido.",
      desktopDescription: "Sistemas internos y dashboards con supervisión, automatización y control de datos.",
      deliveryDescription: "Diseño, lógica, despliegue y mantenimiento continuo para web, móvil y escritorio.",
      englishLevel: "Intermedio",
    },
    contact: {
      talk: "Hablemos",
      projectTitle: "¿Qué proyecto quieres construir?",
      projectDescription:
        "Desarrollo web, apps y sistemas con enfoque senior, pensando en claridad de negocio, rendimiento y entregables profesionales.",
      employee: "Busco un empleado",
      freelance: "Busco freelance",
      downloadCV: "Descargar CV",
      fastReply: "Respuesta rápida",
      services: "Servicios",
      projectField: "Describe tu proyecto",
      email: "Enviar por email",
      whatsapp: "WhatsApp",
      coverage: "Perú en general · remoto / presencial",
      githubCard: "GitHub",
      linkedinCard: "LinkedIn",
      cvCard: "CV",
    },
  },
  en: {
    navbar: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      context: "Content in English",
    },
    hero: {
      summary:
        "Full Stack developer with experience in web, mobile and enterprise systems. I work on CRM, ERP and monitoring projects, focusing on delivery, performance and architecture.",
      projects: "View projects",
      contact: "Contact me",
      downloadCV: "Download CV",
      focus: "Focus",
      mobile: "Mobile",
      desktop: "Desktop",
      delivery: "Delivery",
      mobileDescription: "Mobile apps with clear UX and functional flow.",
      desktopDescription: "Internal systems, dashboards and business tools.",
      deliveryDescription: "Design, business logic, deployment and continuous maintenance across web, mobile and desktop.",
      englishLevel: "Intermediate",
    },
    contact: {
      talk: "Let’s talk",
      projectTitle: "What project do you want to build?",
      projectDescription:
        "Web development, apps and systems with a senior mindset, prioritizing business clarity, performance and professional delivery.",
      employee: "I’m hiring",
      freelance: "I’m looking for a freelancer",
      downloadCV: "Download CV",
      fastReply: "Quick reply",
      services: "Services",
      projectField: "Describe your project",
      email: "Send by email",
      whatsapp: "WhatsApp",
      coverage: "Peru in general · remote / onsite",
      githubCard: "GitHub",
      linkedinCard: "LinkedIn",
      cvCard: "CV",
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const storedLocale = typeof window !== "undefined" ? window.localStorage.getItem("locale") : null;
    if (storedLocale === "en" || storedLocale === "es") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
