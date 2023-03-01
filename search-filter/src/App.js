import "./App.scss";
import { useState } from "react";
import searchIcon from "./search-icon.png";
import { states } from "./state";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app-container">
      <div className="search-container">
        <div className="search">
          <input
            className="search-text"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img src={searchIcon} alt="search-icon" />
        </div>
        <div className="search-result-container">
          {states
            .filter((theState) =>
              theState.name.toUpperCase().startsWith(searchText.toUpperCase())
            )
            .map((theState) => (
              <div
                key={theState.id}
                className="search-result"
                onClick={() => setSearchText(theState.name)}
              >
                {theState.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
