import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "./store/MailSlice";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import HomePage from "./Pages/HomePage";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const reciever = useSelector((state) => state.auth.recieverId);
    axios
    .get(
      `https://mail-box-client-860d7-default-rtdb.firebaseio.com/mails/${reciever}${userId}.json`
    )
    .then((res) => {
      let datas = res.data;

      let mailArray = [];
      for (let id in datas) {
        let mail = datas[id];
        mail.id = id;
        mailArray.push(mail);
      }
      dispatch(mailActions.addMail(mailArray));
    });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
