import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

//sign in with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//sign in with google
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await auth.signInWithPopup(auth, provider);
  return result;
};

//singOut User from their acount

export const doSignOut = () => {
  return auth.signOut();
};
