import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "../redux/store";

import MainApp from "./MainApp";


class App extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));