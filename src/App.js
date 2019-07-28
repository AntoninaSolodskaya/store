import React from "react";
import { Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
