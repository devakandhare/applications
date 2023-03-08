import { useState } from "react";
import logo from "./logo.svg";
import menu from "./menu-icon.png";
import closeMenu from "./menu-close-icon.png";
import "./App.scss";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="app-container">
      <div className={`nav-container ${!showMenu || 'height-320'}`}>
        <div className="home-container">
          <span>React</span>
          <img src={logo} alt="react" />
        </div>
        <div className={`right-manu-container ${!showMenu || 'pad'}`}>
          <div className="menu-item menu-item-icon">
            <img
              src={!showMenu ? menu : closeMenu}
              alt="menu"
              className="menu-img"
              onClick={() => setShowMenu((prevState) => !prevState)}
            />
          </div>
          <div className={`menu-item ${showMenu || 'hide-menu'}`}>Home</div>
          <div className={`menu-item ${showMenu || 'hide-menu'}`}>Service</div>
          <div className={`menu-item ${showMenu || 'hide-menu'}`}>Product</div>
          <div className={`menu-item ${showMenu || 'hide-menu'}`}>Contact Us</div>
          <div className={`menu-item ${showMenu || 'hide-menu'}`}>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
