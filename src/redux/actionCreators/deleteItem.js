import { databaseRef } from "../../config/firebase";

export const deleteItem = (itemToDelete, listId) => async dispatch => {
  let updates = {};
  updates[`lists/${listId}/items/${itemToDelete}`] = null;

  databaseRef.update(updates);
};
