import { combineReducers } from "redux";

import lists from "./lists";
import activeList from "./activeList";
import user from "./user";

export default combineReducers({
  lists,
  activeList,
  user
});
