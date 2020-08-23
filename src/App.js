import React from "react";
import PortfolioWebPage from "./page/PortfolioWebPage";
import "./styles/App.css";

const App = () => {
  const black = "#000000"; //black
  const blackShady = "#383737"; //black
  const white = "#ffffff"; //white
  const whiteShady = "#ecf0f1"; //white grey
  const pink = "#FA288C"; //pink
  const pinkShady = "#fb469c"; //pink shady
  const brinjal = "#6726A5"; //brinjal
  const brinjalShady = "#9542e4"; //brinjal shady
  const blue = "#010b26"; //blue

  return (
    <div
      style={{
        "--black": black,
        "--blackShady": blackShady,
        "--white": white,
        "--whiteShady": whiteShady,
        "--primary": pink,
        "--primaryShady": pinkShady,
        "--secondary": brinjal,
        "--secondaryShady": brinjalShady,
        "--other": blue
      }}
      className="App"
    >
      <PortfolioWebPage />
    </div>
  );
};

export default App;
