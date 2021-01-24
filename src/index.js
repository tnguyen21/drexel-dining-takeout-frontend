import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import "./styles/index.css";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>Order</h1>;
}

function Users() {
  return <h1>Serve</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
          {/* <Home /> */}
        </Route>
        <Route exact path="/order">
          {/* <Order /> */}
          <About />
        </Route>
        <Route exact path="/service">
          {/* <Service /> */}
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
