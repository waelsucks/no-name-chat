// Import the functions you need from the SDKs you need

import { initializeApp }                from "firebase/app";
import { getAuth, signInAnonymously }   from "firebase/auth";
import { getFirestore }                 from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdXuTo96kmvrLYL8KH1-4aRwuHh7SggfY",
  authDomain: "no-name-11a35.firebaseapp.com",
  projectId: "no-name-11a35",
  storageBucket: "no-name-11a35.appspot.com",
  messagingSenderId: "97459141855",
  appId: "1:97459141855:web:c69119049eab0c9fb5fd6a"
};

// Initialize Firebase

const firebase  = initializeApp(firebaseConfig);

const auth      = getAuth(firebase);
const db        = getFirestore(firebase);

export { firebase, auth, signInAnonymously, db }