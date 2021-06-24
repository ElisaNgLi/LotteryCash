import React from "react";

import "../css/DisplayWindow.css";

const DisplayWindow = ({ selectedNumber, total }) => {
  return (
    <div id="card-container" className="card">
      <div id="card-body-container" className="card-body">
        <h6 className="card-title">Numbers Selected</h6>
        <div>
          {selectedNumber.map((number) => (
            <p key={number}>Mark: {number}</p>
          ))}
        </div>
        <div className="total-container">
          <h6 className="card-subtitle">Total: ${total}</h6>
        </div>
      </div>
    </div>
  );
};

export default DisplayWindow;
