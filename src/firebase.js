import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC1f4D3-4A9dlSRrOG2Hzj5YqCLl8UNDaw",
  authDomain: "fb-messenger-clone-e2f39.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-e2f39.firebaseio.com",
  projectId: "fb-messenger-clone-e2f39",
  storageBucket: "fb-messenger-clone-e2f39.appspot.com",
  messagingSenderId: "90459923872",
  appId: "1:90459923872:web:da18477467a70b84e2f0c5",
  measurementId: "G-1G16RSWSRN",
});

const db = firebaseApp.firestore();

export default db;
