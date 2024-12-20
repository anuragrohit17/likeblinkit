import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/rohitanuragi.rohitanuragi.1" ><img src={assets.facebook_icon} alt="" /></a>
               
              <a href="https://x.com/anuragrohit17"><img src={assets.twitter_icon} alt="" /></a>
              <a href="https://www.linkedin.com/in/rohit-anuragi-b64172222/"><img src={assets.linkedin_icon} alt="" /></a>
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
                <li>+91-9518118802</li>
                <li>contact@mychef.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © LikeBlinkit.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
