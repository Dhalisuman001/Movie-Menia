import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC16Q7qDqtHiz1DT5GQEC5hC5zg4NaTsXc",
  authDomain: "sharp-nation-357903.firebaseapp.com",
  projectId: "sharp-nation-357903",
  storageBucket: "sharp-nation-357903.appspot.com",
  messagingSenderId: "802552041914",
  appId: "1:802552041914:web:9643e41c7b42549ab04d83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, onAuthStateChanged, signInWithPopup, provider };
