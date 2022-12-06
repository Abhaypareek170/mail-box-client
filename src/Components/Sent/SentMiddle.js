import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Archive, ArrowUpSquare, ChevronDown, Trash, XOctagonFill } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import MailList from '../Inbox/MailList'


const SentMiddle = () => {
  const mails = useSelector(state=>state.mail.sentMails);
  console.log(mails);
  const mailList = mails.map((mail) => (
    <MailList
      subject={mail.subject}
      to={mail.to}
      id={mail.id}
      key={Math.random()}
      message={mail.message}
    />
  ));

  return (
   <>
   <Container className='mt-4'>
   <Row >
        <Col><input className='mr-3' type="checkbox" name="" id="" style={{height:"15px",width:"15px"}} /></Col>
        <Col xs={5}><Row><Col><Archive/>Archive </Col><Col><Trash/>Delete</Col><Col><ArrowUpSquare/>Move </Col><Col><XOctagonFill/>Spam</Col></Row></Col>
        <Col>Sort <ChevronDown/></Col>
      </Row>
    <div class="emailList__list mt-5">
    {mailList}



</div>
</Container>
   </>
  )
}

export default SentMiddle