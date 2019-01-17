import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("lists");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const singleTodoListRef = listId => databaseRef.child(`lists/${listId}`);
