// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwFSrlgBdexB9n4D8FjgGTMsT3-i_nx1Y",
  authDomain: "netflixgpt-51167.firebaseapp.com",
  projectId: "netflixgpt-51167",
  storageBucket: "netflixgpt-51167.appspot.com",
  messagingSenderId: "271547460743",
  appId: "1:271547460743:web:0c9b9f97f7850da52ddc22",
  measurementId: "G-EZE44RY9K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();