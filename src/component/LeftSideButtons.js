import React from "react";

import "../css/LeftSideButtons.css";
import lottery from "../assets/lottery-balls.png";

const LeftSideButtons = (props) => {
  return (
    <div className="container">
      <div id="image-container" className="col">
        <img src={lottery} alt="Lottery" />
      </div>
      <div id="button-container" className="col">
        <div className="row">
          <div className="col">
            <button id="btn-container" type="button" className="btn btn-lg">
              {" "}
              $1
            </button>
          </div>
          <div className="col">
            <button id="btn-container" type="button" className="btn btn-lg">
              {" "}
              $5
            </button>
          </div>
        </div>
        <div id="second-row" className="row">
          <div className="col">
            <button id="btn-container" type="button" className="btn btn-lg">
              {" "}
              $10
            </button>
          </div>
          <div className="col">
            <button id="btn-container" type="button" className="btn btn-lg">
              {" "}
              $20
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideButtons;
