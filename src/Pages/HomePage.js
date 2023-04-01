import React, { useState,useEffect } from "react";
import ComposeMail from "../Components/Compose/ComposeMail";
import Inbox from "../Components/Layout/Inbox";
import Middle from "../Components/Inbox/Middle";
import SideBar from "../Components/Layout/SideBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../store/MailSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state)=>state.auth.userId);
  const id = userId.replace(/[@,.]/g, "");
  useEffect(() => {
      axios
        .get(
          `https://mail-box-client-534b6-default-rtdb.firebaseio.com/mails/${id}/inbox.json`
        )
        .then((res) => {
          let datas = res.data;
          let mailArray = [];
          for (let id in datas) {
            let mail = datas[id];
            mail.id = id;
            mailArray = [mail,...mailArray];
          }
          dispatch(mailActions.addMail(mailArray));
        });
   
  }, [dispatch,id]);
  const [isShown, setIsShown] = useState(false);

  const showHandler = () => {
    setIsShown(true);
  };

  const hideHandler = () => {
    setIsShown(false);
  };
  return (
    <>
      <Inbox />
      <div
        className="main-body"
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        {isShown && <ComposeMail onClose={hideHandler} />}
        <SideBar onShow={showHandler} />
        <Middle />
      </div>
    </>
  );
};

export default HomePage;
