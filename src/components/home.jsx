import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './home-navbar.jsx';
import './intro.css';
import Footer from './footer.jsx';

function HomePage() {
  const location = useLocation();
  const username = location.state?.username;
  const feedbacks = [
    {
      name: "Jane Smith",
      comment: "Excellent service and stunning designs! Highly recommended for anyone looking to renovate.",
      rating: 4,
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
    <div className="home-container">
      <Navbar />
      {username ? (
        <h3 className="welcome">Hey {username.toUpperCase()}, Welcome to NESTRIX</h3>
      ) : (
        <h3 className="welcome">Welcome to Nestrix</h3>
      )}      
      <h1 className='home-title'>BUILD YOUR <br/>ELEGANT DREAM <br/>HOME INTERIOR</h1>
      <p className='description'>
        Nestrix offers an intuitive platform for home. <br /> Whether you're looking for inspiration, planning a renovation,<br />
        or building from scratch, we provide the tools and expertise<br />
        you need to bring your vision to life.
      </p>
      <Link to="/projects">
      <button className='proj-connect'>Our Projects</button>
      </Link>
      <div className="column">
  <div className="box1">
    <h3>HOME DESIGN <br />CONSULTATION</h3><br />
    <p>Transform your space with expert guidance tailored to your unique style and needs.</p>
  </div>
  <div className="box2">
    <h3>RENOVATION <br />PLANNING</h3><br />
    <p>Streamline your renovation process with innovative ideas and detailed planning.</p>
  </div>
  <div className="box3">
    <h3>INTERIOR <br />STYLING</h3><br />
    <p>Discover the perfect blend of functionality and aesthetics for your dream home.</p>
  </div>
</div>

      <div className="who-r-v">
        <div className="image-div">
        </div>
        <div className="content-div">
        <h3>Who are we</h3>
        <h1>WE ARE PERFECT TEAM<br />FOR HOME INTERIOR<br />DECORATION</h1>
        <p>At Nestrix, we specialize in transforming spaces into stunning homes. <br /> 
    Our team blends creativity and precision to craft interiors that reflect <br />
    your personality, ensuring both style and comfort. Let us bring your <br />
    dream home to life.</p>
        </div>
      </div>
      <div className="how-v-work">
        <div className="procedure">
          <h3>How we work</h3>
          <h1>OUR WORK PROCEDURE</h1>
        </div>
        <div className="three-boxes">
          <div className="sub-box">
            <h3>CLIENT DESIGN<br />CONSULTATION</h3>
            <p>Your vision, our expertise! We collaborate to understand your dreams and preferences, ensuring your home reflects your unique style and needs.</p>
          </div>
          <div className="sub-box" style={{backgroundColor:'rgb(73,70,70)', color:'white'}}>
          <h3>PROTOTYPING HOME<br />DESIGN</h3>
          <p>From imagination to visualization, we create detailed prototypes that give life to your ideas, helping you see the future of your dream home.</p>
          </div>
          <div className="sub-box">
          <h3>PROCESSING TO <br />DESIGN HOME</h3>
          <p>With precision and passion, we transform prototypes into reality, crafting spaces that are as functional as they are beautiful.</p>
          </div>
        </div>
      </div>
      <div className="random-img">
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div>
        <div className="img4"></div>
        <div className="img5"></div>
      </div>
      <div className="partner">
        <div className="content-partner">
          <h3>Perfect Partner</h3>
          <h1>WE HAVE PRIORITY FOR<br />CAN CREATE DREAM<br />HOME DESIGN</h1>
          <p>Partnering with us means partnering with perfection. <br />From personalized consultations to impeccable designs, <br />we ensure every detail is tailored to create a home you’ll love forever.</p>
          <Link to="/portfolio">
          <button className='portfolio'>Portfolio</button>
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
      <div className="comments">
        <div className="text-part">
          <h3>Clients Feedback</h3>
          <h1>OUR TESTIMONIAL FROM<br />BEST CLIENTS</h1>
          <p>
            Our clients are our greatest advocates! <br />
            See what they have to say about their journey with us. <br />
            From personalized service to exceptional designs, <br />
            their feedback inspires us to achieve new heights.
          </p>
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
      <Footer/>
    </div>
  );
}

export default HomePage;
