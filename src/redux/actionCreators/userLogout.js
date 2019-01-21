import { authRef } from "../../config/firebase";

export const userLogout = () => dispatch => {
  authRef
    .signOut()
    .then(() => {})
    .catch(error => {});
};
