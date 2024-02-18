// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4208d.firebaseapp.com",
  projectId: "mern-blog-4208d",
  storageBucket: "mern-blog-4208d.appspot.com",
  messagingSenderId: "667511170712",
  appId: "1:667511170712:web:5b4111fe58697412a092ed"
};

// Initialize Firebase

 export const app = initializeApp(firebaseConfig);