"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Medium = "en" | "ml";

interface MediumContextType {
  medium: Medium;
  setMedium: (medium: Medium) => void;
}

const MediumContext = createContext<MediumContextType>({
  medium: "en",
  setMedium: () => {},
});

export function MediumProvider({ children }: { children: ReactNode }) {
  const [medium, setMedium] = useState<Medium>("en");

  return (
    <MediumContext.Provider value={{ medium, setMedium }}>
      {children}
    </MediumContext.Provider>
  );
}

export function useMedium() {
  return useContext(MediumContext);
}
