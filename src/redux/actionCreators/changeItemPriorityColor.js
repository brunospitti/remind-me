import { databaseRef } from "../../config/firebase";

export const changeItemPriorityColor = (
  listId,
  taskId,
  newPriority
) => async dispatch => {
  let updates = {};

  updates[`lists/${listId}/items/${taskId}/priority`] = newPriority;

  databaseRef.update(updates);
};
