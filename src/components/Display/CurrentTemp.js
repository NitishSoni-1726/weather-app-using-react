import React from "react";
import { weatherData } from "../API";

export default function CurrentTemp(props) {
  let CurrentTemp = weatherData.current.temp_c;
  if (props.tempvalue === "°F") {
    CurrentTemp = (CurrentTemp * 9) / 5 + 32;
  }
  let HighTemp = weatherData.forecast.forecastday[0].day.maxtemp_c;
  if (props.tempvalue === "°F") {
    HighTemp = (HighTemp * 9) / 5 + 32;
    HighTemp = HighTemp.toFixed(1);
  }
  let LowTemp = weatherData.forecast.forecastday[0].day.mintemp_c;
  if (props.tempvalue === "°F") {
    LowTemp = (LowTemp * 9) / 5 + 32;
    LowTemp = LowTemp.toFixed(1);
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-50 bg-secondary bg-opacity-10 p-3">
      <h2 className="text-center">{weatherData.location.name}</h2>
      <h3 className="text-center">
        {CurrentTemp} {props.tempvalue}
      </h3>
      <h5 className="text-center mt-2">{weatherData.current.condition.text}</h5>
      <img
        src={weatherData.current.condition.icon}
        alt="..."
        className="mb-3"
      ></img>
      <div className="d-flex justify-content-between w-75">
        <h6>
          H : {HighTemp} {props.tempvalue}
        </h6>
        <h6>
          L : {LowTemp} {props.tempvalue}
        </h6>
      </div>
    </div>
  );
}
