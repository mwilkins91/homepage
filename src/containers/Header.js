import React from 'react';
import Nav from '../components/nav';
import styled from 'styled-components';
import HexHero from '../components/HexHero';

const NoPrintHeader = styled.header`
  @media print {
    display: none;
  }
`;

const Header = ({ siteTitle }) => (
  <NoPrintHeader>
    <HexHero />
    <Nav />
  </NoPrintHeader>
);

export default Header;
