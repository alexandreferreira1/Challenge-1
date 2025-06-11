// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhCWdt-2vHJQQrmlKpTyRplsWX_8yGoyY",
  authDomain: "challenge-1-1f3fd.firebaseapp.com",
  projectId: "challenge-1-1f3fd",
  storageBucket: "challenge-1-1f3fd.firebasestorage.app",
  messagingSenderId: "572190703244",
  appId: "1:572190703244:web:d649dcbceec29d58ca45a9",
  measurementId: "G-G40ZBYFEJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializando o Firestore
const db = getFirestore(app);

export { app, db, collection, getDocs };
