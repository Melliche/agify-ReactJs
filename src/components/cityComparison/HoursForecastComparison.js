import METEO from "../../api/meteoAPI";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

export default function HoursForecastComparison({ insees }) {
  const [cityHoursForecast, setHoursForecast] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cityName, setCityName] = useState(null);

  useEffect(() => {
    METEO.getNextHourlyInfoByInsee(insees.insee1).then((data) => {
      if (data) {
        METEO.getNextHourlyInfoByInsee(insees.insee2).then((data2) => {
          if (data2) {
            setCityName(
              `Comparaison de température entre ${data.city.name} et ${data2.city.name} sur 12 heures`
            );
            setIsLoaded(true);

            let city1Temp = [];
            let city2Temp = [];
            let hours = [];
            for (let i = 0; i < data.forecast.length; i++) {
              city1Temp.push(data.forecast[i].temp2m);
              city2Temp.push(data2.forecast[i].temp2m);
              hours.push(data.forecast[i].datetime);
            }
            setHoursForecast({
              series: [
                {
                  name: `Température à ${data.city.name}`,
                  data: city1Temp,
                },
                {
                  name: `Température à ${data2.city.name}`,
                  data: city2Temp,
                },
              ],
              options: {
                chart: {
                  height: 350,
                  type: "area",
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "smooth",
                },
                xaxis: {
                  type: "datetime",
                  categories: hours,
                },
                tooltip: {
                  x: {
                    format: "dd/MM/yy HH:mm",
                  },
                },
              },
            });
          }
        });
      }
    });
  }, [insees]);

  return (
    <div className="">
      <div>
        {!isLoaded ? (
          "Chargement..."
        ) : (
          <>
            <h2>{cityName}</h2>
            <div className="app">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={cityHoursForecast.options}
                    series={cityHoursForecast.series}
                    type="area"
                    height={400}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
