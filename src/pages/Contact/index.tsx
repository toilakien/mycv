import React from "react";
import me1 from "../../assets/images/me-1.jpg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-info">
        <h2>Contact</h2>
        <img src={me1} alt="" />
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
