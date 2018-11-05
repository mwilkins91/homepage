import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    font-weight: bolder;
    color: #0b9444;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.333%;
`;

const Icon = styled.i`
  font-size: 4rem;
  color: ${props => props.theme.green};
  margin-bottom: 15px;
`;

const Link = styled.a`
  color: black;
  font-family: "Open Sans", sans-serif;
  transition: color 0.3s;
  font-size: 1.6rem;
  font-weight: 400;
  &:hover {
    color: ${props => props.theme.green}
  }
}

`;

const ContactIcon = ({ icon, link, text }) => (
  <Container>
    <Icon className={icon} />
    <Link href={link}>{text}</Link>
  </Container>
);

ContactIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactIcon;
