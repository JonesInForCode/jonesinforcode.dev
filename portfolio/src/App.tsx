import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/projects" style={styles.link}>Projects</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    backgroundColor: '#333',
  },
  link: {
    margin: '0 1rem',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default App;