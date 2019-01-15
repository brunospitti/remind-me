import { todosRef } from "../../config/firebase";

import { randomId, currTime } from "../../assets/helpers";
import { listColors } from "../../assets/globalStyles";

export const addList = (newList, newColor) => async dispatch => {
  let newListObject = {
    name: newList,
    id: randomId(),
    color: listColors[newColor],
    items: [{ignoreMe: true}]
  }
  todosRef.push().set(newListObject)
};