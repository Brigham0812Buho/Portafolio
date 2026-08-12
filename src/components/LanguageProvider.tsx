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
    experience: string;
    englishLevelLabel: string;
    fullStack: string;
    mobileDescription?: string;
    desktopDescription?: string;
    deliveryDescription?: string;
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
    serviceCards: Array<{ title: string; desc: string }>;
    projectField: string;
    projectTypeLabel: string;
    projectOptions: string[];
    placeholder: string;
    defaultProjectMessage: string;
    email: string;
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
    quoteLabel: string;
    quoteTitle: string;
    mailSubjectPrefix: string;
    mailBodyIntro: string;
    mailBodyDescriptionLabel: string;
    mailBodySignOff: string;
    whatsappTextIntro: string;
    whatsappTextFooter: string;
    employeeDescription: string;
    freelanceDescription: string;
    viewSiteLabel: string;
  };
};

const allTranslations: Record<Locale, Translations> = {
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
      experience: "+3 años de experiencia",
      englishLevelLabel: "Inglés",
      fullStack: "Full Stack",
      mobileDescription: "Apps móviles con UX clara, flujo funcional y rendimiento fluido.",
      desktopDescription: "Sistemas internos y dashboards con supervisión, automatización y control de datos.",
      deliveryDescription: "Diseño, lógica, despliegue y mantenimiento continuo para web, móvil y escritorio.",
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
      projectField: "Describe tu proyecto",
      projectTypeLabel: "Tipo de proyecto",
      projectOptions: ["Landing page", "Aplicación web", "Sistema interno", "E-commerce"],
      placeholder:
        "Necesito una landing page con SEO, formulario, integración con WhatsApp y panel administrativo...",
      defaultProjectMessage: "Necesito una cotización.",
      email: "Enviar por email",
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
      mailSubjectPrefix: "Cotización ·",
      mailBodyIntro: "Hola Gary,\n\nQuiero cotizar un proyecto de tipo:",
      mailBodyDescriptionLabel: "Descripción:",
      mailBodySignOff: "\n\nSaludos.",
      whatsappTextIntro: "Hola Gary, quiero cotizar un proyecto de tipo",
      whatsappTextFooter: ".\n\n",
      employeeDescription:"",
      freelanceDescription:"",
      viewSiteLabel: "Ver sitio →",
      quoteLabel: "Cotización",
      quoteTitle: "Solicita tu cotización",
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
      downloadCV: "Download Resume",
      focus: "Focus",
      mobile: "Mobile",
      desktop: "Desktop",
      delivery: "Delivery",
      experience: "+3 years of experience",
      englishLevelLabel: "English",
      fullStack: "Full Stack",
      mobileDescription: "Mobile apps with clear UX and functional flow.",
      desktopDescription: "Internal systems, dashboards and business tools.",
      deliveryDescription: "Design, business logic, deployment and continuous maintenance across web, mobile and desktop.",
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
      projectField: "Describe your project",
      projectTypeLabel: "Project type",
      projectOptions: ["Landing page", "Web app", "Internal system", "E-commerce"],
      placeholder:
        "I need a landing page with SEO, form, WhatsApp integration and admin panel...",
      defaultProjectMessage: "I need a quote.",
      email: "Send by email",
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
      mailSubjectPrefix: "Quote ·",
      mailBodyIntro: "Hello Gary,\n\nI would like to request a quote for a project type:",
      mailBodyDescriptionLabel: "Description:",
      mailBodySignOff: "\n\nRegards.",
      whatsappTextIntro: "Hello Gary, I would like a quote for a project type",
      whatsappTextFooter: ".\n\n",
      employeeDescription:"",
      freelanceDescription:"",
      viewSiteLabel: "View site →",
      quoteLabel: "Quote",
      quoteTitle: "Request your quote",
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
