import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJQVgJRwK7vYrvLWF_b2xQxac5gtqczCk",
  authDomain: "kacc-college-app.firebaseapp.com",
  projectId: "kacc-college-app",
  storageBucket: "kacc-college-app.firebasestorage.app",
  messagingSenderId: "862819683514",
  appId: "1:862819683514:web:7761a0ffd219ce4fec8683"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
