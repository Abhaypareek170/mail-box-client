import React from "react";
import './MessageDetail.css'
import { Col, Container, Row } from "react-bootstrap";
import {
  Archive,
  ArrowUpSquare,
  ChevronDown,
  Trash,
  XOctagonFill,
} from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

const Message = () => {
  const location = useLocation();
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <input
              className="mr-3"
              type="checkbox"
              name=""
              id=""
              style={{ height: "15px", width: "15px" }}
            />
          </Col>
          <Col xs={5}>
            <Row>
              <Col>
                <Archive />
                Archive{" "}
              </Col>
              <Col>
                <Trash />
                Delete
              </Col>
              <Col>
                <ArrowUpSquare />
                Move{" "}
              </Col>
              <Col>
                <XOctagonFill />
                Spam
              </Col>
            </Row>
          </Col>
          <Col>
            Sort <ChevronDown />
          </Col>
        </Row>
        <hr/>
        <div
          className="mt-4"
          style={{
            border: "0.5px solid black",
            height: "400px", 
          }}
        >
         <div className="messageDetail">
      <div className="messageDetail__subject">
        <p>{location.state.subject}</p>
      </div>
      <div className="messageDetail__sender">
        <p>{location.state.to}</p>
        <p>{"10PM"}</p>
      </div>
      <div className="messageDetail__message">
        <p>{location.state.message}</p>
      </div>
    </div>
        </div>
      </Container>
    </>
  );
};

export default Message;
