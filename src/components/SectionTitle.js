import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getTitleColor = props => {
  if (props.backgroundColor === 'white') {
    return props.theme.green;
  } else if (props.backgroundColor === 'black') {
    return 'white';
  } else if (props.backgroundColor === 'green') {
    return 'white';
  }
};


const getSubtitleColor = props => {
  if (props.backgroundColor === 'white') {
    return props.theme.black;
  } else if (props.backgroundColor === 'black') {
    return 'white';
  } else if (props.backgroundColor === 'green') {
    return props.theme.black;
  }
};

const Title = styled.h3`
  padding-top: 40px;
  color: ${getTitleColor};
  text-transform: uppercase;
  text-align: center;
  font-family: ${props => props.theme.headerFont};
  font-size: 4.2rem;
  line-height: normal;
`;

const Subtitle = styled.p`
    color: ${getSubtitleColor};
    text-align: center;
    font-family: ${props => props.theme.contentFont};
    font-size: 2.5rem;
    line-height: normal;
    margin-bottom: 20px;
`;


const SectionTitle = ({ title, subtitle, backgroundColor = 'white' }) => (
    <>
      {title ? <Title backgroundColor={backgroundColor}>{title}</Title> : null}
      {subtitle ? <Subtitle backgroundColor={backgroundColor}>{subtitle}</Subtitle> : null}
    </>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['green', 'white', 'black'])
};

export default SectionTitle;
