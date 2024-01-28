import {FIREBASE_AUTH, FIREBASE_APP} from "../Firebase"
import { NavigationProp } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import React from "react";


export const currentUser = FIREBASE_AUTH.currentUser;

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export const SignIn = (phoneNumber:any, navigation: NavigationProp<any, any>) => {
  const recaptchaVerifier = React.useRef(null);



}