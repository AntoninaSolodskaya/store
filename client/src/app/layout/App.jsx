import React, { Fragment, Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
import { logoutUser } from "../../auth/authActions";
import setAuthToken from '../../common/util/setAuthToken';
import { loadCards } from '../../pages/card/cardActions';

const actions = {
  logoutUser,
  loadCards
};

class App extends Component {

  handleSignOut = () => {
    this.props.logoutUser();
    localStorage.clear();
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    setAuthToken(token);
    console.log("token", token);
    this.props.loadCards()
  }

  render() {
    return (
      <Fragment>
        <main>
          <NavBar handleSignOut={this.handleSignOut} />
          <Switch>
            <Route exact path="/" component={Main} /> 
            <Route path="/register" component={withRouter(SignUpForm)} />
            <Route path="/login" component={withRouter(LoginForm)} /> 
            <Route path="/sale" component={Sale} />
            <Route path="/addSale" component={withRouter(SaleForm)} />
            <Route path="/about" component={About} />
            <Route path="/cards" component={Sell} />
            <Route path="/blog" component={Blog} />
            <Route path="/review" component={ReviewForm} />
            <Route
              exact
              path="/card/:id"
              render={props => <CardPage {...props} />}
            />
            <Route path="/test" component={TestComponent} />
          </Switch>
        </main>
        <FooterPage />
      </Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(App);
