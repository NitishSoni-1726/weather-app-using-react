import React from "react";
import MoonRise from "../Assets/MoonRise.png";
import MoonSet from "../Assets/MoonSet.png";
import SunRise from "../Assets/SunRise.png";
import SunSet from "../Assets/SunSet.png";
export default function Asronomy(props) {
  return (
    <div className="container d-flex flex-wrap justify-content-evenly mt-1">
      <div className="sunrise d-flex flex-column align-items-center bg-black bg-opacity-50 p-2 width hover">
        <img src={SunRise} alt="..." className="astro-icon"></img>
        <h6>{props.data.astronomy.astro.sunrise}</h6>
        <h6>Sunrise</h6>
      </div>
      <div className="sunset d-flex flex-column align-items-center bg-black bg-opacity-50 p-2 width hover">
        <img src={SunSet} alt="..." className="astro-icon"></img>
        <h6>{props.data.astronomy.astro.sunset}</h6>
        <h6>Sunset</h6>
      </div>
      <div className="moonrise d-flex flex-column align-items-center bg-black bg-opacity-50 p-2 width hover">
        <img src={MoonRise} alt="..." className="astro-icon"></img>
        <h6>{props.data.astronomy.astro.moonrise}</h6>
        <h6>Moonrise</h6>
      </div>
      <div className="moonset d-flex flex-column align-items-center bg-black bg-opacity-50 p-2 width hover">
        <img src={MoonSet} alt="..." className="astro-icon"></img>
        <h6>{props.data.astronomy.astro.moonset}</h6>
        <h6>Moonset</h6>
      </div>
    </div>
  );
}
