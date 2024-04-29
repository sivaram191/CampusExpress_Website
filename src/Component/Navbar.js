import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbarstyles.css'; // Import your CSS file
import group1 from './CX_logo.png';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo"><img src={group1} alt="Description" /></div>
      <ul className="nav-links">
        <li className="nav-item">
          <a className="nav-link" href="/Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Media">
            Media
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="buttons">
        <button className="orange-button" onClick={() => window.location.href = '/Tracking'}>Tracking</button>
        <button className="purple-button">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
