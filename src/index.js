import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./common/util/ScrollToTop";
import { loadCards } from './pages/card/cardActions';

const store = configureStore();
store.dispatch(loadCards());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
