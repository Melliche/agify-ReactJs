import './App.css';
import AGIFY from "./api/meteoAPI";

export default function App() {
  return (
    <>
      <p>Nammeee</p>
      <button
        onClick={() => {
          AGIFY.getCityInfoByName("renne").then((data) => {
            console.log(data);
          });
        }}
      >
        {/* {" "} */}
        Get info
      </button>
    </>
  );
}
