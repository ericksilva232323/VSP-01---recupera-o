import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAv7afluYxgXrtoFsoT9CNrsS_4FojTIjk",
    authDomain: "question-71327.firebaseapp.com",
    projectId: "question-71327",
    storageBucket: "question-71327.firebasestorage.app",
    messagingSenderId: "675970391286",
    appId: "1:675970391286:web:893a490cea3a26cf4360d7",
    measurementId: "G-Q2B8HH58PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
export const storage = getStorage(app);

export { db, auth };