import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
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
          <a href="/#home">Home</a>
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
          <a href="">
            <button>Get a Quote</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
