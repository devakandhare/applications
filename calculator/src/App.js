import "./App.scss";

function Display(props) {
  return <div className="calculator-display">{props.result}</div>;
}

function Cell({ lastCell, content }) {
  if (lastCell) {
    return <div className="orange-cell">{content}</div>;
  }
  return <div className="calculator-cell">{content}</div>;
}

function App() {
  return (
    <div className="app-container">
      <div className="calculator-app">
        <Display result={"131.5"} />
        <div className="calculator-row">
          <Cell content="7" />
          <Cell content="8" />
          <Cell content="9" />
          <Cell content="/" lastCell />
        </div>
        <div className="calculator-row">
          <Cell content="4" />
          <Cell content="5" />
          <Cell content="6" />
          <Cell content="*" lastCell />
        </div>
        <div className="calculator-row">
          <Cell content="1" />
          <Cell content="2" />
          <Cell content="3" />
          <Cell content="+" lastCell />
        </div>
        <div className="calculator-row">
          <Cell content="." />
          <Cell content="0" />
          <Cell content="=" />
          <Cell content="-" lastCell />
        </div>
        <div className="calculator-clear">Clear</div>
      </div>
    </div>
  );
}

export default App;
