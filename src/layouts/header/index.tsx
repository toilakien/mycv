import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { AiOutlineDown } from "react-icons/ai";
const Header = () => {
  const [y, setY] = useState(0);

  window.addEventListener("scroll", function () {
    setY(this.scrollY);
  });
  return (
    <div
      className={
        y >= 80 ? "w-container header header-fixed" : "w-container header"
      }
    >
      <div className="header-logo">
        <img src={logo} />
        <div>kienlv</div>
      </div>
      <ul className="header-menu">
        <li>
          <a href="/#home">
            <span>#</span>home
          </a>
        </li>
        <li>
          <a href="#work">
            <span>#</span>work
          </a>
        </li>
        <li>
          <a href="#about">
            <span>#</span>about-me
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>#</span>contact
          </a>
        </li>
        <li>
          <a href="">
            EN <AiOutlineDown />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
