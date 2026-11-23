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
    menu: string;
  };
  hero: {
    headline: string;
    summary: string;
    projects: string;
    contact: string;
    downloadCV: string;
    currentlyLabel: string;
    locationLabel: string;
    experienceLabel: string;
    experienceValue: string;
    englishLevelLabel: string;
    modeLabel: string;
    modeValue: string;
    focus: string;
    backend: string;
    mobile: string;
    desktop: string;
    delivery: string;
    backendDescription: string;
    mobileDescription: string;
    desktopDescription: string;
    deliveryDescription: string;
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
    description: string;
    viewSiteLabel: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    freelanceLabel: string;
    currentLabel: string;
  };
  skills: {
    eyebrow: string;
    title: string;
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
    employeeTitle: string;
    employeeDescription: string;
    emailMe: string;
    downloadCV: string;
    fastReply: string;
    requirementsTitle: string;
    requirementsDescription: string;
    requirementsButton: string;
    downloadCatalog: string;
    directMessage: string;
    whatsappIntro: string;
    emailCardTitle: string;
    whatsapp: string;
    githubCard: string;
    githubFooter: string;
    linkedinCard: string;
    linkedinFooter: string;
    coverage: string;
    allServices: string;
  };
  footer: {
    rights: string;
    backToTop: string;
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
      menu: "Abrir menú",
    },
    hero: {
      headline: "Sistemas web, móviles y de escritorio",
      summary:
        "Más de tres años y medio construyendo CRM, ERP, plataformas contables, monitoreo industrial en tiempo real y sistemas para la modernización de la gestión pública, asumiendo el ciclo completo: base de datos, lógica de negocio, despliegue y mantenimiento.",
      projects: "Ver proyectos",
      contact: "Contactarme",
      downloadCV: "Descargar CV",
      currentlyLabel: "Actualmente",
      locationLabel: "Ubicación",
      experienceLabel: "Experiencia",
      experienceValue: "+3.5 años",
      englishLevelLabel: "Inglés",
      modeLabel: "Modalidad",
      modeValue: "Remoto / presencial",
      focus: "En qué me especializo",
      backend: "Backend y APIs",
      mobile: "Aplicaciones móviles",
      desktop: "Software de escritorio",
      delivery: "Entrega continua",
      backendDescription: "Servicios y APIs con Java, Spring Boot, Node.js y GraphQL sobre PostgreSQL y MySQL.",
      mobileDescription: "Apps en Flutter publicadas en Google Play, con UX clara y funcionamiento offline.",
      desktopDescription: "Sistemas internos y de monitoreo en tiempo real con Tauri, React y .NET.",
      deliveryDescription: "CI/CD con Jenkins, calidad de código con SonarQube, despliegue y mantenimiento.",
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
      title: "Proyectos destacados",
      description: "Una selección de proyectos personales y freelance, con su código o el sitio en producción.",
      viewSiteLabel: "Ver sitio",
    },
    timeline: {
      eyebrow: "Experiencia",
      title: "Trayectoria profesional",
      description: "Empresas privadas, sector público y proyectos freelance en los que he trabajado.",
      freelanceLabel: "Freelance",
      currentLabel: "Actual",
    },
    skills: {
      eyebrow: "Formación y stack",
      title: "Tecnologías y formación",
      educationTitle: "Educación",
      certificationsTitle: "Certificaciones",
      inProgressLabel: "En curso",
    },
    contact: {
      talk: "Contacto",
      projectTitle: "¿Trabajamos juntos?",
      projectDescription:
        "Estoy abierto a nuevas oportunidades laborales y a proyectos freelance. Escríbeme por el canal que prefieras y te responderé lo antes posible.",
      employee: "Busco contratar",
      freelance: "Necesito un proyecto",
      employeeTitle: "Disponible para posiciones Full Stack o Backend",
      employeeDescription:
        "Experiencia con Java, Spring Boot, Angular, React, Node.js y Flutter en equipos ágiles. Puedes descargar mi CV o escribirme directamente para coordinar una entrevista.",
      emailMe: "Enviar un correo",
      downloadCV: "Descargar CV",
      fastReply: "Respuesta rápida",
      requirementsTitle: "Cuéntame qué necesita tu negocio",
      requirementsDescription:
        "El formulario reúne la información del negocio, los módulos y las integraciones para preparar una propuesta ajustada al alcance real.",
      requirementsButton: "Completar formulario de requisitos",
      downloadCatalog: "Descargar catálogo de precios (Word)",
      directMessage: "Conversar primero",
      whatsappIntro: "Hola Gary, quisiera conversar sobre un proyecto de software.",
      emailCardTitle: "Email",
      whatsapp: "WhatsApp",
      githubCard: "GitHub",
      githubFooter: "Revisa mi código",
      linkedinCard: "LinkedIn",
      linkedinFooter: "Perfil profesional",
      coverage: "Cusco, Perú · remoto o presencial",
      allServices: "Ver todos los servicios",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },
  en: {
    navbar: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      menu: "Open menu",
    },
    hero: {
      headline: "Web, mobile and desktop systems",
      summary:
        "3.5+ years building CRM, ERP, accounting platforms, real-time industrial monitoring and public sector modernization systems, owning the full cycle: database, business logic, deployment and maintenance.",
      projects: "View projects",
      contact: "Contact me",
      downloadCV: "Download resume",
      currentlyLabel: "Currently",
      locationLabel: "Location",
      experienceLabel: "Experience",
      experienceValue: "3.5+ years",
      englishLevelLabel: "English",
      modeLabel: "Work mode",
      modeValue: "Remote / onsite",
      focus: "What I specialize in",
      backend: "Backend & APIs",
      mobile: "Mobile apps",
      desktop: "Desktop software",
      delivery: "Continuous delivery",
      backendDescription: "Services and APIs with Java, Spring Boot, Node.js and GraphQL on PostgreSQL and MySQL.",
      mobileDescription: "Flutter apps published on Google Play, with clear UX and offline support.",
      desktopDescription: "Internal and real-time monitoring systems with Tauri, React and .NET.",
      deliveryDescription: "CI/CD with Jenkins, code quality with SonarQube, deployment and maintenance.",
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
      title: "Featured projects",
      description: "A selection of personal and freelance projects, with source code or the live site.",
      viewSiteLabel: "View site",
    },
    timeline: {
      eyebrow: "Experience",
      title: "Professional journey",
      description: "Private companies, the public sector and freelance projects I have worked on.",
      freelanceLabel: "Freelance",
      currentLabel: "Current",
    },
    skills: {
      eyebrow: "Background & stack",
      title: "Technologies and education",
      educationTitle: "Education",
      certificationsTitle: "Certifications",
      inProgressLabel: "In progress",
    },
    contact: {
      talk: "Contact",
      projectTitle: "Let’s work together",
      projectDescription:
        "I’m open to new job opportunities and freelance projects. Reach out through any channel and I’ll get back to you as soon as possible.",
      employee: "I’m hiring",
      freelance: "I need a project",
      employeeTitle: "Available for Full Stack or Backend roles",
      employeeDescription:
        "Experience with Java, Spring Boot, Angular, React, Node.js and Flutter in agile teams. Download my resume or email me directly to set up an interview.",
      emailMe: "Send an email",
      downloadCV: "Download resume",
      fastReply: "Quick reply",
      requirementsTitle: "Tell me what your business needs",
      requirementsDescription:
        "The form gathers business details, modules and integrations so I can prepare a proposal based on the actual scope.",
      requirementsButton: "Complete the requirements form",
      downloadCatalog: "Download price catalog (Word)",
      directMessage: "Talk first",
      whatsappIntro: "Hi Gary, I’d like to discuss a software project.",
      emailCardTitle: "Email",
      whatsapp: "WhatsApp",
      githubCard: "GitHub",
      githubFooter: "Check my code",
      linkedinCard: "LinkedIn",
      linkedinFooter: "Professional profile",
      coverage: "Cusco, Peru · remote or onsite",
      allServices: "View all services",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
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
