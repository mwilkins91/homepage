import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.i`
  background: white;
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
  display: block;
  width: 35px;
  height: 35px;
  color: ${props => props.theme.black};
  transition: color 0.3s;
  margin: 0 5px;
  position: relative;
  font-size: 1.6rem;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;

const SocialIcon = ({ icon }) => (
  <Icon className={`${icon === 'envelope' ? 'fas' : 'fab'} fa-${icon}`} />
);

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default SocialIcon;
