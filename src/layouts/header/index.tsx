import React from "react";
import logo from "../../assets/images/logo/logo.png";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-container header">
      <div className="header-logo">
        <img src={logo} />
        <div>kienlv</div>
      </div>
      <ul className="header-menu">
        <li>
          <Link to="/">
            <span>#</span>home
          </Link>
        </li>
        <li>
          <Link to="">
            <span>#</span>work
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>#</span>about-me
          </Link>
        </li>
        <li>
          <Link to="">
            <span>#</span>contact
          </Link>
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
