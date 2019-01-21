import { databaseRef } from "../../config/firebase";

export const editItemNotes = (listId, taskId, newNotes) => async dispatch => {
  let updates = {};

  updates[`lists/${listId}/items/${taskId}/notes`] = newNotes;

  databaseRef.update(updates);
};
