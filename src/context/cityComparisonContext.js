import { createContext } from "react";

export const CityComparisonContext = createContext(null);

export function CityComparisonProvider({ children }) {

  return (
    <CityComparisonContext.Provider value=''>
      {children}
    </CityComparisonContext.Provider>
  );
}
