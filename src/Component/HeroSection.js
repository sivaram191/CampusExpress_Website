import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import group10 from './Group 46.png';

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [trackingNumber, setTrackingNumber] = useState('');
  const texts = ["SEAMLESS", "RELIABLE", "EFFICIENT"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [textIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the Tracking component with the tracking number as a query parameter
    window.location.href = `/Tracking?trackingNumber=${trackingNumber}`;
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="text">
          <h2 className="hero-heading">EXPERIENCE</h2>
          <h2 className="changing-text">{texts[textIndex]}</h2>
          <h2 className="hero-heading">LOGISTICS</h2>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Tracking Number / PIN Code"
              className="search-input"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button type="submit" className="search-button">
              Track
            </button>
          </form>
        </div>
      </div>
      <div className="hero-right">
        <div className="image-container">
          <div className="image-container img">
            <img src={group10} alt="Description" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;