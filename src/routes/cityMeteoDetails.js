import { useParams } from "react-router-dom";
import Ephemeris from "../components/cityDetailMeteo/Ephemeris";
import WeeksForecast from "../components/cityDetailMeteo/WeeksForecast";
import  { CityDetailProvider } from "../context/cityDetailContext";
export default function CityMeteoDetails({ router }) {

  const { insee } = useParams();

  return (
    <CityDetailProvider value={{insee}}>
        <Ephemeris insee={insee} />
        <WeeksForecast insee={insee} />
    </CityDetailProvider>
  );
}
