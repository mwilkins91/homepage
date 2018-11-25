import React from 'react';
import Nav from '../components/nav';
import styled from 'styled-components';

const NoPrintHeader = styled.header`
  @media print {
    display: none;
  }
`;

const Header = ({ siteTitle }) => (
  <NoPrintHeader>
    <Nav />
  </NoPrintHeader>
);

export default Header;
