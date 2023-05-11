import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);