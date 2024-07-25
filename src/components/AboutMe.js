import React from 'react';
import styled, { keyframes } from 'styled-components';
import pphoto from'../mtphoto4.jpg'
import photo from '../Passport Photo1.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  background-color: blue;
   border-radius: 50%;
   &:hover{
    transform: scale(1.05); /* Slight zoom effect */
    box-shadow: 0 0 30px #00c3ff;
    }
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  // border: 2px solid #2900ff;
  box-shadow: 0 0 20px #00c3ff;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    animation: ${shake} 0.5s;
    animation-iteration-count: 1;
  }
`;

const DescriptionContainer = styled.div`
  flex: 2;
  text-align: justify;
  margin-left: 5rem;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <AboutSection>
        <Title>About Me</Title>
        <ImageContainer>
          <Image src={photo} alt="Photo" />
        </ImageContainer>
        <DescriptionContainer>
          <Description>
          I am Vikash Kumar, currently pursuing a Master of Computer Applications. I am a passionate coder with a strong interest in Java development and full-stack web development. 
          My love for coding began back in my school days and has only grown since. Over the years, I have acquired and honed various skills, yet I believe there is always more to learn and discover.
          <br/>
        I regularly solve data structures and algorithms (DSA) questions and have earned a 5-star rating on Hackerrank. I am also an active participant on LeetCode. 
        I am dedicated to continuously improving my skills and staying up-to-date with the latest industry trends to adapt and excel in this ever-evolving field.
          </Description>
        </DescriptionContainer>
      </AboutSection>
    </Container>
  );
};

export default AboutMe;
