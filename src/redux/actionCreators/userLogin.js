import { authRef, provider } from "../../config/firebase";

export const userLogin = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {
			console.log('​result', result)
      
    })
    .catch(error => {
			console.log('​error', error)
      
    });
};
