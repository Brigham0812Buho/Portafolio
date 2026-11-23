type PricedService = {
  name: string;
  price: string;
  description: string;
  details: string;
};

type RequirementsFormCopy = {
  eyebrow: string;
  title: string;
  description: string;
  company: string;
  taxId: string;
  contactName: string;
  requestDate: string;
  phone: string;
  email: string;
  users: string;
  roles: string;
  objectives: string;
  objectivesOptions: string[];
  otherObjective: string;
  modules: string;
  modulesHint: string;
  moduleOptions: string[];
  integrations: string;
  integrationOptions: string[];
  migration: string;
  migrationOptions: string[];
  hosting: string;
  hostingOptions: string[];
  comments: string;
  commentsPlaceholder: string;
  submit: string;
  required: string;
  whatsappIntro: string;
  yes: string;
  no: string;
};

type ServiceCatalogCopy = {
  eyebrow: string;
  title: string;
  description: string;
  download: string;
  requestQuote: string;
  landing: {
    eyebrow: string;
    title: string;
    description: string;
    viewCatalog: string;
    requestQuote: string;
    downloadWord: string;
  };
  priceNote: string;
  developer: {
    name: string;
    taxId: string;
    phone: string;
    email: string;
    specialty: string;
  };
  webTitle: string;
  customTitle: string;
  extrasTitle: string;
  extrasDescription: string;
  services: PricedService[];
  customServices: PricedService[];
  extras: PricedService[];
  form: RequirementsFormCopy;
};

export const quotationDocumentUrl =
  "/assets/cotizacion/Cat%C3%A1logo%20de%20Precios%20y%20Cotizador%20-%20Desarrollo%20Web.docx";

