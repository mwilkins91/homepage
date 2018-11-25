import React from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import SocialIcon from '../elements/SocalIcon';
import Content from '../elements/Content';
import GreenText from '../elements/GreenText';

const ResumeTitle = styled.h1`
    color: ${props => props.theme.black};
    font-size: 4.2rem;
    font-family: "Montserrat",sans-serif;
    text-transform: capitalize;
    font-weight: bold;
    padding: 35px 0;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 50px;
`;

const ResumeSectionHeading = styled.h2`
  font-size: 1.4rem;
  font-family: "Montserrat",sans-serif;
  font-weight: bold;
  padding: 15px 0;
  color: ${props => props.theme.green};
`;

const ResumeSubHeading = styled.h3`
  font-size: 1.2rem;
  font-family: "Montserrat",sans-serif;
  font-weight: bold;
  padding: 15px 0;
  color: ${props => props.theme.black};
`;

const Resume = () => (
  <Main>
    <ResumeTitle>
      <GreenText>Mark</GreenText> Wilkins
    </ResumeTitle>
    <ResumeSectionHeading>Experience</ResumeSectionHeading>

  </Main>
);

export default Resume;