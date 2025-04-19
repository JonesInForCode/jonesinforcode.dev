import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Nick Jones</span></h1>
        <h3>Full Stack Developer specializing in <span className="secondary-highlight">modern web solutions</span></h3>
        <p>I create responsive, user-friendly applications with clean code and thoughtful architecture.</p>
        <button className="cta-button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;