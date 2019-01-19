import { databaseRef } from "../../config/firebase";

export const deleteList = (listId, nextListId) => async dispatch => {
  let updates = {};
  updates[`lists/${listId}`] = null;
  databaseRef.update(updates);

  return {
    type: "DELETE_LIST",
    nextListId
  };
};
