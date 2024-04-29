import React from 'react';
import './About.css'; // Import CSS file for styles
import img1 from "../assets/about1.png";
import img2 from "../assets/about2.png";
import img3 from "../assets/about3.png";
const About = () => {
  return (
    <div className="aboutmain">
      <div className="box">
        <img src={img1} alt="Image 1" />
        <p>Mission</p>
      </div>
      <div className="box">
        <img src={img2} alt="Image 2" />
        <p>Vision</p>
      </div>
      <div className="box">
        <img src={img3} alt="Image 3" />
        <p>Value</p>
      </div>
    </div>
  );
};

export default About;
