import METEO from "../../api/meteoAPI";
import Chart from "react-apexcharts";
import { useState } from "react";

export default function Ephemeris({ insee }) {
  // const Ephemeris = METEO.getCityEphemerisByInsee(props.insee).then((data) => {
  //   console.log(data);
  //   return data;
  // });
  // console.log(Ephemeris)

  const [ephemeris, setEphemeris] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div className="app">
      <h2>Éphémérides</h2>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={ephemeris.options}
            series={ephemeris.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
