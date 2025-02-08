import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/web logo.jpg';
import contact from '../../assets/contact.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () =>{
 const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  }
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="deskmenu">
            <Link to="/"  className="desktopMenuItem">Home</Link>
            <Link to="/about"  className="desktopMenuItem">About</Link>
            <Link to="/skills"  className="desktopMenuItem">Skills</Link>
            <Link to="/project"  className="desktopMenuItem">Projects</Link>
            </div>
            <button className="menubtn" onClick={handleContactClick}><img src={contact} alt="contact" className='contactimg'/>Contact me</button>
        </nav>
    )
}

export default Navbar;
