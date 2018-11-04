import React from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import SocialIcon from '../elements/SocalIcon';


const FooterBackground = styled.footer`
  background: ${props => props.theme.black};
  padding: 10px 0;
`

const Wrapper = styled.div`
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
  display: flex;
  font-family: ${props => props.theme.headerFont};
  justify-content: space-around;
`;

const Author = styled.p`
    margin: 0;
    color: white;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    align-self: center;
`;

const GreenText = styled.span`
  color: ${props => props.theme.green};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;


const Footer = props => (
  <FooterBackground>
    <Wrapper>
      <Author><GreenText>Mark</GreenText> Wilkins &copy; 2019</Author>
      <Logo />
      <Flex>
        <SocialIcon icon="twitter" />
        <SocialIcon icon="github" />
        <SocialIcon icon="linkedin" />
        <SocialIcon icon="envelope" />
      </Flex>
    </Wrapper>
  </FooterBackground>
)

export default Footer;