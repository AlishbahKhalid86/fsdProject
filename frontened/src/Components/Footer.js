import React from 'react';
import Logo from "../Assets/blood.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return <div className='footer-wrapper'>
    <div className='footer-section-one'>
        <div className='footer-logo-container'>
            <img src={Logo} alt="" />
        </div>
        <div className='footer-icons'>
            <BsTwitter/>
            <SiLinkedin/>
            <BsInstagram/>
            <FaFacebook/>
        </div>
    </div>
    <div className='footer-section-two'>
        <div className='footer-section-columns'>
            <span>090-4214-2145</span>
            <span>210991@students.au.edu.pk</span>
            <span>210895@students.au.edu.pk</span>
            <span>210967@students.au.edu.pk</span>
        </div>
        <div className='footer-section-columns'>
            <span>Terms and conditions</span>
            <span>Privacy Policy</span>
        </div>
    </div>
  </div>
  
}

export default Footer