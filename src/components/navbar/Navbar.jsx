import React,  { useState }  from 'react';
import Logo from '../../images/Logo.png';
import './navbar.css';
import { Outlet } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
        <div className="navbar">
        <span className="nav-logo"><img src={Logo} alt="unsplashage" /></span>
        <div className={`nav-item ${isOpen && "open"}`}>
            <a href="features">Home</a>
            <a href="blogs">About</a>
            <a href="faqs">Lab</a>
        </div>

        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}> 
            <div className="bar"></div>
        </div>

        </div>

        <Outlet/>
   
    </section>
   
  )
}

export default Navbar