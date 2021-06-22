import React from "react";

import "../css/DisplayWindow.css";

const DisplayWindow = (props) => {
  return (
    <div id="card-container" className="card">
      <div id="card-body-container" className="card-body">
        <h6 className="card-title">Numbers Selected</h6>
        <div>
          <p>some numbers here</p>
        </div>
        <div className="total-container">
          <h6 className="card-subtitle">Total: $</h6>
        </div>
      </div>
    </div>
  );
};

export default DisplayWindow;
