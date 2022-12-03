import React from 'react'
import { BoxArrowInRight,  Star } from 'react-bootstrap-icons'

const MailList = (props) => {
  return (
    <div class="emailRow">
  <div class="emailRow__options">
    <input type="checkbox" name="" id="" />
    <span class="material-icons"> <Star/> </span>
    <span class="material-icons"> <BoxArrowInRight/> </span>
  </div>

  <h3 class="emailRow__title">{props.subject}</h3>

  <div class="emailRow__message">
    <h4>
      Message
      <span class="emailRow__description">{props.message} </span>
    </h4>
  </div>

  <p class="emailRow__time">10pm</p>
</div>
  )
}

export default MailList