import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';



const fas = [
  'envelope',
  'home',
  'phone-square',
  'phone'
]

const far = [
]

const getPrefix = (icon) => {
  if (fas.indexOf(icon) > -1) return 'fas';
  if (far.indexOf(icon) > -1) return 'far';
  return 'fab';
}

const SocialIcon = ({ icon, color = props => props.theme.black, background = 'white' }) => {

  const Icon = styled.i`
    background: ${background};
    border-radius: 50%;
    line-height: 35px;
    text-align: center;
    display: block;
    width: 35px;
    height: 35px;
    color: ${color};
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

  return (
    <Icon className={`${getPrefix(icon)} fa-${icon}`} />
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default SocialIcon;
