import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrBDtf7-z6VxSM6wcrFUVCQ4bcH8JPgXc",
  authDomain: "team-management-system-308cc.firebaseapp.com",
  projectId: "team-management-system-308cc",
  storageBucket: "team-management-system-308cc.appspot.com",
  messagingSenderId: "307994547981",
  appId: "1:307994547981:web:54c5288c010132b18c8244",
  measurementId: "G-BF6605LRG6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
