import { combineReducers } from "redux";

import lists from "./lists";
import activeList from "./activeList";

export default combineReducers({
  lists,
  activeList
});
