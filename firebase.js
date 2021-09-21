import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJUB0no_Tv7XQInOYpkLAg6z6feCJ1t2k",
  authDomain: "docs-2-6a6ee.firebaseapp.com",
  projectId: "docs-2-6a6ee",
  storageBucket: "docs-2-6a6ee.appspot.com",
  messagingSenderId: "150159219731",
  appId: "1:150159219731:web:7c01bfcccf7b397413f3e6",
};
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
export { db };
