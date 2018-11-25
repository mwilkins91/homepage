import React from 'react';
import Layout from '../containers/layout';
import { ThemeProvider } from 'styled-components';
import theme from '../util/theme';
import ResumeSideBar from '../containers/ResumeSideBar';
import Resume from '../containers/Resume';
import styled from 'styled-components';
import Heading from '../components/Heading';

const Flex = styled.div`
  display: flex;
`;

const resumePage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Heading>Resume</Heading>
      <Flex>
        <ResumeSideBar />
        <Resume />
      </Flex>
    </Layout>
  </ThemeProvider>
);

export default resumePage;
