// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBORppTYoq6wbsoM8cED7T_cW5UHVX5XbE",
  authDomain: "emosha-b67a3.firebaseapp.com",
  projectId: "emosha-b67a3",
  storageBucket: "emosha-b67a3.firebasestorage.app",
  messagingSenderId: "136317351287",
  appId: "1:136317351287:web:789100a3fb1f8d84c21d72",
  measurementId: "G-XX6P1BY2EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
