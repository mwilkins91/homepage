import React from 'react';
import Layout from '../containers/layout';
import { ThemeProvider } from 'styled-components';
import theme from '../util/theme';


const resumePage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <p>The resume will go here!</p>
    </Layout>
  </ThemeProvider>
);

export default resumePage;
