import React from 'react';
import logo from "./logo.png";
import { Link } from 'react-scroll';
import "./Navbar.css";
import Dropdown from './Dropdown';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <nav className='nav-container'>
          <Link to="main" smooth={true} offset={-80} duration={1000}><img src={logo} alt="Logo" className='logo'/></Link>
              <ul className='navbar-items'>
                <li><Link to="section5" smooth={true} duration={1000} className='navbar-item'>We can custom for you</Link></li>
                <li><Link to="section7" smooth={true} duration={1000} className='navbar-item'>Explore</Link></li>
                <li><Link to="section8" smooth={true} duration={1000} className='navbar-item'>Pricing</Link></li>
              </ul>
              <a href='#' className='navbar-item4'>Enterprise Customization?</a>
              <button className='navbar-sign-in'>Sign up Now</button>
        </nav>
      </div>
      <Dropdown/>
    </>
  )
}

export default Navbar
