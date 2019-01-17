function user(state = false, action) {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload || null;
    default:
      return state;
  }
};

export default user;