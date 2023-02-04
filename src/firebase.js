import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyC3AJQ6-GkV-PFO2gbme2ehm2eZ1KX6cW8",
  authDomain: "coffe-rest.firebaseapp.com",
  projectId: "coffe-rest",
  storageBucket: "coffe-rest.appspot.com",
  messagingSenderId: "610975005591",
  appId: "1:610975005591:web:df8dc7c8bed17e2460a2d2"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// otros usos
export { db }

