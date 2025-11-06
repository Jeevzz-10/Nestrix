import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar2';
import Footer from './footer';
import './ourproj.css';

export default function OurProj() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8088/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error('Error fetching projects:', error);
        alert('Failed to load project data.');
      });
  }, []);

  return (
    <div className="container">
      <div className="empty"></div>
      <div className="tt">
        <Navbar />
        <h1>PROJECTS</h1>
        <p>
          Explore our diverse portfolio of projects, showcasing innovative designs and exceptional craftsmanship. <br />
          Each project reflects our dedication to turning ideas into inspiring spaces.
        </p>
      </div>
      <div className="pref-partner">
        <div className="content-prtner">
          <h3>Perfect Partner</h3>
          <h1>
            WE HAVE PRIORITY FOR<br />
            CAN CREATE DREAM<br />
            HOME DESIGN
          </h1>
          <p>
            Partnering with us means partnering with perfection. <br />
            From personalized consultations to impeccable designs, <br />
            we ensure every detail is tailored to create a home you’ll love forever.
          </p>
          <Link to="/about">
            <button className="portfolio2">Portfolio</button>
          </Link>
        </div>
        <div className="overlap-img">
          <div className="image-one"></div>
          <div className="image-two"></div>
          <div className="image-three"></div>
        </div>
      </div>
      <div className="proj-pics">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h1 className='proj-name'>{project.title}</h1>
            <p className='proj-desc'>{project.description}</p>
            <p className='proj-price'>{project.price}</p>
            <Link to="/contact-us">
            <button className="contact-us">Contact Us</button>
            </Link>
            </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
