import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types"

const Title = styled.h3`
  margin-top: 40px;
  color: ${props => props.theme.green};
  text-transform: uppercase;
  text-align: center;
  font-family: ${props => props.theme.headerFont};
  font-size: 4.2rem;
`;

const Subtitle = styled.p`
    color: ${props => props.theme.black};
    text-align: center;
    font-family: ${props => props.theme.contentFont};
    font-size: 2.5rem;
`;


const SectionTitle = ({title, subtitle}) => (
  <>
  {title ? <Title>{title}</Title> : null}
  {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
  </>
)
 
SectionTitle.propTypes = {
 
}

export default SectionTitle;
