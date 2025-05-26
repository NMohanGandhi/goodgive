import React from 'react';
import './Herocomponent.css';
import Fightagainist from '../assets/Fightagaiist.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-heading">
            Fight Against <br />
            Hunger Donating <br />
            <span className="highlight">Food Today</span>
          </h1>
          <p className="hero-description">
            Your donation can help provide food to<br/>
            people who are struggling to feed<br/> 
            themselves and their families.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Donate Now</button>
            <button className="btn-primary">Register as Volunteer</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-background">
            <img src={Fightagainist} alt="Child Eating" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;