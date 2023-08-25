import React from "react";
import me2 from "../../assets/images/me-2.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-head">
        <div className="about-head-t">
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
          <img src={me2} alt="" />
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
            <h5>Other</h5>
            <p>Html css js </p>
            <p>Rest Jinja</p>
          </div>
          <div className="skill-item">
            <h5>Tools</h5>
            <p>VScode</p>
            <p>Figma</p>
            <p>Git</p>
          </div>
          <div className="skill-item">
            <h5>Database</h5>
            <p>SQLite Port</p>
            <p>Mongo</p>
          </div>
          <div className="skill-item">
            <h5>Frameword </h5>
            <p>ReactJs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
