// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAkiGgauMqFnr6FZC5ZvUFGXKeUQLvf-5w",
    authDomain: "ecommerce-webapplication-d2a66.firebaseapp.com",
    projectId: "ecommerce-webapplication-d2a66",
    storageBucket: "ecommerce-webapplication-d2a66.appspot.com",
    messagingSenderId: "746276179532",
    appId: "1:746276179532:web:15a4fb503c6267ec3eaee9",
    measurementId: "G-KC0H9BGRV8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};