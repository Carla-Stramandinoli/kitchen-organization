import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAcjNe5eDPHnH9ttatAK6GHN2NOAVFCE4s",
    authDomain: "kitchen-organization.firebaseapp.com",
    projectId: "kitchen-organization",
    storageBucket: "kitchen-organization.appspot.com",
    messagingSenderId: "254875274522",
    appId: "1:254875274522:web:73d74c8c716217ae48b0a3"
  };

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;