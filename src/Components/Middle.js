import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Archive, ArrowUpSquare, BoxArrowInRight, ChevronDown, Star, Trash, XOctagonFill } from 'react-bootstrap-icons'
import './Middle.css'
const Middle = () => {
  return (
   <>
   <Container className='mt-4'>
   <Row >
        <Col><input className='mr-3' type="checkbox" name="" id="" style={{height:"15px",width:"15px"}} /></Col>
        <Col xs={5}><Row><Col><Archive/>Archive </Col><Col><Trash/>Delete</Col><Col><ArrowUpSquare/>Move </Col><Col><XOctagonFill/>Spam</Col></Row></Col>
        <Col>Sort <ChevronDown/></Col>
      </Row>
    <div class="emailList__list mt-5">
<div class="emailRow">
  <div class="emailRow__options">
    <input type="checkbox" name="" id="" />
    <span class="material-icons"> <Star/> </span>
    <span class="material-icons"> <BoxArrowInRight/> </span>
  </div>

  <h3 class="emailRow__title">YouTube</h3>

  <div class="emailRow__message">
    <h4>
      You Got a New Subscriber
      <span class="emailRow__description"> - on Your Channel Future Coders </span>
    </h4>
  </div>

  <p class="emailRow__time">10pm</p>
</div>

<div class="emailRow">
  <div class="emailRow__options">
    <input type="checkbox" name="" id="" />
    <span class="material-icons"> <Star/> </span>
    <span class="material-icons"> <BoxArrowInRight/> </span>
  </div>

  <h3 class="emailRow__title">YouTube</h3>

  <div class="emailRow__message">
    <h4>
      You Got a New Subscriber
      <span class="emailRow__description"> - on Your Channel Future Coders </span>
    </h4>
  </div>

  <p class="emailRow__time">10pm</p>
</div>

<div class="emailRow">
  <div class="emailRow__options">
    <input type="checkbox" name="" id="" />
    <span class="material-icons"> <Star/> </span>
    <span class="material-icons"> <BoxArrowInRight/> </span>
  </div>

  <h3 class="emailRow__title">YouTube</h3>

  <div class="emailRow__message">
    <h4>
      You Got a New Subscriber<span class="emailRow__description">
        - on Your Channel Future Coders
      </span>
    </h4>
  </div>

  <p class="emailRow__time">10pm</p>
</div>

<div class="emailRow">
  <div class="emailRow__options">
    <input type="checkbox" name="" id="" />
    <span class="material-icons"> <Star/> </span>
    <span class="material-icons"> <BoxArrowInRight/> </span>
  </div>

  <h3 class="emailRow__title">Google</h3>

  <div class="emailRow__message">
    <h4>
      Login on New Device<span class="emailRow__description">
        - is this your Device ?
      </span>
    </h4>
  </div>

  <p class="emailRow__time">2am</p>
</div>
</div>
</Container>
   </>
  )
}

export default Middle