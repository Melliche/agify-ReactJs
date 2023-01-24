import Ephemeris from "../components/cityDetailMeteo/Ephemeris";
import WeeksForecast from "../components/cityDetailMeteo/WeeksForecast";
import { CityDetailProvider } from "../context/cityDetailContext";
export default function CityMeteoDetails({ insee }) {
  return (
    <CityDetailProvider value={{ insee }}>
        <div className="component-content">
          <WeeksForecast insee={insee} />
          <Ephemeris insee={insee} />
        </div>
    </CityDetailProvider>
  );
}
