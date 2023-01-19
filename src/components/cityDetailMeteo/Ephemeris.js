import METEO from "../../api/meteoAPI";


export default function Ephemeris ({insee}) {

  const Ephemeris = METEO.getCityEphemerisByInsee(insee).then((data) => {
    console.log(data);
    return data;
  });
  console.log(Ephemeris);


  return (
    <section className="ephemeris">
      <h1>Éphémérides</h1>
      <p> { insee }</p>
    </section>
  );
};
