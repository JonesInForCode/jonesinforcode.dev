import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import Section from './components/Section';
import Navbar from './components/Navbar';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero'); // Default to 'hero'

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Select all sections
      let currentSection = 'hero'; // Default section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionHeight = section.offsetHeight;

        // Check if the current scroll position is within this section
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || 'hero'; // Get the section's ID
        }
      });

      setActiveSection(currentSection); // Update the active section
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar activeSection={activeSection} /> {/* Pass activeSection as a prop */}
      <Hero />
      <Section id="about" title="About Me">
  <p>
    I am a passionate full-stack developer with experience in building modern, responsive web applications.
    I specialize in creating clean, user-friendly designs and writing maintainable code.
  </p>
</Section>
<Section id="skills" title="My Skills">
  <ul>
    <li>JavaScript (ES6+)</li>
    <li>React.js</li>
    <li>Node.js</li>
    <li>TypeScript</li>
    <li>CSS & Styled Components</li>
  </ul>
</Section>
<Section id="projects" title="Projects">
  <p>
    Here are some of the projects I’ve worked on:
  </p>
  <ul>
    <li>Portfolio Website - A personal website showcasing my work and skills.</li>
    <li>Task Manager App - A full-stack application for managing tasks and projects.</li>
    <li>E-commerce Platform - A scalable e-commerce solution with a modern UI.</li>
  </ul>
</Section>
<Section id="contact" title="Get In Touch">
  <p>
    Feel free to reach out to me for collaboration or just to say hi! You can contact me via email at
    <a href="mailto:nick.jones@example.com">nick.jones@example.com</a>.
  </p>
</Section>
    </>
  );
};

export default App;