export const serviceCatalog: Record<"es" | "en", ServiceCatalogCopy> = {
  es: {
    eyebrow: "Servicios freelance · Cusco, Perú",
    title: "Software pensado para hacer crecer tu negocio",
    description:
      "Precios referenciales para que puedas planificar tu proyecto. Cuéntame qué necesitas y prepararé una propuesta según el alcance real.",
    download: "Descargar catálogo Word",
    requestQuote: "Solicitar cotización",
    landing: {
      eyebrow: "Servicios y precios",
      title: "Soluciones claras, desde el inicio",
      description:
        "Conoce los precios referenciales y elige el siguiente paso: revisar el catálogo completo, descargarlo o completar el formulario de requisitos.",
      viewCatalog: "Ver servicios y precios",
      requestQuote: "Completar requisitos",
      downloadWord: "Descargar catálogo Word",
    },
    priceNote:
      "Los precios son referenciales en soles peruanos (PEN). El monto final depende del alcance, las integraciones y los datos que se deban migrar.",
    developer: {
      name: "Gary Brigham Chunga Castillo",
      taxId: "10749884911",
      phone: "+51 927 536 516",
      email: "garybrighamchungacastillo@gmail.com",
      specialty:
        "Desarrollo Web Full-Stack, Sistemas Empresariales (ERP/CRM), Facturación Electrónica y Aplicaciones Móviles.",
    },
    webTitle: "Desarrollo web",
    customTitle: "Sistemas empresariales y software a medida",
    extrasTitle: "Servicios adicionales",
    extrasDescription:
      "Puedes contratarlos junto con el desarrollo o como un servicio independiente.",
    services: [
      {
        name: "Landing page",
        price: "S/ 500 – S/ 1 000",
        description:
          "Una página para presentar un servicio y convertir visitas en consultas.",
        details:
          "El precio varía según secciones, diseño personalizado, animaciones e integraciones.",
      },
      {
        name: "Sitio web con catálogo",
        price: "S/ 800 – S/ 1 500",
        description:
          "Sitio corporativo para mostrar productos o servicios y recibir consultas.",
        details:
          "Depende del número de páginas y productos, categorías, filtros y administración dinámica.",
      },
      {
        name: "Tienda virtual",
        price: "S/ 2 000 – S/ 8 000",
        description:
          "E-commerce con catálogo, carrito, inventario y recepción de pedidos en línea.",
        details:
          "Influyen las variantes, carga de productos, pasarela de pago e integración con facturación o almacén.",
      },
    ],
    customServices: [
      {
        name: "E-commerce avanzado / web a medida",
        price: "S/ 8 000 – S/ 15 000+",
        description:
          "Plataforma personalizada con opciones como multiidioma, portales privados e integraciones.",
        details: "La inversión se define según los flujos y las integraciones requeridas.",
      },
      {
        name: "Sistema específico · CRM, citas o almacén",
        price: "S/ 5 000 – S/ 15 000+",
        description:
          "Sistema enfocado en ventas, inventario, agenda, seguimiento o reportes gerenciales.",
        details: "El alcance depende de los módulos, usuarios y reglas del negocio.",
      },
      {
        name: "Sistema contable a medida",
        price: "S/ 15 000 – S/ 40 000+",
        description:
          "Solución para libros electrónicos, conciliaciones y control de cuentas e impuestos.",
        details: "Requiere definir procesos contables e integraciones antes de cotizar.",
      },
      {
        name: "ERP a medida",
        price: "S/ 25 000 – S/ 80 000+",
        description:
          "Plataforma que integra ventas, compras, inventario, finanzas y recursos humanos.",
        details: "El precio depende de los módulos, sedes, permisos y migración de datos.",
      },
      {
        name: "Software empresarial multisede",
        price: "Desde S/ 80 000",
        description:
          "Arquitectura distribuida para operaciones de alta carga o en múltiples sedes.",
        details: "Se cotiza tras revisar la arquitectura, volumen y disponibilidad requeridos.",
      },
    ],
    extras: [
      {
        name: "Diagnóstico y levantamiento de requisitos",
        price: "S/ 300 – S/ 1 500",
        description: "Definición de objetivos, procesos y alcance del proyecto.",
        details: "",
      },
      {
        name: "Diseño de interfaces UI/UX",
        price: "S/ 500 – S/ 2 500",
        description: "Diseño y prototipado de las principales pantallas.",
        details: "",
      },
      {
        name: "Dominio, hosting y correos",
        price: "S/ 100 – S/ 300",
        description: "Configuración inicial de servicios e infraestructura.",
        details: "Los costos recurrentes de terceros pueden cotizarse por separado.",
      },
      {
        name: "Mantenimiento web mensual",
        price: "S/ 100 – S/ 400",
        description: "Actualizaciones, correcciones y soporte para sitios web.",
        details: "",
      },
      {
        name: "Mantenimiento de sistemas / ERP / ecommerce",
        price: "S/ 300 – S/ 1 500+",
        description: "Soporte y mantenimiento según la complejidad del sistema.",
        details: "",
      },
      {
        name: "Posicionamiento SEO mensual",
        price: "S/ 300 – S/ 1 200",
        description: "Mejoras continuas para aumentar la visibilidad en buscadores.",
        details: "",
      },
      {
        name: "Integración de pagos o APIs",
        price: "S/ 300 – S/ 3 000+",
        description: "Conexión con pasarelas de pago y servicios externos.",
        details: "El costo depende de la API y del flujo de integración.",
      },
    ],
    form: {
      eyebrow: "Cuéntame tu idea",
      title: "Formato de levantamiento de requisitos",
      description:
        "Completa lo que ya tengas definido. Al enviar, se abrirá WhatsApp con un resumen para conversar y cotizar tu proyecto.",
      company: "Empresa / cliente",
      taxId: "RUC (opcional)",
      contactName: "Persona de contacto *",
      requestDate: "Fecha de solicitud",
      phone: "Teléfono",
      email: "Correo electrónico",
      users: "Número estimado de usuarios",
      roles: "Roles requeridos",
      objectives: "Objetivo principal",
      objectivesOptions: [
        "Ventas y facturación",
        "Inventario y almacenes",
        "Clientes y seguimiento comercial (CRM)",
        "Citas, reservas o agenda",
        "Contabilidad y finanzas",
        "Otro",
      ],
      otherObjective: "Especifica otro objetivo",
      modules: "¿Qué te gustaría incluir?",
      modulesHint:
        "Puedes elegir varias opciones. Si buscas una solución completa, selecciona “Todo integrado”.",
      moduleOptions: [
        "Catálogo de productos",
        "Ventas y cotizaciones",
        "Control de inventario / stock",
        "Facturación electrónica",
        "Registro de clientes",
        "Reportes del negocio",
        "Todo integrado (solución completa)",
      ],
      integrations: "Integraciones necesarias",
      integrationOptions: [
        "SUNAT / PSE / OSE",
        "Pasarelas de pago (Yape, Plin, tarjetas)",
        "WhatsApp",
        "Equipos físicos (lectores, impresoras, balanzas)",
        "Ninguna / no estoy seguro",
      ],
      migration: "¿Necesitas migrar datos desde Excel u otro sistema?",
      migrationOptions: ["Sí", "No", "Aún no lo sé"],
      hosting: "Infraestructura / hosting",
      hostingOptions: ["Incluir servidor", "Ya cuento con servidor", "Por definir"],
      comments: "Comentarios o requisitos especiales",
      commentsPlaceholder: "Cuéntame algo más sobre el proyecto...",
      submit: "Enviar requisitos por WhatsApp",
      required: "Los campos marcados con * son obligatorios.",
      whatsappIntro: "Hola Gary, quiero solicitar una cotización de software.",
      yes: "Sí",
      no: "No",
    },
  },
  en: {
    eyebrow: "Freelance services · Cusco, Peru",
    title: "Software designed to help your business grow",
    description:
      "Reference prices to help you plan your project. Tell me what you need and I’ll prepare a proposal based on the actual scope.",
    download: "Download Word catalog",
    requestQuote: "Request a quote",
    landing: {
      eyebrow: "Services and pricing",
      title: "Clear solutions from the start",
      description:
        "Review reference prices and choose your next step: explore the full catalog, download it or fill out the requirements form.",
      viewCatalog: "View services and pricing",
      requestQuote: "Complete requirements",
      downloadWord: "Download Word catalog",
    },
    priceNote:
      "Prices are estimates in Peruvian soles (PEN). The final quote depends on scope, integrations and any data migration.",
    developer: {
      name: "Gary Brigham Chunga Castillo",
      taxId: "10749884911",
      phone: "+51 927 536 516",
      email: "garybrighamchungacastillo@gmail.com",
      specialty:
        "Full-stack web development, business systems (ERP/CRM), electronic invoicing and mobile applications.",
    },
    webTitle: "Web development",
    customTitle: "Business systems and custom software",
    extrasTitle: "Additional services",
    extrasDescription:
      "These can be bundled with development or requested as standalone services.",
    services: [
      {
        name: "Landing page",
        price: "S/ 500 – S/ 1,000",
        description:
          "A single page to present a service and turn visits into inquiries.",
        details:
          "Price varies by sections, custom design, animations and integrations.",
      },
      {
        name: "Website with catalog",
        price: "S/ 800 – S/ 1,500",
        description:
          "A corporate website to showcase products or services and receive inquiries.",
        details:
          "Depends on pages and products, categories, filters and dynamic administration.",
      },
      {
        name: "Online store",
        price: "S/ 2,000 – S/ 8,000",
        description:
          "E-commerce with catalog, cart, inventory and online order handling.",
        details:
          "Product variants, bulk uploads, payment gateways and billing or warehouse integrations affect pricing.",
      },
    ],
    customServices: [
      {
        name: "Advanced e-commerce / custom website",
        price: "S/ 8,000 – S/ 15,000+",
        description:
          "A custom platform with options such as multiple languages, private portals and integrations.",
        details: "Investment depends on the required workflows and integrations.",
      },
      {
        name: "Focused system · CRM, bookings or inventory",
        price: "S/ 5,000 – S/ 15,000+",
        description:
          "A system focused on sales, inventory, scheduling, follow-ups or management reports.",
        details: "Scope depends on modules, users and business rules.",
      },
      {
        name: "Custom accounting system",
        price: "S/ 15,000 – S/ 40,000+",
        description:
          "A solution for electronic ledgers, reconciliations, accounts and tax management.",
        details: "Accounting processes and integrations must be defined before quoting.",
      },
      {
        name: "Custom ERP",
        price: "S/ 25,000 – S/ 80,000+",
        description:
          "A platform connecting sales, purchasing, inventory, finance and human resources.",
        details: "Price depends on modules, locations, permissions and data migration.",
      },
      {
        name: "Multi-location enterprise software",
        price: "From S/ 80,000",
        description:
          "Distributed architecture for high-volume or multi-location operations.",
        details: "Quoted after reviewing architecture, volume and availability requirements.",
      },
    ],
    extras: [
      {
        name: "Requirements discovery and analysis",
        price: "S/ 300 – S/ 1,500",
        description: "Define project goals, processes and scope.",
        details: "",
      },
      {
        name: "UI/UX design",
        price: "S/ 500 – S/ 2,500",
        description: "Design and prototype the main screens.",
        details: "",
      },
      {
        name: "Domain, hosting and email setup",
        price: "S/ 100 – S/ 300",
        description: "Initial setup of services and infrastructure.",
        details: "Recurring third-party fees may be quoted separately.",
      },
      {
        name: "Monthly website maintenance",
        price: "S/ 100 – S/ 400",
        description: "Updates, fixes and support for websites.",
        details: "",
      },
      {
        name: "System / ERP / e-commerce maintenance",
        price: "S/ 300 – S/ 1,500+",
        description: "Support and maintenance based on system complexity.",
        details: "",
      },
      {
        name: "Monthly SEO",
        price: "S/ 300 – S/ 1,200",
        description: "Ongoing improvements to increase search visibility.",
        details: "",
      },
      {
        name: "Payment or API integration",
        price: "S/ 300 – S/ 3,000+",
        description: "Connect payment gateways and external services.",
        details: "Cost depends on the API and integration workflow.",
      },
    ],
    form: {
      eyebrow: "Tell me about your idea",
      title: "Requirements discovery form",
      description:
        "Fill in what you already know. When submitted, WhatsApp will open with a summary so we can discuss and quote your project.",
      company: "Company / client",
      taxId: "Tax ID (optional)",
      contactName: "Contact person *",
      requestDate: "Request date",
      phone: "Phone",
      email: "Email",
      users: "Estimated number of users",
      roles: "Required roles",
      objectives: "Main objective",
      objectivesOptions: [
        "Sales and billing",
        "Inventory and warehouses",
        "Customers and sales follow-up (CRM)",
        "Appointments, bookings or scheduling",
        "Accounting and finance",
        "Other",
      ],
      otherObjective: "Specify another objective",
      modules: "What would you like included?",
      modulesHint:
        "Choose any options that apply. For a complete solution, select “Everything integrated”.",
      moduleOptions: [
        "Product catalog",
        "Sales and quotes",
        "Inventory / stock control",
        "Electronic invoicing",
        "Customer records",
        "Business reports",
        "Everything integrated (complete solution)",
      ],
      integrations: "Required integrations",
      integrationOptions: [
        "SUNAT / PSE / OSE",
        "Payment gateways (Yape, Plin, cards)",
        "WhatsApp",
        "Physical devices (scanners, printers, scales)",
        "None / not sure",
      ],
      migration: "Do you need to migrate data from Excel or another system?",
      migrationOptions: ["Yes", "No", "Not sure yet"],
      hosting: "Infrastructure / hosting",
      hostingOptions: ["Include a server", "I already have a server", "To be decided"],
      comments: "Comments or special requirements",
      commentsPlaceholder: "Tell me anything else about the project...",
      submit: "Send requirements via WhatsApp",
      required: "Fields marked with * are required.",
      whatsappIntro: "Hi Gary, I’d like a software project quote.",
      yes: "Yes",
      no: "No",
    },
  },
};
