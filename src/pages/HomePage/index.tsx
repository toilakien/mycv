import React from "react";
import pes from "../../assets/images/home/pes.png";
import About from "../AboutPage";
const HomePage = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-left">
          <h5>
            Elias is a <span>web designer</span> and{" "}
            <span>front-end developer</span>
          </h5>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <button>Contact me!!</button>
        </div>
        <div className="home-image">
          <img src={pes} alt="" />
          <div className="trick">Currently working on Portfolio</div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default HomePage;
