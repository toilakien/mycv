import React from "react";
import me1 from "../../assets/images/me-1.jpg";
const HomePage = () => {
  return (
    <div id="home" className="home">
      <div className="home-wrapper">
        <div className="home-left">
          <h1>Kien Le</h1>
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
          <img src={me1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
