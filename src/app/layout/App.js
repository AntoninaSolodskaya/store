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
import Sale from "../../pages/Sale";
import SaleForm from "../../pages/SaleForm";
import Chat from "../../pages/Chat";
import About from "../../pages/About";

function App() {
  return (
    <Fragment>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/sale" component={Sale} />
          <Route exact path="/addSale" component={SaleForm} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
      <FooterPage />
    </Fragment>
  );
}

export default App;
