// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZh4Um9WxGnUyk84UYErj0hKsaQ4nSQc",
  authDomain: "react-cursos-d5174.firebaseapp.com",
  projectId: "react-cursos-d5174",
  storageBucket: "react-cursos-d5174.appspot.com",
  messagingSenderId: "943953194936",
  appId: "1:943953194936:web:03f11b8369d9ee9dc0e94d"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);