import { Education, Certification } from "@/types";

export const education = {
  es: [
    {
      id: "unsaac",
      degree: "Bachiller en Ingeniería Informática y de Sistemas",
      institution: "Universidad Nacional de San Antonio Abad del Cusco",
      startDate: "2018",
      endDate: "2023",
    },
  ] as Education[],

  en: [
    {
      id: "unsaac",
      degree: "Bachelor in Computer and Systems Engineering",
      institution: "National University of San Antonio Abad of Cusco",
      startDate: "2018",
      endDate: "2023",
    },
  ] as Education[],
};

export const certifications = {
  es: [
    { id: "cert-1", name: "Desarrollo Web Profesional", institution: "Universidad Continental", hours: "144h", year: "2022" },
    { id: "cert-2", name: "The Complete Flutter Development Bootcamp with Dart", institution: "Udemy", hours: "30h", year: "2024" },
    { id: "cert-3", name: "Flutter Móvil: De Cero a Experto", institution: "DevTalles", hours: "50.5h", year: "2025" },
  ] as Certification[],

  en: [
    { id: "cert-1", name: "Professional Web Development", institution: "Universidad Continental", hours: "144h", year: "2022" },
    { id: "cert-2", name: "The Complete Flutter Development Bootcamp with Dart", institution: "Udemy", hours: "30h", year: "2024" },
    { id: "cert-3", name: "Flutter Mobile: From Zero to Expert", institution: "DevTalles", hours: "50.5h", year: "2025" },
  ] as Certification[],
};