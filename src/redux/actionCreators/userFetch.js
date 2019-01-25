import { authRef, databaseRef } from "../../config/firebase";

export const userFetch = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
			console.log('userFetch -> ​if user -> ', user)
      let updates = {};
      let newUserObject = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      };
      updates[`users/${user.uid}`] = newUserObject;
      databaseRef.update(updates);

      dispatch({
        type: "FETCH_USER",
        payload: user
      });
    } else {
      console.log('userFetch -> ​else user -> ', user)
      dispatch({
        type: "FETCH_USER",
        payload: null
      });
    }
  });
};
