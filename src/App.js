import React from "react";
import PortfolioWebPage from "./page/PortfolioWebPage";
import { Route } from "react-router-dom";

import "./styles/App.css";

const App = () => {
  const color0 = "black"; //black
  const color1 = "white"; //white
  const color2 = "#ecf0f1"; //white grey
  const color3 = "#c50b26"; //red
  const color4 = "#e71433"; //red shady
  const color5 = "#010b26"; //blue
  const color6 = "#010b26dc"; //blue shady

  return (
    <div
      style={{
        "--color0": color0,
        "--color1": color1,
        "--color2": color2,
        "--color3": color3,
        "--color4": color4,
        "--color5": color5,
        "--color6": color6
      }}
      className="App"
    >
      <Route path="/" component={PortfolioWebPage} />
    </div>
  );
};

export default App;
