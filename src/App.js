import React, { useContext } from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
