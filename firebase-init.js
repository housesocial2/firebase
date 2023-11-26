// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4dQSuMk6A0NsGm6eLaCxBha4BoF66nPQ",
  authDomain: "house-social.firebaseapp.com",
  projectId: "house-social",
  storageBucket: "house-social.appspot.com",
  messagingSenderId: "230237629475",
  appId: "1:230237629475:web:de3e7fd7c277a92b069596",
  measurementId: "G-9327E4QR0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
