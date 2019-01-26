import { databaseRef } from "../../config/firebase";

import { randomId, currTime } from "../../assets/helpers";
import { listColors } from "../../assets/globalStyles";

export const addList = (newList, newColor, userId) => async dispatch => {
  let listId = randomId();
  let updates = {};
  let newListObject = {
    name: newList,
    id: listId,
    color: listColors[newColor],
    creation_date: currTime(),
    owner: userId || "",
    items: { ignoreMe: { ignoreMe: true } }
  };
  updates[`lists/${listId}`] = newListObject;

  databaseRef.update(updates);

  dispatch({
    type: "ADD_LIST",
    newId: listId
  });
};
