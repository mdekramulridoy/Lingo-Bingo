// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGDwh2qIQqjyXUKXK72kxv8cHpo8rKT9o",
  authDomain: "learning-different-language.firebaseapp.com",
  projectId: "learning-different-language",
  storageBucket: "learning-different-language.firebasestorage.app",
  messagingSenderId: "1031586720194",
  appId: "1:1031586720194:web:5cde7e76344ead91514e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);