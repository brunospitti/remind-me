import { todosRef } from "../../config/firebase";

export const fetchToDos = () => async dispatch => {
  todosRef.on("lists", snapshot => {
    dispatch({
      type: "FETCH_TO_DOS",
      payload: snapshot.val()
    });
  });
};
