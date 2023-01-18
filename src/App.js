import "./App.css";
import METEO from "./api/meteoAPI";
import {  useState } from "react";
// import { AppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";
export default function App() {
  // const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const [cityName, setCityName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    METEO.getCityInfoByName(cityName).then((data) => {
      const city = data.cities.find((city) => city.name.toLowerCase === cityName.toLowerCase);
      navigate(`/details/${city.insee}`);
    });
  };

  return (
    <>
      <p>Enter cityName</p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input onChange={(e) => setCityName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
