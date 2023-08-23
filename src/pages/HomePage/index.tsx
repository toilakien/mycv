import React from "react";
import pes from "../../assets/images/home/pes.png";
const HomePage = () => {
  return (
    <div id="home" className="home">
      <div className="home-wrapper">
        <div className="home-left">
          <h5>
            I'm is a <span>web designer</span> and{" "}
            <span>front-end developer</span>
          </h5>
          <p>I crafts responsive websites where technologies meet creativity</p>
          <button onClick={() => (window.location.href = "/#contact")}>
            Contact me!!
          </button>
        </div>
        <div className="home-image">
          <img src={pes} alt="" />
          <div className="trick">Currently working on Portfolio</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
