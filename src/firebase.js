// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmBhdVVanRL6g_FS2ZJQvvZs3T0VppmTQ",
  authDomain: "jobify-app-1abec.firebaseapp.com",
  projectId: "jobify-app-1abec",
  storageBucket: "jobify-app-1abec.appspot.com",
  messagingSenderId: "714511303840",
  appId: "1:714511303840:web:917bb7bc0d6d877219f5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};