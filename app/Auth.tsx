import {FIREBASE_AUTH} from "../Firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export const currentUser = FIREBASE_AUTH.currentUser;

export const SignIn = async (email:any, password:any) => {
  signInWithEmailAndPassword(FIREBASE_AUTH, email, password).catch((e)=>{
    console.log(e);
    throw e;
  }).then(()=>{});
}