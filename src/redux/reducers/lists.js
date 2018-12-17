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

      case "ADD_ITEM_TO_LIST":
      const newStateAddItem = [...state];

        let currTime = new Date(new Date().toString().split("GMT")[0] + " UTC")
          .toISOString()
          .split(".")[0];

          newStateAddItem.filter(list => list.id === action.listId)[0].items.push({
          id: randomId(),
          task: action.itemToAdd,
          start_date: currTime,
          end_date: "",
          checked: false,
          labels: []
        });
      return newStateAddItem;

      case "DELETE_ITEM_FROM_LIST":

      const newStateDeleteItem = [...state];

        let currListItems = newStateDeleteItem.filter(list => list.id === action.listId)[0]
          .items;
        let currItem = currListItems.filter(item => item.id === action.itemToDelete)[0];
        let itemIndex = currListItems.indexOf(currItem);

        if (itemIndex > -1) {
          currListItems.splice(itemIndex, 1);
        }

      return newStateDeleteItem;

      default:
      return state;
  }
}

export default lists;
