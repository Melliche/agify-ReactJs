import { hover } from "@testing-library/user-event/dist/hover";
import { useParams } from "react-router-dom";
import Ephemeris from "../components/cityDetailMeteo/Ephemeris";
import WeeksForecast from "../components/cityDetailMeteo/WeeksForecast";
import  { CityDetailProvider } from "../context/cityDetailContext";
export default function CityMeteoDetails({ insee }) {

  // style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
  return (
    <CityDetailProvider value={{insee}}>
      <div className="component-content">
        <WeeksForecast insee={insee} />
        <Ephemeris insee={insee} />
      </div>
    </CityDetailProvider>
  );
}
