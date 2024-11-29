import React from 'react'
import "./Product.css"
import Logomark from '../img/Fictional company logo.png'
import Avatar from '../img/Avatar.png'
const Product = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-head">
        <img src={Logomark} alt="" />
        <h2>Sisyphus</h2>
      </div>
      <div className="testimonial-msg">
        <h1>
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h1>
      </div>
      <div className='testimonial-profile'>
        <img src={Avatar} alt="" />
        <div className='profile-detail'>
          <p className="profile-name">Candice Wu</p>
          <p className="profile-title">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
}

export default Product