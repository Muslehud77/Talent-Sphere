// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4WWxBXWNA50BE0ki618FboTwjBRxAzV4",
  authDomain: "talent-sphere.firebaseapp.com",
  projectId: "talent-sphere",
  storageBucket: "talent-sphere.appspot.com",
  messagingSenderId: "1047878306459",
  appId: "1:1047878306459:web:8c6a5622dc7cc8b171943e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;