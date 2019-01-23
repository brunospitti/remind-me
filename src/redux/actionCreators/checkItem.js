import { databaseRef } from "../../config/firebase";

export const checkItem = (itemToCheck, listId) => async dispatch => {
  let updates = {};

  databaseRef
    .child(`lists/${listId}/items/${itemToCheck}`)
    .once("value")
    .then(function(snapshot) {
      let checkedStatus = snapshot.val() && snapshot.val().checked;

      updates[`lists/${listId}/items/${itemToCheck}/checked`] = !checkedStatus;
      updates[`lists/${listId}/items/${itemToCheck}/reminder_set`] = false;
      databaseRef.update(updates);
    });
};
