// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

import { listColors } from "../../assets/globalStyles";

function lists(state = "loading", action) {
  switch (action.type) {
    case "FETCH_TO_DOS": {
      let lists = { ...action.lists };
      let listsOwned = Object.keys(lists).filter(
        list => lists[list].owner === action.userId
      );

      lists = listsOwned.reduce(
        (result, key) => ({ ...result, [key]: lists[key] }),
        {}
      );

      return lists;
    }

    case "EDIT_ITEM_NOTES": {
      const newState = { ...state };

      let currList =
        newState[
          Object.keys(newState).filter(
            list => newState[list].id === action.listId
          )
        ];

      let currTask = currList.items.find(x => x.id === action.taskId);
      currTask.notes = action.newNotes;
      currList.currTask;

      return newState;
    }

    default:
      return state;
  }
}

export default lists;
