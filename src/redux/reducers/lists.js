// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

import { listColors } from "../../assets/globalStyles";

function lists(state = "loading", action) {
  switch (action.type) {
    case "FETCH_TO_DOS": {
      let lists = {...action.lists}
      let listsOwned = Object.keys(lists).filter(
        list => lists[list].owner === action.userId
      )

      lists = listsOwned.reduce((result, key) => ({ ...result, [key]: lists[key] }), {});

      return lists;
    }

    case "CHANGE_LIST_COLOR": {
      const newState = { ...state };

      newState[
        Object.keys(newState).filter(
          list => newState[list].id === action.listId
        )
      ].color = listColors[action.newColor];

      return newState;
    }

    case "DELETE_ITEM_FROM_LIST": {
      const newState = { ...state };

      let currListItems =
        newState[
          Object.keys(newState).filter(
            list => newState[list].id === action.listId
          )
        ].items;
      let currItem = currListItems.filter(
        item => item.id === action.itemToDelete
      )[0];
      let itemIndex = currListItems.indexOf(currItem);

      if (itemIndex > -1) {
        currListItems.splice(itemIndex, 1);
      }

      return newState;
    }

    case "CHECK_ITEM": {
      const newState = { ...state };

      let currList =
        newState[
          Object.keys(newState).filter(
            list => newState[list].id === action.listId
          )
        ];

      let currTask = currList.items.find(x => x.id === action.itemToCheck);
      currTask.checked = !currTask.checked;
      currList.currTask;

      return newState;
    }

    case "CHANGE_ITEM_PRIORITY_COLOR": {
      const newState = { ...state };

      let currList =
        newState[
          Object.keys(newState).filter(
            list => newState[list].id === action.listId
          )
        ];

      let currTask = currList.items.find(x => x.id === action.taskId);
      currTask.priority = action.newPriority;
      currList.currTask;

      return newState;
    }

    case "EDIT_ITEM_NAME": {
      const newState = { ...state };

      let currList =
        newState[
          Object.keys(newState).filter(
            list => newState[list].id === action.listId
          )
        ];

      let currTask = currList.items.find(x => x.id === action.taskId);
      currTask.task = action.newName;
      currList.currTask;

      return newState;
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

    case "EDIT_LIST_NAME": {
      const newState = { ...state };

      let currList =
        newState[
          Object.keys(newState).filter(
            list => newState[list].id === action.listId
          )
        ];

      currList.name = action.newName;

      return newState;
    }

    case "DELETE_LIST": {
      const newState = { ...state };

      let currListIndex = Object.keys(newState).findIndex(
        list => newState[list].id === action.listId
      );

      if (currListIndex > -1) {
        delete newState[
          Object.keys(newState).filter((list, i) => i === currListIndex)
        ];
      }

      return newState;
    }

    default:
      return state;
  }
}

export default lists;
