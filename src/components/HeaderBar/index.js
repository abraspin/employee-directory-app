import React from "react";
import "./style.css";

function HeaderBar({ title, icon }) {
  return (
    <div>
      <div className="row bg-dark  ">
        <h1 className="mx-auto text-light">
          {" "}
          {title}
          <span>
            {" "}
            <i className={icon} />
          </span>
        </h1>
      </div>
    </div>
  );
}

export default HeaderBar;
