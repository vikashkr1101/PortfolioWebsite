// EducationCard.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 5px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
   box-shadow: 0 0 7px #00c3ff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px red;
  }
`;


const SchoolImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10%;
  margin-right: 16px;
  margin-top: 22px;
`;

const ContentWrapper = styled.div`
  
  flex-direction: column;

`;
const Top = styled.div`
    width: 100%;
   
    gap: 12px
`



const Body = styled.div`
    width: 100%;

    flex-direction: column; 
`

const Institution = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: -5px;
`;

const Degree = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  color: gray;
  margin-bottom:-10px;
`;

const Year = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_tertiary};
  color: gray;
  margin-bottom: -30px;
`;

const Grade = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
   margin-bottom: -20px;
  
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: justify;
`;
const TopPart = styled.p`
display:flex;
margin-top:-5px;
// align-items:center;
`

const EducationCard = ({ education }) => {
  return (
    <Card>
            <TopPart>
                <TopPart>
                <SchoolImage src={education.img} />
                <ContentWrapper >
                    <Institution>{education.school}</Institution>
                    <Degree>{education.degree}</Degree>
                    <Year>{education.year}</Year>
                    </ContentWrapper>
                    </TopPart>
            </TopPart>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Description>{education.desc}</Description>
            </Description>
        </Card>
  );
};

export default EducationCard;
