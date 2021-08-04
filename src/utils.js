import axios from "axios";

export const getWeather = (city) => {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/climate/month",
    params: { q: city },
    headers: {
      "x-rapidapi-key": "a9d9eae688msh88c1202706454f3p198ab5jsn2e7585f82f98",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
