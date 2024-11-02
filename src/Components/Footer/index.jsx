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
          <strong>Phone:</strong> 📞 <a href="tel:+918123265859">8123265859</a>
        </p>
        <p className="contact-email">
          <strong>Email:</strong> ✉️{" "}
          <a className="contact-link" href="mailto:sudeshmd1997@gmail.com">
            sudeshmd1997@gmail.com
          </a>
        </p>
        <p className="contact-address">
          <strong>Address:</strong> 🏠 #952 Ajay Nilyam, Bengaluru, Karnataka,
        </p>
      </div>

      <div className="contact-block">
        <h2 className="contact-heading">Follow Us</h2>
        <p className="contact-follow">
          <a
            className="contact-link"
            href="https://in.linkedin.com/in/sudesh-gowda-md-sudesh-12432a159?trk=public_post_follow-view-profile"
          >
            LinkedIn
          </a>
        </p>
      </div>

      <div className="contact-block">
        <h2 className="contact-heading">Business Hours</h2>
        <p className="business-hours">Mon-Fri: 9 AM - 5 PM</p>
        <p className="business-hours">Sat-Sun: Closed</p>
      </div>
    </footer>
  );
};

export default ContactUs;
