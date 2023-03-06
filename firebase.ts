// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Ab00iVW_ZIAa_cCD3wBaWFM00O1GmhM",
  authDomain: "chatgpt-clone-f39f3.firebaseapp.com",
  projectId: "chatgpt-clone-f39f3",
  storageBucket: "chatgpt-clone-f39f3.appspot.com",
  messagingSenderId: "202477324588",
  appId: "1:202477324588:web:deac54be4ddb4c11164489"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db };