// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAY7UzdaLv5sbX7-Glt6dYdzaXEjC1B0Ww",
  authDomain: "iiclwebsite.firebaseapp.com",
  databaseURL: "https://iiclwebsite-default-rtdb.firebaseio.com", // ✅ add your DB URL
  projectId: "iiclwebsite",
  storageBucket: "iiclwebsite.firebasestorage.app",
  messagingSenderId: "840503876587",
  appId: "1:840503876587:web:4b2938dd50a1a389cc57ae",
};

// ✅ Fix: only initialize if no apps exist
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getDatabase(app);
