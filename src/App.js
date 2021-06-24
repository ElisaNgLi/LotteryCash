import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import Header from "./component/Header";
import LeftSide from "./component/LeftSideButtons";
import DisplayWindow from "./component/DisplayWindow";
import Ticket from "./component/Ticket";

function App() {
  return (
    <div id="background-container">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <LeftSide />
          </div>
          <div className="col-5">
            <Ticket />
          </div>
          <div className="col">
            <DisplayWindow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
