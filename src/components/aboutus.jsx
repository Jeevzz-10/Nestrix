import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar2.jsx';
import Footer from './footer.jsx';
import './aboutus.css';

function AboutUs() {
  const callUsDetails = [
    {
      name: "John Doe",
      quote: `"WORK HARD & GREAT QUALITY IS MY PRIORITY"`,
      role: "Senior Designer",
      contact: "+1 234 567 890",
    },
    {
      name: "Jane Smith",
      quote: `"DESIGNING HOMES THAT SPEAK VOLUMES ABOUT YOU"`,
      role: "Project Manager",
      contact: "+1 987 654 321",
    },
  ];
  const CallUsBox = ({ name, quote, role, contact }) => (
    <div className="call-us-box">
      <h3 className="call-quote">{quote}</h3>
      <p className="call-role"><b>{role}</b></p>
      <p className="call-name">- {name}</p>
      <p className="call-contact">📞 {contact}</p>
    </div>
  );
  return (
    <div className="aboutus-container">
      <div className="names">
      <Navbar />
      <h1 className="start">ABOUT US</h1>
      <p>
        Welcome to Nestrix! We are dedicated to creating elegant dream homes. <br /> 
        Our team specializes in interior design, offering personalized solutions <br />
        to make your vision come true.
      </p>
      </div>
       <div className="who-r-v">
        <div className="img-div"></div>
        <div className="content">
          <h3>Who we are</h3>
          <h1>WE ARE PERFECT TEAM<br />FOR HOME INTERIOR<br />DECORATION</h1>
          <p>Our team of experts specializes in creating beautiful and functional interiors. <br />
    We blend creativity with precision to bring your vision to life, ensuring a home <br />
    that truly reflects your style.</p>
        </div>
      </div>
      <div className="our-team">
        <div className="title">
        <h5>Our team</h5>
        <h1>WE WORK WITH TEAM</h1>
        </div>
        <div className="photos">
          <div className="a">
            <div className="img-1"></div> <h2>KITCHEN</h2>
          </div>
          <div className="b">
            <div className="img-2"></div> <h2>LIVING ROOM</h2>
          </div>
          <div className="c">
            <div className="img-3"></div> <h2>BEDROOM</h2>
          </div>
          <div className="d">
            <div className="img-4"></div> <h2>BATH SPACE</h2>
          </div>
          <div className="e">
            <div className="img-5"></div> <h2>GARDEN</h2>
          </div>
          <div className="f">
            <div className="img-6"></div> <h2>OFFICE SPACE</h2>
          </div>
        </div>
      </div>
      <div className="call-us-section">
        <h2 className="call-us-title">Get in Touch With Our Experts</h2>
        <div className="call-us-container">
          {callUsDetails.map((person, index) => (
            <CallUsBox
              key={index}
              name={person.name}
              quote={person.quote}
              role={person.role}
              contact={person.contact}
            />
          ))}
        </div>
      </div>
      <div className="partner">
        <div className="content-partner">
          <h3>Perfect Partner</h3>
          <h1>WE HAVE PRIORITY FOR<br />CAN CREATE DREAM<br />HOME DESIGN</h1>
          <p>Partnering with us means partnering with perfection. <br />From personalized consultations to impeccable designs, <br />we ensure every detail is tailored to create a home you’ll love forever.</p>
          <Link to="/portfolio">
          <button className='portfolio'>Blog Page</button>
          </Link>
        </div>
        <div className="img-overlap">
          <div className="image-1"></div>
          <div className="image-2"></div>
          <div className="image-3"></div>
        </div>
      </div>
      <div className="trust-us-now">
        <div className="video">
        <iframe 
  width="600" 
  height="380" 
  src="https://www.youtube.com/embed/L0PSxBh31NI?autoplay=1&loop=1&playlist=L0PSxBh31NI" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>
        </div>
        <div className="text">
          <h3>Trust us now</h3>
          <h1>WHY CHOICE OUR HOME<br />DESIGN INTERIOR<br />SERVICES</h1>
          <p>From concept to completion, our interior design services prioritize <br />your needs. Experience the perfect blend of style, comfort, and practicality, tailored exclusively for your dream home.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
