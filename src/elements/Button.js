import React from 'react';
import styled from 'styled-components';

const Bttn = styled.button`
  background: green;
`;

const Button = ({ children }) => (
  <Bttn>
    {children}
  </Bttn>
);

export default Button;
