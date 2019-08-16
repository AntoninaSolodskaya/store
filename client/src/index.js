import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./common/util/setAuthToken";
import { setCurrentUser, logoutUser } from "./auth/authActions";
import { configureStore } from "./store/configureStore";
import "./index.css";
import App from "./app/layout/App";
import ScrollToTop from "./common/util/ScrollToTop";
import history from './history';
import { loadCards } from './pages/card/cardActions';

import * as serviceWorker from "./serviceWorker";

const store = configureStore();
store.dispatch(loadCards());

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
