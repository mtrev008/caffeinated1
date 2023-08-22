//firebase functionality for auth

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn6rR8ZibVy5X_RbNZRL-j_Pa1J13zOgg",
  authDomain: "caffeinated-cee3c.firebaseapp.com",
  projectId: "caffeinated-cee3c",
  storageBucket: "caffeinated-cee3c.appspot.com",
  messagingSenderId: "490309562627",
  appId: "1:490309562627:web:a0d0d8a8d50b3329d37936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }