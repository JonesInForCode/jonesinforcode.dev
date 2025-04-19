import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface NavbarProps {
  activeSection: string; // Define the prop type
}

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.scrolled ? 'rgba(35, 41, 70, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--light);
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li<{ isActive: boolean }>`
  margin-left: 30px;
  
  a {
    color: ${props => props.isActive ? 'var(--primary)' : 'var(--light)'};
    font-weight: ${props => props.isActive ? '600' : '500'};
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Nav scrolled={scrolled}>
      <Logo href="#">NJ</Logo>
      <NavLinks>
        <NavItem isActive={activeSection === 'about'}>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem isActive={activeSection === 'skills'}>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem isActive={activeSection === 'projects'}>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem isActive={activeSection === 'contact'}>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;