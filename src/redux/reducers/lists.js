// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

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

    default:
      return state;
  }
}

export default lists;
