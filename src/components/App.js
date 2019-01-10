import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
require("babel-polyfill");

import store from "../redux/store";

import { Header } from "./Header";
import { Footer } from "./Footer";

// global css styles
import { GlobalStyles } from "../assets/globalStyles";

// Code splitting section

const loading = () => <h1>loading split code...</h1>;

const LoadableToDosPage = Loadable({
  loader: () => import("../pages/ToDosPage"),
  loading
});

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Provider store={store}>
          <Router>
            <LoadableToDosPage path="/" />
          </Router>
        </Provider>
        <Footer />
        <GlobalStyles />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
