import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, var(--dark), #121629);
  color: var(--light);
  padding: 0 5%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(var(--primary), rgba(58, 134, 255, 0));
    top: 20%;
    left: 10%;
    filter: blur(30px);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(var(--secondary), rgba(255, 0, 110, 0));
    bottom: 20%;
    right: 10%;
    filter: blur(30px);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: var(--mid);
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Highlight = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const SecondaryHighlight = styled.span`
  color: var(--secondary);
  font-weight: 600;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Hi, I'm <Highlight>Nick Jones</Highlight>
        </HeroTitle>
        <HeroSubtitle>
          Full Stack Developer specializing in <SecondaryHighlight>modern web solutions</SecondaryHighlight>
        </HeroSubtitle>
        <p>I create responsive, user-friendly applications with clean code and thoughtful architecture.</p>
        <CTAButton href="#projects">View My Work</CTAButton>
      </HeroContent>
      <ScrollIndicator>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="M19 12l-7 7-7-7"></path>
        </svg>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;