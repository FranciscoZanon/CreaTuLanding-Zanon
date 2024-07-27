// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { productos } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7YlNH_WtGzIBqJ2zSYi7i8nswz0Ij-oE",
  authDomain: "bocashop-19f1f.firebaseapp.com",
  projectId: "bocashop-19f1f",
  storageBucket: "bocashop-19f1f.appspot.com",
  messagingSenderId: "46042538079",
  appId: "1:46042538079:web:e8d16860066ea847127bea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//     addDoc(collection(db, "productos"), prod)
//         .then((data) => {
//             console.log(`El producto ${data.id} se agregó correctamente a la base de datos`);
//         })
//         .catch((error) => {
//             console.error("Error: ", error);
//         });
//     });