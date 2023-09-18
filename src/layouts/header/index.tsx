import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [y, setY] = useState(0);
  const [status, setStatus] = useState<boolean>(false);
  window.addEventListener("scroll", function () {
    setY(this.scrollY);
  });
  return (
    <div>
      {" "}
      <IoMenuOutline onClick={() => setStatus(!status)} className="menu-icon" />
      <div className={`menuFaleOut ${status ? "show" : "hide"}`}>
        <AiOutlineClose onClick={() => setStatus(!status)} />
        <ul className="">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">
              <button>Get a Quote</button>
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          y >= 80 ? "w-container header header-fixed" : "w-container header"
        }
      >
        <div className="header-logo">
          <div>kienlv</div>
        </div>
        <ul className="header-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">
              <button>Get a Quote</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
