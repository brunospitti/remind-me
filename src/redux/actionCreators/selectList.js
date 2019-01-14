export const selectList = listId => async dispatch => {
  dispatch({
    type: "CHANGE_ACTIVE_LIST",
    listId
  });
};
