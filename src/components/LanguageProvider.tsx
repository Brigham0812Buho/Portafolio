"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { serviceCatalog } from "@/data/serviceCatalog";

type Locale = "es" | "en";

type Translations = {
  navbar: {
    home: string;
    experience: string;
    projects: string;
    services: string;
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
    backend: string;
    experience: string;
    englishLevelLabel: string;
    fullStack: string;
    currentlyLabel: string;
    backendDescription?: string;
    mobileDescription?: string;
    desktopDescription?: string;
    deliveryDescription?: string;
  };
  homeServices: {
    eyebrow: string;
    title: string;
    description: string;
    viewCatalog: string;
    requestQuote: string;
    downloadWord: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    caseLabel: string;
    viewSiteLabel: string;
    technologiesLabel: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    freelanceLabel: string;
    employmentLabel: string;
    viewCompanyLabel: string;
    viewSiteLabel: string;
    currentLabel: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    stackTitle: string;
    educationTitle: string;
    certificationsTitle: string;
    inProgressLabel: string;
  };
  contact: {
    talk: string;
    projectTitle: string;
    projectDescription: string;
    employee: string;
    freelance: string;
    downloadCV: string;
    fastReply: string;
    requirementsTitle: string;
    requirementsDescription: string;
    requirementsButton: string;
    downloadCatalog: string;
    directMessage: string;
    whatsappIntro: string;
    freelanceProjectLabel: string;
    services: string;
    serviceCards: Array<{ title: string; desc: string }>;
    emailCardTitle: string;
    emailCardFooter: string;
    whatsapp: string;
    githubCard: string;
    githubFooter: string;
    linkedinCard: string;
    linkedinFooter: string;
    cvCard: string;
    cvFooter: string;
    coverage: string;
    employeeDescription: string;
    freelanceDescription: string;
    allServices: string;
    viewSiteLabel: string;
  };
};

