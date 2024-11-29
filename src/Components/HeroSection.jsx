import React from 'react';
import './HeroSection.css'; 
import circle from '../img/circle.png'
import Container from '../img/Container.png'
import Logos from '../img/Logos.png'



const HeroSection = () => {
  return (
    <div className="hero-section">

      <div className="new-feature">
      <div className='features'><span>New feature</span><a href="#">Check out the team dashboard →</a></div>
        
      </div>

      <h1 className="hero-title">Beautiful analytics to grow smarter</h1>

      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
        Trusted by over 4,000 startups.
      </p>

      
      <div className="hero-buttons">
        <button className="demo-button"><span><img src={circle} alt="" /></span>Demo</button>
        <button className="signup-button">Sign up</button>
      </div>

   <div className='center-img'>
    <img src={Container} alt="img" />
   </div> 

    {/* ------------------------------------------------------------------------------------------------- */}

    <p>Join 4,000+ companies already growing</p>

    <img src={Logos} alt="" />

    </div>
  );
};

export default HeroSection;
