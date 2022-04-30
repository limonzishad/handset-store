// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuX1jlj0rPLLGoFurepjPaeShAz3hHYXU",
    authDomain: "handset-store.firebaseapp.com",
    projectId: "handset-store",
    storageBucket: "handset-store.appspot.com",
    messagingSenderId: "425942236945",
    appId: "1:425942236945:web:c77c576cfd6fd05d0d96b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;