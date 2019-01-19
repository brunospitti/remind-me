import { databaseRef } from "../../config/firebase";

export const editItemName = (listId, taskId, newName) => async dispatch => {
  let updates = {};

  updates[`lists/${listId}/items/${taskId}/task`] = newName;

  databaseRef.update(updates);
};
