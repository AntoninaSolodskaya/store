import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import "./index.css";
import App from "./app/layout/App";
import ScrollToTop from "./common/util/ScrollToTop";
import { loadCards } from "./pages/card/cardActions";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();
// store.dispatch(loadCards());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop> 
        <Route component={App}/>
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
