import React from 'react';
import Navbar from './navbar2.jsx';
import Footer from './footer.jsx';
import './ourservices.css';

function OurServices() {
  const feedbacks = [
    {
      name: "Emily Johnson",
      comment: "They listened to every little detail and brought my ideas to life. Couldn't be happier!",
      rating: 5,
    },
  ];

  const Comment = ({ photo, name, comment, rating }) => (
    <div className="comment-box">
      <h3 className="client-name">{name}</h3>
      <p className="client-comment">"{comment}"</p>
      <div className="client-rating">
        {"⭐".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
    </div>
  );
  return (
    <div className="main">
      <div className="ourservices-container">
      <Navbar />
      <h1 className="starting">OUR SERVICES</h1>
      <p>
        At Nestrix, we provide a wide range of services including:
      </p>
      </div>
      <div className="columns">
        <div className="box1">
          <h3>HOME DESIGN <br />CONSULTATION</h3><br />
          <p>Transform your space with expert guidance tailored to your unique style and needs.</p>
          </div>
        <div className="box2">
          <h3>HOME DESIGN <br />CONSULTATION</h3><br />
          <p>Streamline your renovation process with innovative ideas and detailed planning.</p>
        </div>
        <div className="box3">
          <h3>HOME DESIGN <br />CONSULTATION</h3><br />
          <p>Discover the perfect blend of functionality and aesthetics for your dream home.</p>
        </div>
      </div>
      <div className="how-we-work">
        <div className="procedures">
          <h3>How we work</h3>
          <h1>OUR WORK PROCEDURE</h1>
        </div>
        <div className="three-container">
          <div className="subbox">
            <h3>CLIENT DESIGN<br />CONSULTATION</h3>
            <p>Your vision, our expertise! We collaborate to understand your dreams and preferences, ensuring your home reflects your unique style and needs.</p>
            </div>
          <div className="subbox" style={{backgroundColor:'rgb(73,70,70)', color:'white'}}>
          <h3>PROTOTYPING HOME<br />DESIGN</h3>
          <p>From imagination to visualization, we create detailed prototypes that give life to your ideas, helping you see the future of your dream home.</p>
          </div>
          <div className="subbox">
          <h3>PROCESSING TO <br />DESIGN HOME</h3>
          <p>With precision and passion, we transform prototypes into reality, crafting spaces that are as functional as they are beautiful.</p>
          </div>
        </div>
      </div>
      <div className="video-divs1">
        <div className="video1">
        <iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/S-A0qLTxf-U?si=Bvyy1NoDQVKHJaWO&autoplay=1&loop=1&playlist=S-A0qLTxf-U&controls=0" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

        </div>
        <div className="text1">
          <h3>Design Consultation</h3>
          <h1>HOME DESIGN<br />CONSULTATION SERVICES</h1>
          <p>Experience personalized home design solutions tailored to your style and needs. Our expert consultations blend creativity and practicality to bring your dream space to life effortlessly.</p>
          <button className="contact-us">Contact Us</button>
        </div>
      </div>
      <div className="video-divs2">
        <div className="text2">
          <h3>Design Consultation</h3>
          <h1> HOME DESIGN 3D 2D <br />
          INTERIOR SERVICES</h1>
          <p>Bring your vision to life with our 2D and 3D interior design services. Visualize every detail and create stunning spaces with precision and style.</p>
          <button className="contact-us">Contact Us</button>
        </div>
        <div className="video2">
        <iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/pmak0cL8cNM?autoplay=1&loop=1&controls=0&playlist=pmak0cL8cNM" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

        </div>
      </div>
      <div className="video-divs1">
        <div className="video1">
        <iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/NoWyNgAQe34?autoplay=1&loop=1&controls=0&playlist=NoWyNgAQe34" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

        </div>
        <div className="text1">
          <h3>Design Consultation</h3>
          <h1> ALL IN ONE HOME <br /> 
          INTERIOR DESIGN</h1>
          <p>Discover a complete solution for all your home interior needs. From conceptual design to the final touch, we create elegant, functional spaces tailored to your lifestyle.</p>
          <button className="contact-us">Contact Us</button>
        </div>
      </div>
      <div className="comment">
        <div className="texts-part">
          <h3>Clients Feedback</h3>
          <h1>OUR TESTIMONIAL FROM<br />BEST CLIENTS</h1>
          <p> Our clients are our greatest advocates! <br />
            See what they have to say about their journey with us. <br />
            From personalized service to exceptional designs, <br />
            their feedback inspires us to achieve new heights.</p>
        </div>
        <div className="comments-box">
          {feedbacks.map((feedback, index) => (
            <Comment
              key={index}
              name={feedback.name}
              comment={feedback.comment}
              rating={feedback.rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurServices;
