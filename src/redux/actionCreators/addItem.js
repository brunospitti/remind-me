import { databaseRef } from "../../config/firebase";

import { randomId, currTime } from "../../assets/helpers";

export const addItem = (itemToAdd, listId) => async dispatch => {
  let taskId = randomId();
  let updates = {};
  let newItemObject = {
    id: taskId,
    task: itemToAdd,
    start_date: currTime(),
    checked: false,
    priority: 1
  };

  databaseRef.child(`lists/${listId}/items/`).push(newItemObject);
};
