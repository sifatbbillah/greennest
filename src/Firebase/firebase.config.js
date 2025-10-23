
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu6gbsnmy9R-imFTSTB-c5E0frowFfBhQ",
  authDomain: "assingment-9-a32ec.firebaseapp.com",
  projectId: "assingment-9-a32ec",
  storageBucket: "assingment-9-a32ec.firebasestorage.app",
  messagingSenderId: "345344512212",
  appId: "1:345344512212:web:a14370878a17ac5c806b41"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)