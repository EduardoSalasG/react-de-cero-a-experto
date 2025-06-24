// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqdLp8Z1mD0mvezku85Hrpc9y3O_mGQcg",
    authDomain: "react-cursos-abf33.firebaseapp.com",
    projectId: "react-cursos-abf33",
    storageBucket: "react-cursos-abf33.firebasestorage.app",
    messagingSenderId: "542038661193",
    appId: "1:542038661193:web:9c24d3e32c189da1ce0798"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);