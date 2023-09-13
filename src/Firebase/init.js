// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import config from "./config.json";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyA6OYt3_kyFW7xM0pc9seE6UsZ2rZyBvGc",
// 	authDomain: "handbook-5a849.firebaseapp.com",
// 	projectId: "handbook-5a849",
// 	storageBucket: "handbook-5a849.appspot.com",
// 	messagingSenderId: "91566729853",
// 	appId: "1:91566729853:web:e7375001c3f7c306311f14",
// 	measurementId: "G-5CE9XBKRHQ"
// };

// Initialize Firebase
export const app = initializeApp(config);
