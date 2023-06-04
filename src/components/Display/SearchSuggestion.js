import React from "react";
export default function SearchSuggestion(props) {
  function search() {
    props.search(props.name + " " + props.region + " " + props.country);
    props.searchsuggestion("");
    document.searchForm.reset();
  }
  return (
    <div className="w-100">
      <button className="w-100 text-start p-1 btn btn-dark" onClick={search}>
        {props.name}, {props.region}, {props.country}
      </button>
    </div>
  );
}
