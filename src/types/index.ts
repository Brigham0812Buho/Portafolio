export interface PersonalInfo {
  name: string;
  role: string;
  summary: string;
  email: string;
  phone?: string;
  location: string;
  englishLevel: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: string[];
  type: "empleo" | "freelance";
  url?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  id: string;
  name: string;
  institution: string;
  hours?: string;
  year: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}   

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
}