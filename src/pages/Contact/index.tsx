import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-content">
        <div className="title">
          <h1>Get a Quote</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!
          </p>
        </div>
        <form className="form-contact" action="">
          <select name="" id="">
            <option>What is your project next?</option>
            <option>Custom interface and layout</option>
            <option>Website design</option>
          </select>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Message" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid #ddd",
              paddingTop: "20px",
            }}
          >
            <button className="button-send">Send a message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
