import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeadingBackground = styled.div`
  background: ${props => props.color === 'black' ? props.theme.black : props.theme.green};
`;
const H2 = styled.h2`
    color: white;
    font-size: 4.2rem;
    font-family: ${props => props.theme.headerFont};
    text-transform: uppercase;
    font-weight: bold;
    padding: 35px 0;
    text-align: center;
`;

const Heading = ({ color, children }) => (
  <HeadingBackground color={color}>
    <H2>{children}</H2>
  </HeadingBackground>
);

Heading.propTypes = {
  color: PropTypes.oneOf(['green', 'black']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default Heading;
