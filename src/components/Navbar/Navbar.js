import React, { useEffect } from "react";

export default function Navbar(props) {
  function formSubmit(e) {
    e.preventDefault();
    props.search(document.getElementById("search-place").value);
    document.searchForm.reset();
  }
  function TempChangeC(e) {
    if (e.target.checked) {
      props.tempvalue("°C");
    }
  }
  function TempChangeF(e) {
    if (e.target.checked) {
      props.tempvalue("°F");
    }
  }

  useEffect(() => {
    if (props.value === "°C") {
      document.getElementById("btnradio1").setAttribute("checked", true);
      document.getElementById("btnradio2").removeAttribute("checked");
    } else if (props.value === "°F") {
      document.getElementById("btnradio2").setAttribute("checked", true);
      document.getElementById("btnradio1").removeAttribute("checked");
    }
  });
  function search() {
    props.suggestion(document.getElementById("search-place").value);
  }
  return (
    <>
      <div className="p-3 w-100 d-flex">
        <form
          className="d-flex align-items-center flex-grow-1"
          onSubmit={formSubmit}
          name="searchForm"
        >
          <input
            type="text"
            className="bg-secondary rounded border border-0 p-1 text-light w-25"
            id="search-place"
            onKeyUp={search}
            placeholder="Search"
          ></input>
          <button className="btn btn-secondary btn-sm ms-1">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
        <div className="">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              onChange={TempChangeC}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              °C
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              onChange={TempChangeF}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio2">
              °F
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
