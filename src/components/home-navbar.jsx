import React from 'react';
import './home-navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">NESTRIX</a>
      </div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Our Services</a></li>
        <li><a href="/projects">Our Projects</a></li>
        <li><a href="/portfolio">FAQ</a></li>
        <li><a href="/contact-us" className="contact-us-btn">Contact Us</a></li>
        <hr />
      </ul>
    </nav>
  );
}

export default Navbar;
