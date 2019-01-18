function user(state = "loading", action) {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload || null;
    default:
      return state;
  }
};

export default user;