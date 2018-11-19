import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

// create an object for the default data
const defaultState = {
  num: 0
};

const store = createStore(
  reducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" && typeof window.devToolsExtension != "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
