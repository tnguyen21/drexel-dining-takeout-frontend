import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styles/index.css";

function Home() {
  return <h1 className="text-lg">Home</h1>;
}

function About() {
  return <h2 className="text-lg">About</h2>;
}

function Users() {
  return <h2 className="text-lg">Users</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order">About</Link>
            </li>
            <li>
              <Link to="/service">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            {/* <Landing /> */}
            <Home />
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
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
