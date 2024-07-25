import React from 'react';
import styled, { keyframes } from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../data/constants';
import EducationCard from '../components/cards/EducationCard';
import PublicIcon from '@mui/icons-material/Public';
import vkLogoMain from '../vkLogoMain.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background}; 
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const SchoolImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const CustomTimelineDot = ({ img }) => (
  <TimelineDot variant="outlined" color="error">
    <SchoolImage src={img} alt="School Logo" />
  </TimelineDot>
);
const TimelineContentWrapper = styled(TimelineContent)`
  display: flex;
  justify-content: ${({ align }) => (align === 'right' ? 'flex-start' : 'flex-end')};
`;

const spin = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningGlobeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  animation: ${spin} 5s linear infinite;
`;
const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const Education = () => {
    return (
      <Container id="education">
        <Wrapper>
          <Title>Education</Title>
          <Desc>
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </Desc>
          <TimelineSection>
            <Timeline position="alternate">
              {education.map((education, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                  <CustomTimelineDot img={education.img} />
                    {index !== education.length - 1 && <TimelineConnector style={{ background: 'rgb(210 47 47)' }} />}
                  </TimelineSeparator>
                  <TimelineContentWrapper align={index % 2 === 0 ? 'right' : 'left'}>
                    <EducationCard education={education} />
                  </TimelineContentWrapper>
                </TimelineItem>
              ))}
             {/* Globe thing */}
             <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector style={{ background: 'rgb(210 47 47)' }} />
                <TimelineDot variant='outlined' color='error'>
                    <SpinningGlobeContainer> 
                        <LogoImage src={vkLogoMain} alt="Your Logo" height={100}/>
                    </SpinningGlobeContainer>
                  
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            </Timeline>
          </TimelineSection>
        
        </Wrapper>
      </Container>
    );
  };
  
  export default Education;
  