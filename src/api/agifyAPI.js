const serverProtocol = "https";
const serverHost = "api.agify?";
const serverPort = 3001;
const baseUrl = `${serverProtocol}://${serverHost}:${serverPort}`;

const API = {
  getTodos: async (name, countryId) => {
    const requestUrl =
      `${baseUrl}name=${name}` + (countryId ? `&country_id=${countryId}` : "");
    try {
      const response = await fetch(requestUrl);
      return await response.json();
    } catch (err) {
      console.error(err.message);
      return [];
    }
  },
};

export default API;
