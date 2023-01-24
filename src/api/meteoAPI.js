const serverProtocol = "https";
const serverHost = "api.meteo-concept.com/api/";
const baseUrl = `${serverProtocol}://${serverHost}`;
const token = "5bf54971588e628fe67994d96c4abf4779d13931acf8ee4640d17826057dd87c";

const METEO = {
  getCityInfoByName: async (cityName) => {
    const requestUrl =
      `${baseUrl}location/cities?token=${token}&search=${cityName}`;
    try {
      const response = await fetch(requestUrl);
      return await response.json();
    } catch (err) {
      console.error(err.message);
      return [];
    }
  },

  getNextHourlyInfoByInsee: async (insee) => {
    const requestUrl =
      `${baseUrl}forecast/nextHours?token=${token}&insee=${insee}&hourly=true`;
    try {
      const response = await fetch(requestUrl);
      return await response.json();
    } catch (err) {
      console.error(err.message);
      return [];
    }
  },

  getForecastForTWoNextWeeksByInsee: async (insee) => {
    const requestUrl =
      `${baseUrl}forecast/daily?token=${token}&insee=${insee}`;
    try {
      const response = await fetch(requestUrl);
      return await response.json();
    } catch (err) {
      console.error(err.message);
      return [];
    }
  },

  getCityEphemerisByInsee: async (insee) => {
    const requestUrl =
      `${baseUrl}ephemeride/1?token=${token}&insee=${insee}`;
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
