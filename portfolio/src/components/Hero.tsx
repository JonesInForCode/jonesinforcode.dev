import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #232946, #121629);
  color: #fffffe;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
`;

const Highlight = styled.span`
  color: #3a86ff;
  font-weight: 600;
`;

const CTAButton = styled.button`
  display: inline-block;
  background: #3a86ff;
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
    background: #2667cc;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <h1>
        Hi, I'm <Highlight>Nick Jones</Highlight>
      </h1>
      <h3>
        Full Stack Developer specializing in{' '}
        <Highlight>modern web solutions</Highlight>
      </h3>
      <CTAButton>View My Work</CTAButton>
    </HeroSection>
  );
};

export default Hero;