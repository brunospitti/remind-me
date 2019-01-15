import { databaseRef } from "../../config/firebase";

import { randomId } from "../../assets/helpers";
import { listColors } from "../../assets/globalStyles";

export const addList = (newList, newColor) => async dispatch => {
  let listId = randomId();
  let updates = {};
  let newListObject = {
    name: newList,
    id: listId,
    color: listColors[newColor],
    items: { ignoreMe: { ignoreMe: true } }
  };
  updates[`lists/${listId}`] = newListObject;

  databaseRef.update(updates);
};
