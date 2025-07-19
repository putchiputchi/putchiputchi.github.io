// src/components/Navbar.js
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import '../Navbar.css'; // Import the new CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Neo Panes
        </Link>

        {/* Hamburger menu button for mobile - now conditionally gets 'active' class */}
        <button className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          {/* These divs will form the hamburger bars */}
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>

        {/* Navigation links (desktop and mobile) */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={toggleMenu}>My Recent Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;