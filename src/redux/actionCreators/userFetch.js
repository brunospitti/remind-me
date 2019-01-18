
import { authRef, databaseRef } from "../../config/firebase";

export const userFetch = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    
    if (user) {
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
      dispatch({
        type: "FETCH_USER",
        payload: null
      });
    }
  });
};