import React from 'react';
import Layout from '../containers/layout';
import { ThemeProvider } from 'styled-components';
import theme from '../util/theme';
import ResumeSideBar from '../containers/ResumeSideBar';
import Resume from '../containers/Resume/Resume';
import styled from 'styled-components';
import Heading from '../components/Heading';

const Wrapper = styled.div`
  display: flex;
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
  @media screen and (max-width: 775px) {
    flex-direction: column;
  }
`;


const resumePage = () => (
  <ThemeProvider theme={theme}>
    <Layout className="resume">
      <Heading>Resume</Heading>
      <Wrapper id="resumeWrapper">
        <ResumeSideBar />
        <Resume />
      </Wrapper>
    </Layout>
  </ThemeProvider>
);

export default resumePage;
