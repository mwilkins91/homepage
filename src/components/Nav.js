import React from 'react';
import NavLink from '../elements/NavLink';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
`;

const activeStyles = {
  color: 'white',
  background: '#0b9444'
};

const Nav = () => (
  <StyledNav>
    <NavLink
      to="/"
      activeStyle={activeStyles}
    >
      Home
    </NavLink>
    <NavLink
      to="/resume"
      activeStyle={activeStyles}
    >
      Resume
    </NavLink>
  </StyledNav>
);

export default Nav;
