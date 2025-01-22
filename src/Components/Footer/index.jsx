import React from "react";
import "./index.css";

const ContactUs = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-block">
        <h2 className="contact-heading">Contact Info</h2>
        <p className="contact-description">
          If you have any questions or need assistance, feel free to reach out
          to us.
        </p>
        <p className="contact-phone">
          <strong>Phone:</strong> 📞 <a href="tel:+916369180110">6369180110</a>
        </p>
        <p className="contact-email">
          <strong>Email:</strong> ✉️{" "}
          <a className="contact-link" href="mailto:dineshmurali0712@gmail.com">
            dineshmurali0712@gmail.com
          </a>
        </p>
        <p className="contact-address">
          <strong>Address:</strong> 🏠 #35 btm 11th cross, Bengaluru, Karnataka,
        </p>
      </div>

      <div className="contact-block">
        <h2 className="contact-heading">Follow Us</h2>
        <p className="contact-follow">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/dineshmurali12/"
          >
            LinkedIn 
          
          </a>
          
        </p>
        <p className="contact-follow">
          <a
            className="contact-link"
            href="https://github.com/DINESHMURALI12"
          >
            GitHub
          
          </a>
          
        </p>
      </div>

      <div className="contact-block">
        <h2 className="contact-heading">Learning Hours</h2>
        <p className="business-hours">Mon-sat: 7 AM - 11 PM</p>
        <p className="business-hours">Sun: free time</p>
      </div>
    </footer>
  );
};

export default ContactUs;
