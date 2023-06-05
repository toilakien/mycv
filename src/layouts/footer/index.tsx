import React from "react";
import logo from "../../assets/images/logo/logo.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYahoo } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-container footer">
      <div className="footer-head">
        <div>
          <p style={{ display: "flex" }}>
            <img src={logo} />
            <div>kienlv.1704</div>
          </p>

          <p>Web designer and front-end developer</p>
        </div>
        <div>
          <h3>Media</h3>
          <div className="icon">
            <AiFillFacebook />
            <AiFillLinkedin />
            <AiFillYahoo />
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#fff", paddingBottom: "20px" }}>
        © Copyright 2022. Made by Kienlv
      </p>
    </div>
  );
};

export default Footer;
