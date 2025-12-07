
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABscxI3MFnX_kgLLiFK3grhuuXej4man4",
  authDomain: "mas-project-75f09.firebaseapp.com",
  projectId: "mas-project-75f09",
  storageBucket: "mas-project-75f09.firebasestorage.app",
  messagingSenderId: "713965076067",
  appId: "1:713965076067:web:564a3ae1dc86f6524d4256",
  measurementId: "G-STJJE3ESZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function firebase() {
               
document.getElementById("login-btn").onclick = () => {
  let email = document.getElementById("username-login").value;
  let password = document.getElementById("password-login").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
};

document.getElementById("sign-up-btn").onclick = () => {
  let email = document.getElementById("username-sign-up").value;
  let password = document.getElementById("password-sign-up").value;
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
};

}