import React from 'react';
import Layout from '../containers/layout';
import { ThemeProvider } from 'styled-components';
import theme from '../util/theme';
import ResumeSideBar from '../containers/ResumeSideBar';


const resumePage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <ResumeSideBar />
    </Layout>
  </ThemeProvider>
);

export default resumePage;
