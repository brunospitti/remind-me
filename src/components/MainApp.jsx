import React from "react";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import { Provider, connect } from "react-redux";
require("babel-polyfill");

import store from "../redux/store";
import { userFetch } from "../redux/actionCreators/userFetch";

import Loading from "./basics/Loading";
import Header from "./Header";
import { Footer } from "./Footer";

// global css styles
import { GlobalStyles } from "../assets/globalStyles";

// Code splitting section

const loading = () => <Loading />

const LoadableSignInPage = Loadable({
  loader: () => import("../pages/SignIn"),
  loading
});

class MainApp extends React.PureComponent {

  componentWillMount() {
    this.props.userFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Provider store={store}>
          <Router>
            <LoadableSignInPage path="/" />
          </Router>
        </Provider>
        <Footer />
        <GlobalStyles />
      </div>
    );
  }
}


export default connect(null, { userFetch })(MainApp);
