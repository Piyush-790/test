import React from 'react';
import './HeroSection.css'; 
import circle from '../img/circle.png'
import Content1 from '../img/Content1.png'
import Logos from '../img/Logos.png'
import fq from '../img/FAQ section.png'



const MoreFeatures = () => {
  return (
    <div className="hero-section">

      <div className="new-feature">
      <div className='features'>Features</div>
        
      </div>

      <h1 className="hero-title">Cutting-edge features for advanced analytics</h1>

      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
        Trusted by over 4,000 startups.
      </p>

      
    

   <div className='center-img'>
    <img src={Content1} alt="img" />
   </div> 

    {/* ------------------------------------------------------------------------------------------------- */}

  <img src={fq} alt="" />

    </div>
  );
};

export default MoreFeatures;
