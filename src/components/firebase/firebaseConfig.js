// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAsjjK61xeLRHrAaECNgpYyCBU0LIQgPo",
  authDomain: "learn-with-us-1107.firebaseapp.com",
  projectId: "learn-with-us-1107",
  storageBucket: "learn-with-us-1107.firebasestorage.app",
  messagingSenderId: "662302910618",
  appId: "1:662302910618:web:c9f5f4c5dfe4d0201ed723",
  measurementId: "G-4RYKZX5VZE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
