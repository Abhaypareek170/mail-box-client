import React from 'react'
import Sent from '../Components/Sent/Sent'
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../store/MailSlice";
import axios from "axios";
import { useEffect } from "react";

const SentPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state)=>state.auth.userId);
  const id = userId.replace(/[@,.]/g, "");
  
  useEffect(() => {
      axios
      .get(
        `https://mail-box-client-534b6-default-rtdb.firebaseio.com/mails/${id}/sent.json`
      )
      .then((res) => {
        let datas = res.data;
        let mailArray = [];
        for (let id in datas) {
          let mail = datas[id];
          mail.id = id;
          mailArray = [mail,...mailArray];
        }
        dispatch(mailActions.addSentMail(mailArray));
      });
      
  }, [dispatch, id]);
  return (
    <>
    <Sent/>
    </>
  )
}

export default SentPage