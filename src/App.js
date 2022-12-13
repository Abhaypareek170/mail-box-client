import {  Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import HomePage from "./Pages/HomePage";
import MailDetails from "./Pages/MailDetails";
import Protected from "./Pages/Protected";
import SentPage from "./Pages/SentPage";

function App() {
 
  return (
    <>
        <Routes>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/" element={<Protected Component={HomePage}/>} ></Route>
          <Route path="/message" element={<Protected Component={MailDetails}/>} ></Route>
          <Route path="/sent" element={<Protected Component={SentPage}/> }></Route>
        </Routes>
    </>
  );
}

export default App;
