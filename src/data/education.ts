import { Education, Certification } from "@/types";

export const education = {
  es: [
    {
      id: "utp",
      degree: "Maestría en Ciencia de Datos e Inteligencia Artificial",
      institution: "Universidad Tecnológica del Perú (UTP)",
      startDate: "Agosto 2026",
      endDate: "Actualidad",
      current: true,
    },
    {
      id: "unsaac",
      degree: "Ingeniería Informática y de Sistemas",
      institution: "Universidad Nacional de San Antonio Abad del Cusco",
      note: "Bachiller · tesis de titulación en desarrollo",
      startDate: "2018",
      endDate: "2023",
    },
  ] as Education[],

  en: [
    {
      id: "utp",
      degree: "Master's in Data Science and Artificial Intelligence",
      institution: "Universidad Tecnológica del Perú (UTP)",
      startDate: "August 2026",
      endDate: "Present",
      current: true,
    },
    {
      id: "unsaac",
      degree: "Computer and Systems Engineering",
      institution: "National University of San Antonio Abad of Cusco",
      note: "Bachelor's degree · professional thesis in progress",
      startDate: "2018",
      endDate: "2023",
    },
  ] as Education[],
};

export const certifications = {
  es: [
    { id: "cert-1", name: "Desarrollo Web Profesional", institution: "Universidad Continental", hours: "144 h", year: "2022" },
    { id: "cert-2", name: "The Complete Flutter Development Bootcamp with Dart", institution: "Udemy", hours: "30 h", year: "2024" },
    { id: "cert-3", name: "Flutter Móvil: De Cero a Experto", institution: "DevTalles", hours: "50.5 h", year: "2025" },
  ] as Certification[],

  en: [
    { id: "cert-1", name: "Professional Web Development", institution: "Universidad Continental", hours: "144 h", year: "2022" },
    { id: "cert-2", name: "The Complete Flutter Development Bootcamp with Dart", institution: "Udemy", hours: "30 h", year: "2024" },
    { id: "cert-3", name: "Flutter Mobile: From Zero to Expert", institution: "DevTalles", hours: "50.5 h", year: "2025" },
  ] as Certification[],
};
