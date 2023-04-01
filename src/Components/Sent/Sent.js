import React, { useState } from 'react'
import ComposeMail from "../../Components/Compose/ComposeMail";
import Inbox from "../../Components/Layout/Inbox";
import SideBar from "../../Components/Layout/SideBar";
import SentMiddle from './SentMiddle';

const Sent = () => {
  const [isShown, setIsShown] = useState(false);

  const showHandler = () => {
    setIsShown(true);
  };

  const hideHandler = () => {
    setIsShown(false);
  };
  return (
    <>
     <Inbox />
      <div
        className="main-body"
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        {isShown && <ComposeMail onClose={hideHandler} />}
        <SideBar onShow={showHandler} />
        <SentMiddle/>
      </div>
    </>
  )
}

export default Sent