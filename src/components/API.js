import axios from "axios";
export const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
  params: {
    q: "Bangalore",
    days: "3",
  },
  headers: {
    "X-RapidAPI-Key": "d7afdd6f86mshe5cb3ab2531f125p1d35b2jsnfeea94144949",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const response = await axios.request(options);
export const weatherData = response.data;
