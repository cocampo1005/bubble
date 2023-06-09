import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeXeJAkEvREYoIeKqPrxsXVIS5WIFGUAI",
  authDomain: "bubble-3dplatform.firebaseapp.com",
  projectId: "bubble-3dplatform",
  storageBucket: "bubble-3dplatform.appspot.com",
  messagingSenderId: "343320561574",
  appId: "1:343320561574:web:e97ac088beab819d497167",
  measurementId: "G-WDPP8DS49X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const facebookProvider = new FacebookAuthProvider(app);
export const twitterProvider = new TwitterAuthProvider(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
