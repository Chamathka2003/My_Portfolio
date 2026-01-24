import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-image-container">
            <img 
              src="/images/profile.jpg" 
              alt="Chamathka Jayodavi" 
              className="profile-image"
            />
          </div>
          
          <h1 className="hero-title">Chamathka Jayodavi</h1>
          
          <p className="hero-subtitle">
            Software Engineering Student | NIBM, Sri Lanka
          </p>
          
          <div className="badges">
            <span className="badge">Full Stack Developer</span>
            <span className="badge">React Enthusiast</span>
            <span className="badge">Problem Solver</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
