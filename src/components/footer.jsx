import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>&copy; 2024 Nestrix. All rights reserved.</p>
        <p>123 Dream Street, Home City, Country</p>
        <p>Email: info@nestrix.com</p>
      </div>
      <div className="footer-nav">
        <a href="/about" className="footer-link">About Us</a>
        <a href="/services" className="footer-link">Services</a>
        <a href="/contact" className="footer-link">Contact Us</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
