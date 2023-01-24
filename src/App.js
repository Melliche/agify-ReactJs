import "./App.css";
import METEO from "./api/meteoAPI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState(null);
  const [cityName2, setCityName2] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    METEO.getCityInfoByName(cityName).then((data) => {
      const city = data.cities.find(
        (city) => city.name.toLowerCase === cityName.toLowerCase
      );
      if (!cityName2) {
        navigate(`/details/${city.insee}`);
      } else {
        METEO.getCityInfoByName(cityName2).then((data) => {
          const city2 = data.cities.find(
            (city) => city.name.toLowerCase === cityName2.toLowerCase
          );
          navigate(`/comparison/${city.insee}/${city2.insee}`);
        });
      }
    });
  };

  return (
    <>
      <section className="section">
        <h1 className="title">Meteo</h1>
        <h2>Prévision météorologique d'une ville</h2>
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="input"
            placeholder="cityName"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <h2>Comparaison de température entre deux villes</h2>
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="input"
            placeholder="cityName"
            onChange={(e) => setCityName(e.target.value)}
          />
          <input
            className="input"
            placeholder="cityName"
            onChange={(e) => setCityName2(e.target.value)}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <h2 className="infotag">Julick Mellah Corporation</h2>
      </section>
    </>
  );
}
