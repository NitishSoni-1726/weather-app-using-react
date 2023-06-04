import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import SideNav from "./Navbar/SideNav";
import CurrentTemp from "./Display/CurrentTemp";
import Asronomy from "./Display/Astronomy";
import { Suggestion, getAstronomyData, getWeatherData } from "./API";
import SearchSuggestion from "./Display/SearchSuggestion";

export default function Layout() {
  const [searchSuggestion, setSearchSuggestion] = useState(null);
  const [searchPlace, setSearchPlace] = useState("Bangalore");
  const [TempValue, setTempValue] = useState("°C");
  const [weatherData, setWeatherData] = useState(null);
  const [AstronomyData, setAstronomyData] = useState(null);
  const [SearchData, setSearchData] = useState(null);
  useEffect(() => {
    async function getData() {
      setSearchData(await Suggestion(searchSuggestion));
    }
    if (searchSuggestion === null || searchSuggestion === "") {
      return;
    } else {
      getData();
    }
  }, [searchSuggestion]);
  useEffect(() => {
    async function getData() {
      setWeatherData(await getWeatherData(searchPlace));
      setAstronomyData(await getAstronomyData(searchPlace));
    }
    getData();
  }, [searchPlace]);
  return (
    <>
      <div className="bg-black text-light layout">
        <div className="side-nav">
          <SideNav />
        </div>
        <div className="search-bar d-flex align-items-center">
          <Navbar
            search={setSearchPlace}
            tempvalue={setTempValue}
            value={TempValue}
            suggestion={setSearchSuggestion}
          />
        </div>
        <div className="data">
          {weatherData ? (
            <div className="current-temp-display d-flex flex-column justify-content-center align-items-center">
              <CurrentTemp tempvalue={TempValue} data={weatherData} />
            </div>
          ) : null}
          {AstronomyData ? (
            <div className="astronomy-data-display d-flex justify-content-center mt-4">
              <Asronomy data={AstronomyData} />
            </div>
          ) : null}
        </div>
        {searchSuggestion ? (
          <div className="search-suggestion bg-dark p-2 rounded border boerder-1">
            {SearchData
              ? SearchData.map((item, index) => {
                  return (
                    <SearchSuggestion
                      key={index}
                      name={item.name}
                      region={item.region}
                      country={item.country}
                      search={setSearchPlace}
                      searchsuggestion={setSearchSuggestion}
                    />
                  );
                })
              : null}
          </div>
        ) : (
          null || ""
        )}
      </div>
    </>
  );
}
