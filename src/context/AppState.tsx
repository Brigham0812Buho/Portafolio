"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Audience = "empleado" | "freelance";

type AppState = {
  contactAudience: Audience;
  setContactAudience: (a: Audience) => void;
};


const defaultState: AppState = {
  contactAudience: "empleado",
  // noop setters for default
  setContactAudience: () => {},
};

const AppStateContext = createContext<AppState>(defaultState);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [contactAudience, setContactAudience] = useState<Audience>(defaultState.contactAudience);

  return (
    <AppStateContext.Provider
      value={{
        contactAudience,
        setContactAudience,
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
