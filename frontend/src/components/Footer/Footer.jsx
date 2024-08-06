import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="img-main">

            <img src={assets.logo} alt="" />
          </div>
            <p>QuickBites is an innovative online platform designed for food lovers who crave the best dishes in town. At QuickBites, we simplify your culinary exploration by offering a curated selection of the most delicious dishes from various cuisines, all in one place.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+91)  9999-765-606</li>
                <li>contact@quickbites.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ QuickBites.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
