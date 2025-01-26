// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB36__5rJdt42fA22kE122sI8mgyUMbOMg",
  authDomain: "meme-maker-fbc31.firebaseapp.com",
  projectId: "meme-maker-fbc31",
  storageBucket: "meme-maker-fbc31.firebasestorage.app",
  messagingSenderId: "242120036284",
  appId: "1:242120036284:web:49d10211c4c2d086e425b9",
  measurementId: "G-P843KNR272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);