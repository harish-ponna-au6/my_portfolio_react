import React from "react";
import PortfolioWebPage from "./page/PortfolioWebPage";
import { Route } from "react-router-dom";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={PortfolioWebPage} />
    </div>
  );
};

export default App;
