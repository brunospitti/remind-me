import { databaseRef } from "../../config/firebase";

import { randomId, currTime } from "../../assets/helpers";

export const addItem = (itemToAdd, listId) => async dispatch => {
  let updates = {};
  let taskId = randomId();

  let newItemObject = {
    id: taskId,
    task: itemToAdd,
    start_date: currTime(),
    end_date: "",
    checked: false,
    priority: 1,
    list_id: listId
  };

  updates[`lists/${listId}/items/${taskId}`] = newItemObject;

  databaseRef.update(updates);
};
