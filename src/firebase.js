import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnef7Q6dVuGtnakuPCu1q76lol4_4AoJE",
  authDomain: "insta-c-74c83.firebaseapp.com",
  projectId: "insta-c-74c83",
  storageBucket: "insta-c-74c83.appspot.com",
  messagingSenderId: "431629102474",
  appId: "1:431629102474:web:c64abea6dd873e5c5eec73",
  measurementId: "G-J74D0TZJT7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
