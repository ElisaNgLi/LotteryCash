import React, { useState } from "react";

import "../css/LeftSideButtons.css";
import lottery from "../assets/lottery-balls.png";

const LeftSideButtons = () => {
  const [total, setTotal] = useState(0);

  //When user click the button it adds up the value
  const addTotal = (value) => {
    const totalValue = value + total;
    setTotal(totalValue);
  };

  // Dollar value of the button
  const buttonOption = [1, 5, 10, 20];

  return (
    <div className="container">
      <div id="image-container" className="col">
        <img src={lottery} alt="Lottery" />
      </div>
      <div id="button-container" className="col">
        {buttonOption.map((value) => (
          <button
            key={value.toString()}
            id="btn-container"
            type="button"
            className="btn btn-lg"
            onClick={() => addTotal(value)}
          >
            ${value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSideButtons;
