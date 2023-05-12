import {initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCYXGKe-PfJbmcJTM6waigcezZKdKcxaew",
  authDomain: "blog-4a11b.firebaseapp.com",
  projectId: "blog-4a11b",
  storageBucket: "blog-4a11b.appspot.com",
  messagingSenderId: "531280149129",
  appId: "1:531280149129:web:51b6fdd0d3573904b36458"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const db =getFirestore(app);