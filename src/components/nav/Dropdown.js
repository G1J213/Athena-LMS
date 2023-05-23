import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-scroll';
import "./Navbar.css";

function Dropdown() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
  
  return (
    <div className='dropdown' ref={menuRef}>
        <div className='toggle-btn' onClick={()=>{setOpen(!open)}}>
            <span class='bar'></span>
            <span class='bar'></span>
            <span class='bar'></span>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}  >
            <ul className='dropdown-items'>
              <li><Link to="section5" smooth={true } offset={-70} duration={1000} className='navbar-item'>We can custom for you</Link></li>
              <li><Link to="section7" smooth={true} offset={-50} duration={1000} className='navbar-item'>Explore</Link></li>
              <li><Link to="section8" smooth={true} offset={-50} duration={1000} className='navbar-item'>Pricing</Link></li>
              <li><a href='#' className='dropdown-item4'>Enterprise Customization?</a></li>
              <li><button className='dropdown-sign-in'>Sign up Now</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown
