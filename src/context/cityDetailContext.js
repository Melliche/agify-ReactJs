import { createContext } from "react";

export const CityDetailContext = createContext(null);

export function CityDetailProvider({ children }) {
  return (
    <CityDetailContext.Provider value="">{children}</CityDetailContext.Provider>
  );
}
