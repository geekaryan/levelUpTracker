// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOVb1zDNQDGdmEJA9vqkn_V1z6g6aIKH4",
  authDomain: "leveluptracker-5b877.firebaseapp.com",
  projectId: "leveluptracker-5b877",
  storageBucket: "leveluptracker-5b877.firebasestorage.app",
  messagingSenderId: "69627376312",
  appId: "1:69627376312:web:bc6cd29b66c1b4e6b47a4d",
  measurementId: "G-1PSZ4J01DP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
