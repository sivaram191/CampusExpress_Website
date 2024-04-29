import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import whitelogo from '../assets/cxwlogo.png';
import manfooter from "../assets/Manfooter.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={whitelogo} alt="Campus Express Logo" className="footer-logo"/>  
            <p>+91 9945590393</p>
            <p>+91 9945588363</p>
          </div>
          <div className="footer-section">  
            <h2 className="footer-heading">Campus Express</h2>
            <div className="social-icons">
              <a href="https://wa.me/+919945590393" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/campus__express/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/campusexpress/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="footer-add"> 
              <p>Sriven Skypark, Doddakammanahalli Main Rd,</p>
              <p>Central Excise Layout, Phase 2, 3rd Cross, Bengaluru(Bangalore) Urban,</p>
              <p>Karnataka, 560083</p>
              <p>Email: support@campusexpress.org.in</p>
            </div>
          </div>
          <div className="footer-section">
            <img src={manfooter} alt="Man in Footer" className="manfooter"/> 
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Campus Express. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
