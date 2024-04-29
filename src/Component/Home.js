import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";

import Navbar from "./Navbar.js";
import HeroSection from "./HeroSection.js";
import Testimonial from "./Testimonial.js";
import Cards from "./Cards.js";
import Flowchart from "./Flowchart.js";
import HappyClients from ".//HappyClients.js";
import ClientsSection from "./ClientsSection.js";
import Footer from "./Footer.js";


const Home = () => {
  return (
      <div className="landing-page2">
        <HeroSection />
        <Flowchart />
        <HappyClients />
        <ClientsSection />
        <Cards />
        <Testimonial />
      </div>
  );
};

export default Home;
