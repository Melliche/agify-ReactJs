import { createContext } from "react";
import { useParams } from "react-router-dom";

export const CityComparisonContext = createContext(null);

export function CityComparisonProvider({ children }) {
  const { insee } = useParams();

  return (
    <CityComparisonContext.Provider value={insee}>
      {children}
    </CityComparisonContext.Provider>
  );
}
