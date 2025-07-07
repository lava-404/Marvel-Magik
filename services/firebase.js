import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Rdkohq_3jlVlIzLJqFzz9Edb2V4SkXA",
  authDomain: "marvel-magik-fb269.firebaseapp.com",
  projectId: "marvel-magik-fb269",
  storageBucket: "marvel-magik-fb269.firebasestorage.app",
  messagingSenderId: "481438669093",
  appId: "1:481438669093:web:5a8776c0078fe3475222cc",
  measurementId: "G-Q5KWHF3VTT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };