import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import { Provider } from "react-redux";

import store from "../redux/store";

import { Header } from "./Header";
import { Footer } from "./Footer";

// global css styles
// eslint-disable-next-line
import globalStyles from "../globalStyles";

// Code splitting section

const loading = () => <h1>loading split code...</h1>;

const LoadableHomePage = Loadable({
  loader: () => import("../pages/HomePage"),
  loading
});

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Provider store={store}>
          <Router>
            <LoadableHomePage path="/" />
          </Router>
        </Provider>
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
