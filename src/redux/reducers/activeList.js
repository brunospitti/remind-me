// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

function activeList(state = 1, action) {
  switch (action.type) {
    case "CHANGE_ACTIVE_LIST":
      return action.listId;

    default:
      return state;
  }
}

export default activeList;