const allTranslations: Record<Locale, Translations> = {
  es: {
    navbar: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
      language: "Idioma",
      context: "Contenido en español",
    },
    hero: {
      summary:
        "Desarrollador Full Stack con más de tres años y medio de experiencia en sistemas web, móviles y de escritorio para los sectores público y privado: CRM, ERP, contabilidad, monitoreo industrial en tiempo real y modernización de la gestión pública.",
      projects: "Ver proyectos",
      contact: "Contactarme",
      downloadCV: "Descargar CV",
      focus: "Enfoque",
      mobile: "Móvil",
      desktop: "Escritorio",
      delivery: "Entrega",
      backend: "Backend",
      experience: "+3.5 años de experiencia",
      englishLevelLabel: "Inglés",
      fullStack: "Sector público y privado",
      currentlyLabel: "Actualmente",
      backendDescription: "Servicios y APIs con Java, Spring Boot, Node.js y GraphQL sobre PostgreSQL y MySQL.",
      mobileDescription: "Apps móviles con UX clara, flujo funcional y rendimiento fluido.",
      desktopDescription: "Sistemas internos y dashboards con supervisión, automatización y control de datos.",
      deliveryDescription: "Ciclo completo con CI/CD (Jenkins), calidad de código (SonarQube), despliegue y mantenimiento.",
    },
    homeServices: {
      eyebrow: serviceCatalog.es.landing.eyebrow,
      title: serviceCatalog.es.landing.title,
      description: serviceCatalog.es.landing.description,
      viewCatalog: serviceCatalog.es.landing.viewCatalog,
      requestQuote: serviceCatalog.es.landing.requestQuote,
      downloadWord: serviceCatalog.es.landing.downloadWord,
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Casos relevantes y entregables concretos",
      caseLabel: "Caso",
      viewSiteLabel: "Ver sitio →",
      technologiesLabel: "tecnologías",
    },
    timeline: {
      eyebrow: "Experiencia",
      title: "Mi recorrido profesional",
      freelanceLabel: "Freelance",
      employmentLabel: "Empleo",
      viewCompanyLabel: "Ver empresa →",
      viewSiteLabel: "Ver sitio →",
      currentLabel: "Actual",
    },
    skills: {
      eyebrow: "Formación y stack",
      title: "Tecnologías, estudios y certificaciones",
      stackTitle: "Stack técnico",
      educationTitle: "Educación",
      certificationsTitle: "Certificaciones",
      inProgressLabel: "En curso",
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
      requirementsTitle: "Cuéntame qué necesita tu negocio",
      requirementsDescription:
        "El formulario reúne la información del negocio, los módulos y las integraciones para preparar una propuesta ajustada al alcance real.",
      requirementsButton: "Completar formulario de requisitos",
      downloadCatalog: "Descargar catálogo de precios (Word)",
      directMessage: "¿Prefieres conversar primero?",
      whatsappIntro: "Hola Gary, quisiera conversar sobre un proyecto de software.",
      services: "Servicios",
      serviceCards: [
        {
          title: "Landing pages",
          desc: "Presentación clara y con foco en conversión.",
        },
        {
          title: "Apps web",
          desc: "Interfaces modernas con experiencia de usuario sólida.",
        },
        {
          title: "Sistemas internos",
          desc: "Dashboards, procesos, CRUD y automatización.",
        },
        {
          title: "E-commerce",
          desc: "Catálogo, pagos, pedidos y seguimiento.",
        },
      ],
      emailCardTitle: "Email",
      emailCardFooter: "",
      whatsapp: "WhatsApp",
      githubCard: "GitHub",
      githubFooter: "Revisa mi código",
      linkedinCard: "LinkedIn",
      linkedinFooter: "Mi red profesional",
      cvCard: "CV",
      cvFooter: "Versión descargable",
      coverage: "Perú en general · remoto / presencial",
      employeeDescription:"",
      freelanceDescription:
        "Estos son proyectos que desarrollé para clientes. Viaja Cusco Tours es una landing page turística para presentar tours y facilitar consultas de viajeros.",
      freelanceProjectLabel: "Proyecto freelance · Landing page turística",
      allServices: "Ver todos los servicios",
      viewSiteLabel: "Ver sitio →",
    },
  },
  en: {
    navbar: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      language: "Language",
      context: "Content in English",
    },
    hero: {
      summary:
        "Full Stack Developer with more than three and a half years of experience building web, mobile and desktop systems for the public and private sectors: CRM, ERP, accounting, real-time industrial monitoring and public management modernization.",
      projects: "View projects",
      contact: "Contact me",
      downloadCV: "Download Resume",
      focus: "Focus",
      mobile: "Mobile",
      desktop: "Desktop",
      delivery: "Delivery",
      backend: "Backend",
      experience: "3.5+ years of experience",
      englishLevelLabel: "English",
      fullStack: "Public & private sector",
      currentlyLabel: "Currently",
      backendDescription: "Services and APIs with Java, Spring Boot, Node.js and GraphQL on PostgreSQL and MySQL.",
      mobileDescription: "Mobile apps with clear UX and functional flow.",
      desktopDescription: "Internal systems, dashboards and business tools.",
      deliveryDescription: "Full cycle with CI/CD (Jenkins), code quality (SonarQube), deployment and maintenance.",
    },
    homeServices: {
      eyebrow: serviceCatalog.en.landing.eyebrow,
      title: serviceCatalog.en.landing.title,
      description: serviceCatalog.en.landing.description,
      viewCatalog: serviceCatalog.en.landing.viewCatalog,
      requestQuote: serviceCatalog.en.landing.requestQuote,
      downloadWord: serviceCatalog.en.landing.downloadWord,
    },
    projects: {
      eyebrow: "Projects",
      title: "Relevant cases and concrete deliverables",
      caseLabel: "Case",
      viewSiteLabel: "View site →",
      technologiesLabel: "technologies",
    },
    timeline: {
      eyebrow: "Experience",
      title: "My professional journey",
      freelanceLabel: "Freelance",
      employmentLabel: "Employment",
      viewCompanyLabel: "View company →",
      viewSiteLabel: "View site →",
      currentLabel: "Current",
    },
    skills: {
      eyebrow: "Background & stack",
      title: "Technologies, education and certifications",
      stackTitle: "Tech stack",
      educationTitle: "Education",
      certificationsTitle: "Certifications",
      inProgressLabel: "In progress",
    },
    contact: {
      talk: "Let’s talk",
      projectTitle: "What project do you want to build?",
      projectDescription:
        "Web development, apps and systems with a senior mindset, prioritizing business clarity, performance and professional delivery.",
      employee: "I’m hiring",
      freelance: "I’m looking for a freelancer",
      downloadCV: "Download Resume",
      fastReply: "Quick reply",
      requirementsTitle: "Tell me what your business needs",
      requirementsDescription:
        "The form gathers business details, modules and integrations so I can prepare a proposal based on the actual scope.",
      requirementsButton: "Complete the requirements form",
      downloadCatalog: "Download price catalog (Word)",
      directMessage: "Would you rather talk first?",
      whatsappIntro: "Hi Gary, I’d like to discuss a software project.",
      services: "Services",
      serviceCards: [
        {
          title: "Landing pages",
          desc: "Clear layouts focused on conversion.",
        },
        {
          title: "Web apps",
          desc: "Modern interfaces with strong user experience.",
        },
        {
          title: "Internal systems",
          desc: "Dashboards, workflows, CRUD and automation.",
        },
        {
          title: "E-commerce",
          desc: "Catalog, payments, orders and tracking.",
        },
      ],
      emailCardTitle: "Email",
      emailCardFooter: "",
      whatsapp: "WhatsApp",
      githubCard: "GitHub",
      githubFooter: "Check my code",
      linkedinCard: "LinkedIn",
      linkedinFooter: "My professional network",
      cvCard: "CV",
      cvFooter: "Downloadable version",
      coverage: "Peru in general · remote / onsite",
      employeeDescription:"",
      freelanceDescription:
        "These are projects I built for clients. Viaja Cusco Tours is a tourism landing page showcasing tours and helping travelers get in touch.",
      freelanceProjectLabel: "Freelance project · Tourism landing page",
      allServices: "View all services",
      viewSiteLabel: "View site →",
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: Translations;
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
    () => ({ locale, setLocale, translations: allTranslations[locale] }),
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
