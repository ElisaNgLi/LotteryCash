import React from "react";

import "../css/Ticket.css";
const Ticket = (props) => {
  //Generate the ticket number 1-20
  const ticketNumber = [...Array(20).keys()].map((i) => i + 1);

  return (
    <div id="ticket-container" className="card">
      <div className="card-body">
        <div className="container">
          {ticketNumber.map((value) => (
            <button
              key={value.toString()}
              id="number-container"
              type="button"
              className="btn"
            >
              {value}
            </button>
          ))}
        </div>
        <div className="container">
          <div className="row">
            <button id="button-con" type="button" className="btn">
              {" "}
              CASH
            </button>
            <button id="button-con" type="button" className="btn">
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
