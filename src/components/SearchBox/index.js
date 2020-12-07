import React from "react";
// import "./Searchbox.css";

const Searchbox = ({ placeholder, searchHandler }) => {
  return <input className="searchBox" type="search" placeholder={placeholder} onChange={searchHandler} />;
};

export default Searchbox;
