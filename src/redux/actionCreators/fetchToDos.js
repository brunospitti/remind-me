import { todosRef } from "../../config/firebase";

export const fetchToDos = (userId) => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: "FETCH_TO_DOS",
      lists: snapshot.val(),
      userId: userId
    });
  });
};
