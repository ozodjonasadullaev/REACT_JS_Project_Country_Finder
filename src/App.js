import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import About from "./components/layout/About";
import State1 from "./components/State1";
import Countries from "./components/Countries";
import CountryState from "./context/country/CountryState";

const App = () => {
  return (
    <CountryState>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="App">
                <div className="container text-center">
                  <Search />
                  <Countries />
                </div>
              </div>
            )}
          ></Route>
          <Route exact path="/about" component={About}></Route>

          <div className="container text-center">
            <Route exact path="/country/:name" component={State1}></Route>
          </div>
        </Switch>
      </Router>
    </CountryState>
  );
};

export default App;
