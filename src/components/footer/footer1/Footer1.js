import React from 'react'
import { Link } from 'react-scroll';
import './Footer1.css'
import logo from './logo.png'
import image1 from './image1.png'
import insta from './instagram.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import youtube from './youtube.png'

function Footer1() {
  return (
    <div className='footer1'>
      <img src={image1} alt='Image-footer' className='img-footer' />
      <div className='footer-details'>
        <div className='footer-item1'>
          <Link to="main" smooth={true} offset={-80} duration={1000}><img src={logo} alt='Logo-footer' className='logo-footer' /></Link>
          <Link className='links' to="section5" smooth={true} offset={-70} duration={1000}>We can Custom For You</Link>
          <Link className='links' to="section6" smooth={true} offset={-80} duration={1000}>Future-proof Skills</Link>
          <Link className='links' to="section7" smooth={true} offset={-50} duration={1000}>Explore</Link>
          <Link className='links' to="section8" smooth={true} offset={-50} duration={1000}>Pricing</Link>
        </div>
        <div className='footer-item2'>
          <h5 className='footer-h5'>Contact</h5>
          <a className='blue'>support@edtech.com</a>
          <p className='blue'>(+62) 85923935983</p>
          <p className='footer-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <div className='social'>
              <img src={insta} alt='Insta' className='insta' />
              <img src={twitter} alt='Twitter' className='twitter' /> 
              <img src={linkedin} alt='Linkedin' className='linkedin' />
              <img src={youtube} alt='Youtube' className='youtube' />       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer1
