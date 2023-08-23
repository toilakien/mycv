import React from "react";
import images from "../../assets/images/home/pes.png";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-info">
        <h2>Contact</h2>
        <img src={images} alt="" />
      </div>
      <form className="contact-form">
        <input
          className="form-item-input"
          placeholder="Enter your name"
          type="text"
        />
        <input
          className="form-item-input"
          placeholder="Enter your phone number"
          type="text"
        />
        <textarea
          style={{ height: "300px" }}
          className="form-item-input"
          placeholder="Enter your message"
        />
        <div>
          <button className="btn-submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
