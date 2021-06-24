import React from "react";

import "../css/Ticket.css";

import TicketNumber from "./TicketNumber";

const Ticket = ({
  clickNumber,
  selectedNumber,
  unSelectedNumber,
  clear,
  cash,
  random,
}) => {
  //Generate the ticket number 1-20
  const ticketNumber = [...Array(20).keys()].map((i) => i + 1);

  //Buttons functionalities
  const handleOnCash = () => {
    cash();
  };

  const handleOnClear = () => {
    clear();
  };

  const handleOnRandom = () => {
    random();
  };

  return (
    <div id="ticket-container" className="card">
      <div className="card-body">
        <div className="container">
          {ticketNumber.map((value) => (
            <TicketNumber
              key={value.toString()}
              number={value}
              backgroundColor={
                selectedNumber.indexOf(value) !== -1 ? "#8ecae6" : "#468faf"
              }
              clickNumber={clickNumber}
              unSelectedNumber={unSelectedNumber}
            />
          ))}
        </div>
        <div className="container">
          <div className="row">
            <button
              id="button-con"
              type="button"
              className="btn"
              onClick={handleOnRandom}
            >
              {" "}
              RANDOM
            </button>
            <button
              id="button-con"
              type="button"
              className="btn"
              onClick={handleOnCash}
            >
              {" "}
              CASH
            </button>
            <button
              id="button-con"
              type="button"
              className="btn"
              onClick={handleOnClear}
            >
              {" "}
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
