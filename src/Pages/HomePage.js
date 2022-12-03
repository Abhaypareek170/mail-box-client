import React, { useState } from "react";
import ComposeMail from "../Components/ComposeMail";
import Inbox from "../Components/Inbox";
import Middle from "../Components/Middle";
import SideBar from "../Components/SideBar";

const HomePage = () => {
  const [isShown, setIsShown] = useState(false);

  const showHandler = () => {
    console.log("Show called");
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
        <Middle />
      </div>
    </>
  );
};

export default HomePage;
