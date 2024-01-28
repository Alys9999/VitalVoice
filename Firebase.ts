// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUs-F_13GjKWTfZQJYEmUsvw51HUKJM_g",
  authDomain: "vitalvoice-8acf9.firebaseapp.com",
  projectId: "vitalvoice-8acf9",
  storageBucket: "vitalvoice-8acf9.appspot.com",
  messagingSenderId: "929864970870",
  appId: "1:929864970870:web:11317c1e539a7f64096557",
  measurementId: "G-1GER51NE2N"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
