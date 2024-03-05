// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh1H2NYNwwrb5G2k0k-xxkbqwgNUUj03g",
  authDomain: "main-dresser-glam-auth.firebaseapp.com",
  projectId: "main-dresser-glam-auth",
  storageBucket: "main-dresser-glam-auth.appspot.com",
  messagingSenderId: "125719080093",
  appId: "1:125719080093:web:406177c64cfc853c52b874",
  measurementId: "G-Q90XH7F3JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
