import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${activeSection !== 'hero' ? 'scrolled' : ''}`}>
      <a href="#" className="logo">NJ</a>
      <ul className="nav-links">
        <li>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;