import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAeXeJAkEvREYoIeKqPrxsXVIS5WIFGUAI",
    authDomain: "bubble-3dplatform.firebaseapp.com",
    projectId: "bubble-3dplatform",
    storageBucket: "bubble-3dplatform.appspot.com",
    messagingSenderId: "343320561574",
    appId: "1:343320561574:web:e97ac088beab819d497167",
    measurementId: "G-WDPP8DS49X"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();
  export const facebookProvider = new FacebookAuthProvider();
  export const twitterProvider = new TwitterAuthProvider();
