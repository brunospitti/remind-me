import { todosRef } from "../../config/firebase";

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    console.log("​snapshot.val()", snapshot.val());
    dispatch({
      type: "FETCH_TO_DOS",
      payload: snapshot.val()
    });
  });
};
