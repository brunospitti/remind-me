import { databaseRef } from "../../config/firebase";

export const checkItem = (itemToCheck, listId) => async dispatch => {
  let updates = {};

  databaseRef
    .child(`lists/${listId}/items/${itemToCheck}`)
    .once("value")
    .then(function(snapshot) {
      let checkedStatus = snapshot.val() && snapshot.val().checked;

      updates[`lists/${listId}/items/${itemToCheck}/checked`] = !checkedStatus;
      databaseRef.update(updates);
    });
};
