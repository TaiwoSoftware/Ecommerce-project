// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3-nVMtaaHn8DfjIWM-6smVjc50nXg2yg",
  authDomain: "ecommerce-39520.firebaseapp.com",
  projectId: "ecommerce-39520",
  storageBucket: "ecommerce-39520.appspot.com",
  messagingSenderId: "381088983261",
  appId: "1:381088983261:web:f973ac0a47f5e302269334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);