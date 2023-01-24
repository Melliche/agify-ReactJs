import Ephemeris from "../components/cityDetailMeteo/Ephemeris";
import WeeksForecast from "../components/cityDetailMeteo/WeeksForecast";
import  { CityComparisonProvider } from "../context/cityDetailContext";
export default function CityComparison({ insee }) {

  return (
    <CityComparisonProvider value={{insee}}>
      <div className="component-content">
        {/* <WeeksForecast insee={insee} />
        <Ephemeris insee={insee} /> */}
      </div>
    </CityComparisonProvider>
  );
}
