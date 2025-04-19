// src/components/Section.tsx
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 100px 5%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-size: 2.5rem;
  
  span {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: var(--primary);
    }
  }
`;

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <StyledSection id={id}>
      <SectionTitle><span>{title}</span></SectionTitle>
      {children}
    </StyledSection>
  );
};

export default Section;