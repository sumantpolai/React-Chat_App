// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-d8561.firebaseapp.com",
  projectId: "chat-app-d8561",
  storageBucket: "chat-app-d8561.appspot.com",
  messagingSenderId: "616359527730",
  appId: "1:616359527730:web:236a5012631830c88b832b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()    // by using this we are can able to login or be able to register user authintication
export const db = getFirestore()  // by using this we create user information by using this database 
export const storage = getStorage()  // it export bcz it useses like in the login page we uploade some img that store here