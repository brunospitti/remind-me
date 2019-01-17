import { databaseRef } from "../../config/firebase";

import { randomId, currTime } from "../../assets/helpers";
import { listColors } from "../../assets/globalStyles";

export const addList = (newList, newColor) => async dispatch => {
  let listId = randomId();
  let updates = {};
  let newListObject = {
    name: newList,
    id: listId,
    color: listColors[newColor],
    creation_date: currTime(),
    items: { ignoreMe: { ignoreMe: true } }
  };
  updates[`lists/${listId}`] = newListObject;

  databaseRef.update(updates);
};
