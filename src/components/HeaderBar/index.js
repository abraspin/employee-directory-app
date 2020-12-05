import React from "react";
// import "./style.css";

function HeaderBar({ title, icon }) {
  return (
    <div className="App-header">
      {/* <div className="container"> */}
      <div className="row bg-dark  ">
        <h1 className="mx-auto text-light">
          {" "}
          {title}
          <span>
            {" "}
            <i className={icon} />
          </span>
        </h1>
        {/* </div> */}
      </div>
    </div>
  );
}

export default HeaderBar;
