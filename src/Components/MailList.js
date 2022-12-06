import axios from 'axios';
import React from 'react'
import { BoxArrowInRight,  Dot, Trash2Fill } from 'react-bootstrap-icons'
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
  const deleteMailHandler = (e)=>{
    e.preventDefault();
    axios.delete(`https://mail-box-client-860d7-default-rtdb.firebaseio.com/mails/${userId}/${props.id}.json`)
  }
  return (
   <>
   <div className="emailRow">
  <div className="emailRow__options"  onClick={clickHandler}>
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
  <Trash2Fill onClick={deleteMailHandler}/>
</div>
</>
  )
}

export default MailList