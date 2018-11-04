import React from 'react';
import {ThemeProvider} from 'styled-components'
import Layout from '../containers/layout';
import Heading from '../components/Heading';
import Profile from '../containers/Profile';
import Projects from '../containers/Projects';
import theme from '../util/theme';


const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Heading color="green">Hello</Heading>
      <Profile />
      <Projects />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
