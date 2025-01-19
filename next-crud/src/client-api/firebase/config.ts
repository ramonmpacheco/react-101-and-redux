import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// from .env.local
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

const isAppInitialized = () => getApps().length > 0

const app = isAppInitialized()
    ? getApp() : initializeApp(firebaseConfig);

const firestoraDb = getFirestore(app);

export default firestoraDb;