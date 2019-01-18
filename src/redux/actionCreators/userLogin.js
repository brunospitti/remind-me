
import { authRef, provider } from "../../config/firebase";

export const userLogin = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => {});
};