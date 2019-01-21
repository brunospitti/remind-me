import { databaseRef } from "../../config/firebase";

export const editItemEndDate = (
  listId,
  taskId,
  newEndDate
) => async dispatch => {
  let updates = {};

  updates[`lists/${listId}/items/${taskId}/end_date`] = newEndDate;

  databaseRef.update(updates);
};
