import axios from "axios";
export async function Suggestion(place) {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/search.json",
    params: { q: place },
    headers: {
      "X-RapidAPI-Key": "d7afdd6f86mshe5cb3ab2531f125p1d35b2jsnfeea94144949",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
}
export async function getWeatherData(place) {
  const Weather = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: place,
      days: "3",
    },
    headers: {
      "X-RapidAPI-Key": "d7afdd6f86mshe5cb3ab2531f125p1d35b2jsnfeea94144949",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const Weatherresponse = await axios.request(Weather);
    return Weatherresponse.data;
  } catch (error) {
    alert("No Place matches your Search Input in our Records");
    window.location.reload();
  }
}

export async function getAstronomyData(place) {
  const Astronomy = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
    params: { q: place },
    headers: {
      "X-RapidAPI-Key": "d7afdd6f86mshe5cb3ab2531f125p1d35b2jsnfeea94144949",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const AstronomyResponse = await axios.request(Astronomy);
  return AstronomyResponse.data;
}
