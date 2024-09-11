import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="header-cont">
          <video
            className="background-video"
            src="/crimevideo.mp4"
            autoPlay
            loop
            muted
          ></video>
          <a href="/cred">Click here to login</a>
        </div>
      </header>
    </>
  );
};

export default Header;
