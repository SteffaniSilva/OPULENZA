import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
          <div className="agent-info">
              <p className="agent-contact">
              <span>📞 </span>Phone Number | +94 76 123 4567
            </p>
          </div>

          <div className="agent-info">
              <p className="agent-contact">
              <span>📧 </span>Email Address | info@opulenza.lk
            </p>
          </div>
          
          <div className="agent-info">
              <p className="agent-contact">
              <span>🏠 </span>
              No: 123 Lotus Grove Lane, Colombo 07, Sri Lanka
            </p>
          </div>


      <div className="contact-container">
        <h1>Find Us Here</h1>
      </div>

<div className="map-image map-embed">
      <iframe
        title="Opulenza location (Colombo 7)"
        src="https://www.google.com/maps?q=Colombo+7,+Colombo,+Sri+Lanka&z=15&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div> 
      

      

<div className="contact-form-section">
  <h2>TALK TO US</h2>

  <div className="contact-wrapper">
    {/* Left: Form */}
    <form className="contact-form">
      <div className="form-group">
        <input type="text" id="name" placeholder="Enter your name" />
      </div>

      <div className="form-group">
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className="form-group">
        <input type="tel" id="phone" placeholder="Enter your phone number" />
      </div>

      <div className="form-group">
        <textarea
          id="message"
          rows="5"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Send Your Message
      </button>
    </form>

    {/* Right: Image */}
    <div className="contact-image">
      <img src="/12.jpg" alt="Luxury apartment interior" />
    </div>
  </div>
</div>
    </div>
  );
};

export default ContactPage;