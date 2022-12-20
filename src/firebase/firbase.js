// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import{getFirestore} from "firebase/firestore"




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDbRQ9LbTGWhZ0ovCjJEg9u-KXPfS2G6xw",
  authDomain: "login-e3dbc.firebaseapp.com",
  projectId: "login-e3dbc",
  storageBucket: "login-e3dbc.appspot.com",
  messagingSenderId: "6618299643",
  appId: "1:6618299643:web:19a19b90239c66bb9e845e",
  measurementId: "G-8R2XG79EZQ"
};

// Initialize Firebase


//separting database API and authentication
const app=initializeApp(config);
const db=getFirestore(app);
const auth = getAuth(app);


export {db, auth};