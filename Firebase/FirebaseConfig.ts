// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0PNVqXEgE2Y2e4b1UjLxuFjBb3UU54UM",
  authDomain: "humiddata.firebaseapp.com",
  projectId: "humiddata",
  storageBucket: "humiddata.firebasestorage.app",
  messagingSenderId: "1026434122193",
  appId: "1:1026434122193:web:78964753d7d70107b220f0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
export const messaging= getMessaging(firebaseApp)