const serverProtocol = "https";
const serverHost = "api.meteo-concept.com/api/";
// const serverPort = 3001;
const baseUrl = `${serverProtocol}://${serverHost}`;
const token = "5bf54971588e628fe67994d96c4abf4779d13931acf8ee4640d17826057dd87c";


// https://api.meteo-concept.com/api/forecast/nextHours?token=5bf54971588e628fe67994d96c4abf4779d13931acf8ee4640d17826057dd87c&insee=35238&hourly=true


const METEO = {
  getCityInfoByName: async (cityName) => {
    const requestUrl =
      `${baseUrl}forecast/nextHours?token=${token}&search=${cityName}`;
    try {
      const response = await fetch(requestUrl);
      return await response.json();
    } catch (err) {
      console.error(err.message);
      return [];
    }
  },
};

export default METEO;
