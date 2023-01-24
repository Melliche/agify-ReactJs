import METEO from "../../api/meteoAPI";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

export default function WeeksForecast({ insee }) {
  const [cityForecastChart, setCityForecastChart] = useState({});
  const [cityName, setCityName] = useState(null);
  useEffect(() => {
    METEO.getForecastForTWoNextWeeksByInsee(insee).then((data) => {
      setCityName(data.city.name);

      let dateList = [];
      let tmin = [];
      let tmax = [];
      for (let i = 0; i < data.forecast.length; i++) {
        let currentDate = new Date();
        let dateToAdd = new Date(
          currentDate.setDate(currentDate.getDate() + i)
        );
        dateList.push((dateToAdd.toLocaleString("fr-FR")).substring(0, 5));
        tmin.push(data.forecast[i].tmin);
        tmax.push(data.forecast[i].tmax);
      }

      setCityForecastChart({
        options: {
          chart: {
            id: "rangeArea",
            width: "60%",
          },
        },
        series: [
          {
            name: "Température de la ville de " + data.city.name,
            data: [
              {
                x: dateList[0],
                y: [tmin[0], tmax[0]],
              },
              {
                x: dateList[1],
                y: [tmin[1], tmax[1]],
              },
              {
                x: dateList[2],
                y: [tmin[2], tmax[2]],
              },
              {
                x: dateList[3],
                y: [tmin[3], tmax[3]],
              },
              {
                x: dateList[4],
                y: [tmin[4], tmax[4]],
              },
              {
                x: dateList[5],
                y: [tmin[5], tmax[5]],
              },
              {
                x: dateList[6],
                y: [tmin[6], tmax[6]],
              },
              {
                x: dateList[7],
                y: [tmin[7], tmax[7]]
              },
              {
                x: dateList[8],
                y: [tmin[8], tmax[8]]
              },
              {
                x: dateList[9],
                y: [tmin[9], tmax[9]]
              },
            ],
          },
        ],
        stroke: {
          curve: "straight",
        },
        title: {
          text: `Température ${data.city.name} (all year round)`,
        },
        markers: {
          hover: {
            sizeOffset: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            formatter: (val) => {
              return val + "°C";
            },
          },
        },
      });
    });
  }, [insee]);

  return (
    <div className="app">
      <h1>{!cityName ? "" : cityName}</h1>
      <h2>Temperature sur les 10 prochains jours</h2>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={
              !cityForecastChart.options ? {} : cityForecastChart.options
            }
            series={!cityForecastChart.series ? [] : cityForecastChart.series}
            type="rangeArea"
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

// setTest({
//   options: {
//     chart: {
//       id: "rangeArea",
//     },
//     xaxis: {
//       categories: dateList,
//     },
//   },
//   series: [
//     {
//       name: "Température minimale",
//       data: tmin,
//     },
//     {
//       name: "Température maximale",
//       data: tmax,
//     },
//   ],
//   stroke: {
//     curve: "straight",
//   },
//   title: {
//     text: "New York Temperature (all year round)",
//   },
//   markers: {
//     hover: {
//       sizeOffset: 5,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   yaxis: {
//     labels: {
//       formatter: (val) => {
//         return val + "°C";
//       },
//     },
//   },
// });
// });
// }, [insee]);
