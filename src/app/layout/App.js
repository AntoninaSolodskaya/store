import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import FooterPage from "../../pages/FooterPage";
import SignUpForm from "../../pages/SignUpForm";
import LoginForm from "../../pages/LoginForm";

function App() {
  return (
    <Fragment>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </main>
      <FooterPage />
    </Fragment>
  );
}

export default App;
