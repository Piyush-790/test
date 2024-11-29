import React from 'react'
import Logo from '../img/Logo.png'
import profile from '../img/profile.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="logo">
                <img src={Logo} alt="img" />
         

                    <ul className='navheading'>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Products</li></a>
                    <a href=""><li>Resource</li></a>
                    <a href=""><li>Pricing</li></a>
                    </ul>
              </div>

              <div className='profile'>
                <img src={profile} alt="" />
              </div>

        </nav>
    </div>
  )
}

export default Navbar
