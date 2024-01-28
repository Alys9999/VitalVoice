import {FIREBASE_AUTH, FIREBASE_APP} from "../Firebase"
import { NavigationProp } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { Auth, PhoneAuthCredential, signInWithCredential } from "firebase/auth";
import React from "react";


export var currentUser = FIREBASE_AUTH.currentUser;

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export const SignIn = async (auth:Auth, credential:PhoneAuthCredential) => {
    await signInWithCredential(auth, credential).then((res)=>{
      FIREBASE_AUTH.updateCurrentUser(res.user);
    });
}

export const SignOut = ()=>{
  FIREBASE_AUTH.signOut();
}