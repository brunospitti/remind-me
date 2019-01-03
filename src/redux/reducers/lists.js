// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

import { mock_lists } from "../../assets/mock_data";
import { listColors } from "../../assets/globalStyles";
import { randomId } from "../../assets/helpers";

function lists(state = mock_lists, action) {
  switch (action.type) {

    case "ADD_LIST": {
      const newState = [...state];

      newState.push({
        list: action.newList,
        id: randomId(),
        color: listColors[action.newColor],
        items: []
      });

      return newState;
    }

    case "CHANGE_LIST_COLOR": {
      const newState = [...state];

      newState[
        newState.findIndex(key => key.list == action.listName)
      ].color = listColors[action.newColor];

      return newState;
    }

    case "ADD_ITEM_TO_LIST": {
      const newState = [...state];

      let currTime = new Date(new Date().toString().split("GMT")[0] + " UTC")
        .toISOString()
        .split(".")[0];

      newState.filter(list => list.id === action.listId)[0].items.push({
        id: randomId(),
        task: action.itemToAdd,
        start_date: currTime,
        checked: false,
        labels: []
      });

      return newState;
    }

    case "DELETE_ITEM_FROM_LIST": {
      const newState = [...state];

      let currListItems = newState.filter(list => list.id === action.listId)[0].items;
      let currItem = currListItems.filter(item => item.id === action.itemToDelete)[0];
      let itemIndex = currListItems.indexOf(currItem);

      if (itemIndex > -1) {
        currListItems.splice(itemIndex, 1);
      }

      return newState;
    }

    case "CHECK_ITEM": {
      const newState = [...state];

      let currList = newState.filter(list => list.id === action.listId)[0]
      let currTask = currList.items.find(x => x.id === action.itemToCheck);
      currTask.checked = !currTask.checked;
      currList.currTask;

      newState[newState.findIndex(key => key.id == currList.id)].id = currList.id;

      return newState;
    }

    case "CHANGE_ITEM_PRIORITY_COLOR": {
      const newState = [...state];

      let currList = newState.filter(list => list.id === action.listId)[0]
      let currTask = currList.items.find(x => x.id === action.taskId);
      console.log(currTask)
      currTask.priority = action.newPriority;
      currList.currTask;

      newState[newState.findIndex(key => key.id == currList.id)].id = currList.id;

      return newState;
    }

    default:
      return state;

  }
}

export default lists;
