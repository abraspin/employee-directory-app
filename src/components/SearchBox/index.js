import React from "react";
// import "./Searchbox.css";

const SearchBox = ({ placeholder, searchHandler }) => {
  const [valueField, setValueField] = React.useState("");

  return (
    <input
      value={valueField}
      className="searchBox"
      type="search"
      placeholder={placeholder}
      onChange={(event) => {
        setValueField(event.target.value);
        searchHandler(valueField);
      }}
    />
  );
};

export default SearchBox;
