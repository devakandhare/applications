import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <div className="nav-container">
        <div className="home-container">
          <span>React</span>
          <img src={logo} alt="react" />
        </div>
        <div className="right-manu-container">
          <div className="menu-item">Home</div>
          <div className="menu-item">Service</div>
          <div className="menu-item">Product</div>
          <div className="menu-item">Contact Us</div>
          <div className="menu-item">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
