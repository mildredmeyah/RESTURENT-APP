// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7amb1M-lH7IKNYWT8WRUXMrCilb_59Rc",
  authDomain: "restuarant-app-ebf11.firebaseapp.com",
  projectId: "restuarant-app-ebf11",
  storageBucket: "restuarant-app-ebf11.appspot.com",
  messagingSenderId: "148803352801",
  appId: "1:148803352801:web:ff2415a4be4a4f64de5fa0",
  measurementId: "G-47MDSSC0Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);