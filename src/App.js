import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CRDetails from "./components/CRDetails";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cryptocurrencies">
            <Cryptocurrencies />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/crypto/:CRId">
            <CRDetails />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
