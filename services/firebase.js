import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyButIshBJXqHQhwgK0sUOXdG2xb9PINWIw",
  authDomain: "marvel-magik.firebaseapp.com",
  projectId: "marvel-magik",
  storageBucket: "marvel-magik.firebasestorage.app",
  messagingSenderId: "979138392456",
  appId: "1:979138392456:web:02fddb00956bc8f91e4a3d",
  measurementId: "G-LN2TD819CF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };