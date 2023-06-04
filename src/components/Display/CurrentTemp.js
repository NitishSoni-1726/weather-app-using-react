import React from "react";

export default function CurrentTemp(props) {
  let CurrentTemp = props.data.current.temp_c;
  if (props.tempvalue === "°F") {
    CurrentTemp = (CurrentTemp * 9) / 5 + 32;
    CurrentTemp = CurrentTemp.toFixed(1);
  }
  let HighTemp = props.data.forecast.forecastday[0].day.maxtemp_c;
  if (props.tempvalue === "°F") {
    HighTemp = (HighTemp * 9) / 5 + 32;
    HighTemp = HighTemp.toFixed(1);
  }
  let LowTemp = props.data.forecast.forecastday[0].day.mintemp_c;
  if (props.tempvalue === "°F") {
    LowTemp = (LowTemp * 9) / 5 + 32;
    LowTemp = LowTemp.toFixed(1);
  }
  function addFav() {}

  return (
    <>
      <button
        className="btn btn-dark btn-sm ms-2 mt-2 align-self-start"
        id="add-fav"
        onClick={addFav}
      >
        + Add to Favourites
      </button>
      <div className="d-flex flex-column align-items-center justify-content-center w-50 bg-black bg-opacity-50 p-3 mt-4 border border-2 hover">
        <h2 className="text-center">
          {props.data.location.name}, {props.data.location.region},{" "}
          {props.data.location.country}
        </h2>
        <h3 className="text-center">
          {CurrentTemp} {props.tempvalue}
        </h3>
        <h5 className="text-center mt-2">
          {props.data.current.condition.text}
        </h5>
        <img
          src={props.data.current.condition.icon}
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
    </>
  );
}
