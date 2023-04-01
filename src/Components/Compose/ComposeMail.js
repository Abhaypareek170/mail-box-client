import React, { useRef } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./ComposeMail.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../store/MailSlice";
const ComposeMail = (props) => {
  const mails = useSelector(state=>state.mail.mails);
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const userMail=  localStorage.getItem("email");
  const userId =userMail.replace(/[@,.]/g, "");
  const editorState = EditorState.createEmpty();
  let message;
  const onEditorStateChange = (event) => {
    message = event.getCurrentContent().getPlainText();
  };
  const formSubmitHandler = async(event) => {
    event.preventDefault();
    const recieverId = emailInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const reciever = recieverId.replace(/[@,.]/g, "");
    const mail = {
      from:userMail,
      to: recieverId,
      subject: subject,
      message: message,
      isRead:false,
    };
    
    try{
      const postSent = await axios.post(`https://mail-box-client-534b6-default-rtdb.firebaseio.com/mails/${userId}/sent.json`,mail)
      const postInbox = await axios.post(`https://mail-box-client-534b6-default-rtdb.firebaseio.com/mails/${reciever}/inbox.json`,mail)
      console.log(postSent,postInbox)
    }
    catch(err){
      alert(err);
    }
    dispatch(mailActions.addSentMail([...mails,mail]))
  };

  return (
    <>
      <Container
        className="mt-3"
        style={{ position: "absolute", overflow: "hidden" }}
      >
        <Card className="shadow-lg">
          <Card.Header className="p-3">
            <h4 className="text-center">Compose Mail</h4>
            <Button onClick={props.onClose}>X</Button>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={formSubmitHandler}>
              <Form.Group>
                <Form.Label>To</Form.Label>
                <input
                  name="mail"
                  className="input-lg"
                  id="inputlg"
                  ref={emailInputRef}
                  style={{
                    border: "none",
                    borderBottom: "1px solid black",
                    outline: "none",
                    width: "91%",
                  }}
                />
              </Form.Group>
              <Form.Group className="mt-1">
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  style={{
                    border: "none",
                    borderBottom: "1px solid black",
                    outline: "none",
                    width: "92.5%",
                  }}
                  ref={subjectInputRef}
                />
              </Form.Group>
              <Form.Group className="mt-1">
                <Editor
                  EditorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                  wrapperClassName="wrapper"
                  editorClassName="editor"
                  toolbarClassName="toolBar"
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                className="primary "
                style={{ marginTop: "60px" }}
              >
                Send
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ComposeMail;
