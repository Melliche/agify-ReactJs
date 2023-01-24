import { useParams } from "react-router-dom";
import HoursForecastComparison from "../components/cityComparison/HoursForecastComparison";
import { CityComparisonProvider } from "../context/cityComparisonContext";
export default function CityComparison() {
  const { insee1, insee2 } = useParams();
  const insees = { insee1: insee1, insee2: insee2 };

  return (
    <CityComparisonProvider value={insees}>
      <section className="section">
        <div className="component-content">
          <HoursForecastComparison insees={insees} />
        </div>
      </section>
    </CityComparisonProvider>
  );
}
