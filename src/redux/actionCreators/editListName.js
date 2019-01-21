import { databaseRef } from "../../config/firebase";

export const editListName = (listId, newName) => async dispatch => {
  let updates = {};

  updates[`lists/${listId}/name`] = newName;
  databaseRef.update(updates);
};
