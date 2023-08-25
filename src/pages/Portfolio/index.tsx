import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-head">
        <h1>Our Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!
        </p>
      </div>
      <div>
        <ul className="tabs">
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Brand</a>
          </li>
          <li>
            <a href="">Design</a>
          </li>
          <li>
            <a href="">Photo</a>
          </li>
        </ul>
        <div className="renderTabs">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/8710945/pexels-photo-8710945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/8710945/pexels-photo-8710945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/8710945/pexels-photo-8710945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/8710945/pexels-photo-8710945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
