// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "agencia-marketing-c14d2.firebaseapp.com",
  projectId: "agencia-marketing-c14d2",
  storageBucket: "agencia-marketing-c14d2.appspot.com",
  messagingSenderId: "1042889679118",
  appId: "1:1042889679118:web:aa3eb389d1352b7597775f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const firestore = getFirestore(app);
