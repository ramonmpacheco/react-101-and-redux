import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";

// from .env.local
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

initializeApp(firebaseConfig);

export default firebase