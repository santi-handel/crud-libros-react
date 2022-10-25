import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCPetBPRUbCGS4158wFHAmswr1R7memu-c",
    authDomain: "crud-libros-19b07.firebaseapp.com",
    projectId: "crud-libros-19b07",
    storageBucket: "crud-libros-19b07.appspot.com",
    messagingSenderId: "762989342379",
    appId: "1:762989342379:web:021fda1c1ef2c644eb91ee"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);