import { combineReducers } from "redux";

import lists from "./lists";
import items from "./items";

export default combineReducers({
  lists,
  items
});
