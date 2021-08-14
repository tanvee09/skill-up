import firebase from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLlI_4xr1EqaDN_pCFYISbXpwWKHJjzys",
    authDomain: "skillup-ae96d.firebaseapp.com",
    projectId: "skillup-ae96d",
    storageBucket: "skillup-ae96d.appspot.com",
    messagingSenderId: "603320665849",
    appId: "1:603320665849:web:2f1a9ae5bf1053a8b2c428",
    measurementId: "G-R4GDPL8DGV"
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;