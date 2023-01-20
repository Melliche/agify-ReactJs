import METEO from "../../api/meteoAPI";
import Chart from "react-apexcharts";
import { Component, useEffect, useState } from "react";

export default function WeeksForecast({ insee }) {
  // const [twoWeeksForecast, setTwoWeeksForecast] = useState([]);
  const [test, setTest] = useState(
    {
        // name: "test",
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
    }    
  );
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
            options={test.options}
            series={test.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
