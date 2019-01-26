import { databaseRef } from "../../config/firebase";

export const deleteList = (listId, nextListId) => async dispatch => {
  dispatch({
    type: "DELETE_LIST",
    nextListId
  });

  let updates = {};
  updates[`lists/${listId}`] = null;
  databaseRef.update(updates);
};
