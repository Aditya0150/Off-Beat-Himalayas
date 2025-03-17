import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">"Let's Connect with the Peaks, Start Planning Your Escape!"</h1>
      <p className="contact-message">Your Himalayan Journey Doesn't End Here: Discover New Peaks with Us Again!.</p>
      <div className="contact-details">
        <p>Yogi Rawat</p>
        <p>
          <a href="https://wa.me/918126417109" target="_blank" rel="noopener noreferrer">
            +91 8126417109
          </a>
        </p>
        <p>Dehradun, Uttarakhand, India</p>
      </div>
    </div>
  );
};

export default Contact;
