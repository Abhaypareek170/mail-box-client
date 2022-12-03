import React, { useRef } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { EditorState } from "draft-js";
import { useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./ComposeMail.css";
import axios from "axios";
const ComposeMail = (props) => {
  const emailInputRef = useRef();
  const subjectInputRef = useRef();

  const userId = useSelector((state) => state.auth.userId);
  const editorState = EditorState.createEmpty();
  let message;
  const onEditorStateChange = (event) => {
    message = event.getCurrentContent().getPlainText();
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const recieverId = emailInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const reciever = recieverId.replace(/[@,.]/g, "");

    const mail = {
      to: recieverId,
      subject: subject,
      message: message,
    };
    axios
      .post(
        `https://mail-box-client-860d7-default-rtdb.firebaseio.com/mails/${userId}${reciever}.json`,
        mail
      )

      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => alert(err));
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
