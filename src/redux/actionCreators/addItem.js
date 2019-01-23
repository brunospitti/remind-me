import { databaseRef } from "../../config/firebase";

import { randomId, currTime } from "../../assets/helpers";

export const addItem = (itemToAdd, listId) => async dispatch => {
  let updates = {};
  let taskId = randomId();

  databaseRef
    .child(`lists/${listId}/items/`)
    .once("value")
    .then(function(snapshot) {
      let ignoreMeValue = snapshot.val() && snapshot.val().ignoreMe;
      if (ignoreMeValue != undefined) {
        updates[`lists/${listId}/items/ignoreMe`] = null;
      }

      let newItemObject = {
        id: taskId,
        task: itemToAdd,
        start_date: currTime(),
        end_date: "",
        reminder_set: false,
        checked: false,
        priority: 1,
        list_id: listId
      };

      updates[`lists/${listId}/items/${taskId}`] = newItemObject;

      databaseRef.update(updates);
    });
};
