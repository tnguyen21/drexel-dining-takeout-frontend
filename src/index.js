import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Order from "./components/Order/Order";
import Service from "./components/Service/Service";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
