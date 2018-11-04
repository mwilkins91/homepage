import React from 'react';
import {ThemeProvider} from 'styled-components'
import Layout from '../containers/layout';
import Heading from '../components/Heading';
import Profile from '../containers/Profile';
import theme from '../util/theme';


const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Heading color="green">Hello</Heading>
      <Profile />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
