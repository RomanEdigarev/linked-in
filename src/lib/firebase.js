import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADXMLrnqDZElZQeEHIAmXmJkawIm36C08",
  authDomain: "linked-in-a6082.firebaseapp.com",
  projectId: "linked-in-a6082",
  storageBucket: "linked-in-a6082.appspot.com",
  messagingSenderId: "613575444936",
  appId: "1:613575444936:web:f7317d287e4532ceb298fd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
