import React from "react";

import "../css/TicketNumber.css";

const TicketNumber = ({
  number,
  clickNumber,
  unSelectedNumber,
  backgroundColor,
}) => {
  //When user click the ticket number change the background color
  const handleClick = () => {
    if (backgroundColor === "#468faf") {
      clickNumber(number);
    } else {
      unSelectedNumber(number);
    }
  };

  return (
    <div className="btn-group btn-group-lg" role="group">
      <button
        id="number-container"
        type="button"
        className="btn"
        style={{ backgroundColor: backgroundColor }}
        onClick={handleClick}
      >
        {number}
      </button>
    </div>
  );
};

export default TicketNumber;
