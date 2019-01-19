import { databaseRef } from "../../config/firebase";

import { listColors } from "../../assets/globalStyles";

export const changeListColor = (listId, newColor) => async dispatch => {
  let updates = {};
  let color = listColors[newColor];

  updates[`lists/${listId}/color`] = color;

  databaseRef.update(updates);
};
