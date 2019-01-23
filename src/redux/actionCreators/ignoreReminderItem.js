import { databaseRef } from "../../config/firebase";

export const ignoreReminderItem = (taskId, listId) => async dispatch => {
  let updates = {};

  updates[`lists/${listId}/items/${taskId}/reminder_set`] = false;

  databaseRef.update(updates);
};
