import React from "react";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import { Provider, connect } from "react-redux";
import styled from "styled-components";
require("babel-polyfill");

import store from "../redux/store";
import { userFetch } from "../redux/actionCreators/userFetch";

import Loading from "./basics/Loading";
import Header from "./Header";
import { Footer } from "./Footer";

// global css styles
import { GlobalStyles } from "../assets/globalStyles";

// Code splitting section

const loading = () => <Loading />;

const LoadableHomePagePage = Loadable({
  loader: () => import("../pages/HomePage"),
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
        <StyledMaxWidth>
          <Provider store={store}>
            <Router>
              <LoadableHomePagePage path="/" />
            </Router>
          </Provider>
        </StyledMaxWidth>
        <Footer />
        <GlobalStyles />
      </div>
    );
  }
}

// styled components
const StyledMaxWidth = styled("div")`
  max-width: 1300px;
  margin: 0 auto;
`;

export default connect(
  null,
  { userFetch }
)(MainApp);
