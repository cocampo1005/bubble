import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// import { useAuthState } from 'react-firebase-hooks/auth';
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
  // const auth = auth(app);


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
