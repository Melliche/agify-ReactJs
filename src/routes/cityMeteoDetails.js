// import METEO from "../api/meteoAPI";
import { useParams } from "react-router-dom";
import Ephemeris from "../components/cityDetailMeteo/Ephemeris";
import  { CityDetailContext } from "../context/cityDetailContext";
export default function CityMeteoDetails({ router }) {

  const { insee } = useParams();

  return (
    <CityDetailContext.Provider value={{insee}}>
        <Ephemeris insee={insee} />
    </CityDetailContext.Provider>
  );
}
