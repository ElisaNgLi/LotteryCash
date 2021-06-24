import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import Header from "./component/Header";
import LeftSide from "./component/LeftSideButtons";
import DisplayWindow from "./component/DisplayWindow";
import Ticket from "./component/Ticket";

function App() {
  const [total, setTotal] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState([]);
  const MAX_LENGTH = 5;

  //When user click the button it adds up the value
  const addTotal = (value) => {
    if (selectedNumber.length === MAX_LENGTH) {
      const totalValue = value + total;
      setTotal(totalValue);
    } else {
      alert("Please select your 5 numbers first");
    }
  };

  //When user click the ticket numbers
  const clickNumber = (value) => {
    if (selectedNumber.length === MAX_LENGTH) {
      alert("You already choose your 5 numbers");
    } else {
      setSelectedNumber([...selectedNumber, value]);
    }
  };

  //When user un select the ticket number
  const unSelectedNumber = (value) => {
    if (total === 0) {
      setSelectedNumber(selectedNumber.filter((number) => number !== value));
    } else {
      alert("You already added value to these numbers. Clear and select again");
    }
  };

  //Clear button
  const clear = () => {
    setTotal(0);
    setSelectedNumber([]);
  };

  //Cash button
  const cash = () => {
    if (selectedNumber.length === MAX_LENGTH) {
      alert(`Numbers Selected: ${selectedNumber} \n Cash Value: ${total}`);
    } else {
      alert("Please select your 5 numbers");
    }
  };

  //Random button to select 5 numbers
  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const random = () => {
    if (total === 0) {
      const randomNumbers = [];
      //only generate 5 numbers, check length first
      for (let i = 0; i < MAX_LENGTH; i++) {
        // since array starts from 0. Define min num as 1 and max as 21. This equals to 0-20
        let temp = generateNumber(1, 21);
        //check for the number selection
        if (randomNumbers.indexOf(temp) > -1) {
          i--;
        } else {
          //push the random numbers to the array
          randomNumbers.push(temp);
        }
      }
      setSelectedNumber(randomNumbers);
    } else {
      alert("You already choose 5 numbers");
    }
  };

  return (
    <div id="background-container">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <LeftSide addTotal={addTotal} />
          </div>
          <div className="col-5">
            <Ticket
              clickNumber={clickNumber}
              selectedNumber={selectedNumber}
              unSelectedNumber={unSelectedNumber}
              cash={cash}
              clear={clear}
              random={random}
            />
          </div>
          <div className="col">
            <DisplayWindow selectedNumber={selectedNumber} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
