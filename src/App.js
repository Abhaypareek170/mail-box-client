import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { mailActions } from "./store/MailSlice";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import HomePage from "./Pages/HomePage";
import MailDetails from "./Pages/MailDetails"
import axios from "axios";
import { useEffect } from "react";
import SentPage from "./Pages/SentPage";


function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("email").replace(/[@,.]/g, "");
   useEffect(()=>{
    axios
    .get(
      `https://mail-box-client-860d7-default-rtdb.firebaseio.com/mails/${userId}/inbox.json`
    )
    .then((res) => {
      let datas = res.data;
      console.log(res.data)
      let mailArray = [];
      for (let id in datas) {
        let mail = datas[id];
        mail.id = id;
        mailArray.push(mail);
      }
      dispatch(mailActions.addMail(mailArray));
    })
   },[dispatch,userId]) 
   useEffect(()=>{
    axios
    .get(
      `https://mail-box-client-860d7-default-rtdb.firebaseio.com/mails/${userId}/sent.json`
    )
    .then((res) => {
      let datas = res.data;
      console.log(res.data)
      let mailArray = [];
      for (let id in datas) {
        let mail = datas[id];
        mail.id = id;
        mailArray.push(mail);
      }
      dispatch(mailActions.addSentMail(mailArray));
    })
   },[dispatch,userId]) 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/message" element={<MailDetails/>}/>
          <Route path="/sent" element={<SentPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
