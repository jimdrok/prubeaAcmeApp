import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVZcycgLLazb7pM1tXsKeu-zAY_6klcXk",
  authDomain: "acme-23d18.firebaseapp.com",
  projectId: "acme-23d18",
  storageBucket: "acme-23d18.appspot.com",
  messagingSenderId: "956264774573",
  appId: "1:956264774573:web:c6bb1855d151fd08303f24",
  measurementId: "G-34P375LZH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 getAnalytics(app);
const database = getFirestore(app);

export default database 
