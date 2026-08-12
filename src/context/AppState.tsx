"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Audience = "empleado" | "freelance";
export type ProjectType =
  | "Landing page"
  | "Aplicación web"
  | "Sistema interno"
  | "E-commerce";

type AppState = {
  contactAudience: Audience;
  selectedProjectType: ProjectType;
  projectMessage: string;
  setContactAudience: (a: Audience) => void;
  setSelectedProjectType: (p: ProjectType) => void;
  setProjectMessage: (m: string) => void;
};


const defaultState: AppState = {
  contactAudience: "empleado",
  selectedProjectType: "Landing page",
  projectMessage: "",
  // noop setters for default
  setContactAudience: () => {},
  setSelectedProjectType: () => {},
  setProjectMessage: () => {},
};

const AppStateContext = createContext<AppState>(defaultState);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [contactAudience, setContactAudience] = useState<Audience>(defaultState.contactAudience);
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType>(defaultState.selectedProjectType);
  const [projectMessage, setProjectMessage] = useState<string>(defaultState.projectMessage);

  return (
    <AppStateContext.Provider
      value={{
        contactAudience,
        selectedProjectType,
        projectMessage,
        setContactAudience,
        setSelectedProjectType,
        setProjectMessage,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}

export default AppStateContext;
