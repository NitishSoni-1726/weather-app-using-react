import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SideNav from "./Navbar/SideNav";
import CurrentTemp from "./Display/CurrentTemp";
export default function Layout() {
  const [searchPlace, setSearchPlace] = useState("Delhi");
  const [TempValue, setTempValue] = useState("°C");
  return (
    <>
      <div className="bg-black text-light layout border border-2">
        <div className="side-nav">
          <SideNav />
        </div>
        <div className="search-bar">
          <Navbar
            search={setSearchPlace}
            tempvalue={setTempValue}
            value={TempValue}
          />
        </div>
        <div className="current-temp-display d-flex justify-content-center">
          <CurrentTemp tempvalue={TempValue} />
        </div>
      </div>
    </>
  );
}
