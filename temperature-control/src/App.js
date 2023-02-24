import React, { useState } from "react";
import "./App.scss";

function App() {
  const [temperature, setTemperature] = useState(13);

  const getDisplayClass = (theTemp) => {
    if (theTemp < 13) return "good";
    else if (theTemp < 20) return "medium";
    else return "high";
  };

  return (
    <div className="App">
      <div className="temperature-container">
        <div className={`temparature-display ${getDisplayClass(temperature)}`}>
          {temperature} <sup>o</sup> C
        </div>
        <div className="temperature-counter">
          <div
            className="minus-counter"
            onClick={() => setTemperature((preState) => preState - 1)}
          >
            -
          </div>
          <div
            className="plus-counter"
            onClick={() => setTemperature((preState) => preState + 1)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
