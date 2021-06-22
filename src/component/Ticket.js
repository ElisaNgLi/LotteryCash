import React from "react";

import "../css/Ticket.css";
const Ticket = (props) => {
  return (
    <div id="ticket-container" className="card">
      <div className="card-body">
        <div>
          <p>some numbers here</p>
        </div>
        <div className="container">
          <div className="row">
            <button type="button" className="btn">
              {" "}
              CASH
            </button>
            <button type="button" className="btn">
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
