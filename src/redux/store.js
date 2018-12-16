import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { defaultLabels, mock_lists } from "../assets/mock_data";

// create an object for the default data
const defaultState = {
  defaultLabels,
  mock_lists
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
