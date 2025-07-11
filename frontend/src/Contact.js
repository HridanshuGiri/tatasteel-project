import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="intro">
        Have questions or want to get in touch with Tata Steel Jamshedpur? Reach out through the details below.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Corporate Office</h2>
          <p><strong>Address:</strong> Tata Steel Limited, Bistupur, Jamshedpur - 831001, Jharkhand, India</p>
          <p><strong>Phone:</strong> +91-657-6643111</p>
          <p><strong>Email:</strong> info@tatasteel.com</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us on Map</h2>
        <iframe
          title="Tata Steel Plant Jamshedpur"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29427.54801573531!2d86.17872236182093!3d22.786024727746774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e33ef4b484ef%3A0xe21d2725c2144892!2sTata%20Steel%20Plant%20Area%2C%20Jamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1751635459727!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
