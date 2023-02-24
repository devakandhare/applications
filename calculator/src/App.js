import React, { useState } from "react";
import "./App.scss";

function Display(props) {
  return (
    <div className="calculator-display">
      <div className="result">{props.result}</div>
    </div>
  );
}

function Cell({ lastCell, content, addToDisplayString }) {
  if (lastCell) {
    return (
      <div className="orange-cell" onClick={() => addToDisplayString(content)}>
        {content}
      </div>
    );
  }
  return (
    <div
      className="calculator-cell"
      onClick={() => addToDisplayString(content)}
    >
      {content}
    </div>
  );
}

function App() {
  const [result, setResult] = useState("");

  function addToDisplayString(content) {
    if (content === "=") calculateResult();
    else setResult(result + content);
  }

  function calculateResult() {
    setResult(eval(result));
  }

  return (
    <div className="app-container">
      <div className="calculator-app">
        <Display result={result} />
        <div className="calculator-row">
          <Cell content="7" addToDisplayString={addToDisplayString} />
          <Cell content="8" addToDisplayString={addToDisplayString} />
          <Cell content="9" addToDisplayString={addToDisplayString} />
          <Cell content="/" addToDisplayString={addToDisplayString} lastCell />
        </div>
        <div className="calculator-row">
          <Cell content="4" addToDisplayString={addToDisplayString} />
          <Cell content="5" addToDisplayString={addToDisplayString} />
          <Cell content="6" addToDisplayString={addToDisplayString} />
          <Cell content="*" addToDisplayString={addToDisplayString} lastCell />
        </div>
        <div className="calculator-row">
          <Cell content="1" addToDisplayString={addToDisplayString} />
          <Cell content="2" addToDisplayString={addToDisplayString} />
          <Cell content="3" addToDisplayString={addToDisplayString} />
          <Cell content="+" addToDisplayString={addToDisplayString} lastCell />
        </div>
        <div className="calculator-row">
          <Cell content="." addToDisplayString={addToDisplayString} />
          <Cell content="0" addToDisplayString={addToDisplayString} />
          <Cell content="=" addToDisplayString={addToDisplayString} />
          <Cell content="-" addToDisplayString={addToDisplayString} lastCell />
        </div>
        <div className="calculator-clear" onClick={() => setResult("")}>
          Clear
        </div>
      </div>
    </div>
  );
}

export default App;
