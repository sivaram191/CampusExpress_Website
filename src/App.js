import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar.js";
import HeroSection from "./Component/HeroSection.js";
import Testimonial from "./Component/Testimonial.js";
import Cards from "./Component/Cards.js";
import Flowchart from "./Component/Flowchart.js";
import HappyClients from "./Component/HappyClients.js";
import ClientsSection from "./Component/ClientsSection.js";
import Footer from "./Component/Footer.js";
import Contact from "./Component/Contact.js";
import Home from "./Component/Home.js";
import About from "./Component/About.js";
import Media from "./Component/Media.js";
import Pincode from "./Component/Pincode.js";
import Tracking from "./Component/Tracking.js";

function App(){
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Media" component={Media} />
          <Route path="/Tracking" component={Tracking} />
          <Route path="/Pincode" component={Pincode} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
