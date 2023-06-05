import React from "react";
import person from "../../assets/images/about/person.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-head">
        <div>
          <h6>Who am i?</h6>
          <p>
            Hello, i’m Elias! I’m a self-taught front-end developer based in
            Kyiv, Ukraine. I can develop responsive websites from scratch and
            raise them into modern user-friendly web experiences. Transforming
            my creativity and knowledge into a websites has been my passion for
            over a year. I have been helping various clients to establish their
            presence online. I always strive to learn about the newest
            technologies and frameworks.
          </p>
        </div>
        <div className="about-image">
          <img src={person} alt="" />
        </div>
      </div>
      <div className="skill">
        <h4>
          <span>#</span>Skill
        </h4>
        <div className="skill-wrapper">
          <div className="skill-item">
            <h5>Languages</h5>
            <p>Html</p>
            <p>Css</p>
          </div>
          <div className="skill-item">
            <h5>Languages</h5>
            <p>Html</p>
            <p>Css</p>
          </div>
          <div className="skill-item">
            <h5>Languages</h5>
            <p>Html</p>
            <p>Css</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
