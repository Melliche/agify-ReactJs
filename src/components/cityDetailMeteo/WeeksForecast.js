import METEO from "../../api/meteoAPI";
import Chart from "react-apexcharts";
import { Component, useEffect, useState } from "react";
import { fcall } from "q";

export default function WeeksForecast({ insee }) {
  // const [twoWeeksForecast, setTwoWeeksForecast] = useState([]);

  const [test, setTest] = useState({
    // options: {},
    // series: [],
  });

  useEffect(() => {
    METEO.getForecastForTWoNextWeeksByInsee(insee).then((data) => {
      console.log(data.forecast);
      let forecast = data.forecast;
      setTest({
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
            data: [forecast[0].tmin, 40, 40, 40, 40, 60, 70, 91],
          },
        ],
      });
    });
  }, [insee]);

  // this.state = {
  //     forecast: METEO.getForecastForTWoNextWeeksByInsee(props.insee).then()
  // };

  // useEffect(() => {
  //     METEO.getForecastForTWoNextWeeksByInsee(insee).then((data) => {
  //         setTwoWeeksForecast(data.forecast);
  //     });
  // });
  // console.log(twoWeeksForecast)

  return (
    <div className="app">
      <h2>Éphémérides</h2>
      {/* <p>{test.name}</p> */}
      <div className="row">
        <div className="mixed-chart">
          <Chart
            // options={{}}
            // series={{}}
            options={!test.options ? {} : test.options}
            series={!test.series ? [] : test.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
