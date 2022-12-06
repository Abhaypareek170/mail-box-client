import axios from 'axios';
import React from 'react'
import { BoxArrowInRight,  Dot } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { mailActions } from '../store/MailSlice';

const MailList = (props) => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("email").replace(/[@,.]/g, "");
  const navigate = useNavigate();
  const clickHandler = (e)=>{
    if(!props.isRead)dispatch(mailActions.markRead());
    navigate('/message',{state:{to:props.to,subject:props.subject,message:props.message}})
    axios.put(`https://mail-box-client-860d7-default-rtdb.firebaseio.com/mails/${userId}/${props.id}.json`,
        {isRead:true,message:props.message,subject:props.subject,to:props.to},
    )

  }
  return (
   <>
   <div className="emailRow" onClick={clickHandler}>
  <div className="emailRow__options">
    <input type="checkbox" name="" id="" />
    <span className="material-icons"> {!props.isRead&&<Dot color="royalblue" size={60} />} </span>

    <span className="material-icons"> <BoxArrowInRight/> </span>
  </div>

  <h3 className="emailRow__title">{props.subject}</h3>

  <div className="emailRow__message">
    <h4>
      <span className="emailRow__description">{props.message} </span>
    </h4>
  </div>

  <p className="emailRow__time">10pm</p>
</div>
</>
  )
}

export default MailList