import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <button>india . English (UK) - INR</button>
        <div className="footerRow">
            <span className='footerText'>help</span>
            <span className='footerText'>Privacy settings</span>
            <span className='footerText'>Login</span>
        </div>
        <div className="footerRow">
            <span className='footerText'>Cookie policy</span>
            <span className='footerText'>Privacy policy</span>
            <span className='footerText'>Terms of service</span>
            <span className='footerText'>Company Details</span>
        </div>
        <div className="footerRow">
            <span className='footerText'>Explore</span>
            <span className='footerText'>Partners</span>
            <span className='footerText'>Trips</span>
            <span className='footerText'>Partners</span>
            <span className='footerText'>International Sites</span>
        </div>

        </div>
        <p className='footerCopyRight'>&copy; Bharath 2023</p>
    </div>
  )
}

export default Footer