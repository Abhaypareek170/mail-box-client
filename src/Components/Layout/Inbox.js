import React from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import { authActions } from '../../store/authSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { mailActions } from '../../store/MailSlice';

const Inbox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = (e)=>{
    e.preventDefault();
    dispatch(authActions.logout())
    dispatch(mailActions.setMail());
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate('/')
  }
  return (
    <>
    <Navbar variant="light" bg="light">
        <Container fluid>
        <Navbar.Brand>Welcome to Mail Client Box.</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button variant='secondary' onClick={logoutHandler}>Logout</Button>
          </Form>
        </Container>
      </Navbar>


    </>
  )
}

export default Inbox