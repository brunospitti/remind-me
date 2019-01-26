// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

function activeList(state = 0, action) {
  switch (action.type) {
    case "DELETE_LIST": {
      return action.nextListId;
    }

    case "ADD_LIST": {
      return action.newId;
    }

    case "FETCH_TO_DOS": {
      let lists = { ...action.lists };

      let listsOwned = Object.keys(lists).filter(
        list => lists[list].owner === action.userId
      );

      lists = listsOwned.reduce(
        (result, key) => ({ ...result, [key]: lists[key] }),
        {}
      );

      if (lists != "loading" && Object.keys(lists).length > 0) {
        if (action.activeList != 0) {
          return action.activeList;
        } else {
          let listsArray = [];
          Object.keys(lists).map(list => listsArray.push(lists[list]));

          listsArray.sort(function(a, b) {
            return new Date(a.creation_date) - new Date(b.creation_date);
          });

          return listsArray[0].id;
        }
      }

      return state;
    }

    case "CHANGE_ACTIVE_LIST": {
      return action.listId;
    }

    default:
      return state;
  }
}

export default activeList;
