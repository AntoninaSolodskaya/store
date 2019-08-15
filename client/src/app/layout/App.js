import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only";
import "mdbreact/dist/css/mdb.css";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import FooterPage from "../../pages/FooterPage";
import SignUpForm from "../../pages/auth/SignUpForm";
import LoginForm from "../../pages/auth/LoginForm";
import Sale from "../../pages/sale/Sale";
import SaleForm from "../../pages/card/SaleForm";
import About from "../../pages/about/About";
import Sell from "../../pages/Sell";
import Blog from "../../pages/chat/Blog";
import ReviewForm from "../../pages/sale/ReviewForm";
import CardPage from "../../pages/card/CardPage";
import TestComponent from "../../testarea/TestComponent";

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
          <Route exact path="/about" component={About} />
          <Route exact path="/cards" component={Sell} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/review" component={ReviewForm} />
          <Route exact path="/card/:id" render={props => <CardPage {...props} />} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </main>
      <FooterPage />
    </Fragment>
  );
}

export default App;
