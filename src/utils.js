import axios from "axios";

export const getWeather = async (latitude, longitude) => {
  const options = {
    method: "GET",
    url: "https://api.ambeedata.com/weather/forecast/by-lat-lng",
    params: {
      lat: latitude,
      lng: longitude,
      filter: "daily",
    },
    headers: {
      "x-api-key":
        "947b9b73582363d9338944201e557ed162de714f21693bb847720566ce19d0ae",
      "Content-type": "application/json",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      //throw new Error(error);
      console.error(error);
    });
};
