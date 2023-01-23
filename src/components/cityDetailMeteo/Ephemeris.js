import METEO from "../../api/meteoAPI";
import Chart from "react-apexcharts";
import { useContext, useEffect, useState } from "react";

export default function Ephemeris({ insee }) {

  const [ephemeris, setEphemeris] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    METEO.getCityEphemerisByInsee(insee).then((data) => {
      setEphemeris(data.ephemeride);
      // if (data.ephemeride) {
      //   setIsLoaded(true);
      // }
    });
  }, []);

  return (
    <div className="">
      <h2>Éphémérides</h2>
      <div>
        {!isLoaded ? (
          "Chargement..."
        ) : (
          <>
            <p>
              Le lever du soleil est à <strong>{ephemeris.sunrise}</strong> du
              matin
            </p>
            <p>
              Le coucher du soleil est à <strong>{ephemeris.sunset}</strong> du
              soir
            </p>
            <p>
              La durée du jour est de <strong>{ephemeris.duration_day}</strong>{" "}
              h
            </p>
            <p>
              Phase de la lune : <strong>{ephemeris.moon_phase}</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
