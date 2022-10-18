import "./contact.css";
import * as React from "react";

function Contact() {
  return (
    <div className="Contact">
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1>Contact us</h1>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10"></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
