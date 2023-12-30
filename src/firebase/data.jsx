// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD74myiIBLJ49sPJgIUyiN1T8eM0JCgd8s",
  authDomain: "items-4799c.firebaseapp.com",
  projectId: "items-4799c",
  storageBucket: "items-4799c.appspot.com",
  messagingSenderId: "141069788764",
  appId: "1:141069788764:web:ac7379a02385dca0eb6899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);