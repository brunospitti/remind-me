// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

import { mock_lists } from "../../assets/mock_data";
import { listColors } from "../../assets/globalStyles";
import { randomId } from "../../assets/helpers";

function lists(state = mock_lists, action) {
  switch (action.type) {
    case "ADD_LIST":
      const newStateAddList = [...state];

      newStateAddList.push({
        list: action.newList,
        id: randomId(),
        color: listColors[action.newColor],
        items: []
      });

      return newStateAddList;

    case "CHANGE_LIST_COLOR":
      const newStateChangeColor = [...state];

      newStateChangeColor[
        newStateChangeColor.findIndex(key => key.list == action.listName)
      ].color = listColors[action.newColor];

      return newStateChangeColor;

    default:
      return state;
  }
}

export default lists;
