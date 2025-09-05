import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/Logo.png" alt="Papyrus Limited Logo" />
          <span>Papyrus Ltd.</span>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Site Map</a>
        </div>
        <div className="footer-social">
          <a href="#">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#">
            <i className="ri-twitter-x-line"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Papyrus Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
