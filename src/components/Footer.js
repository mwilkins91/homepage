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
  justify-content: space-between;
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

const Link = styled.a`
  transition: 0.3s color;
  &:hover i{
    color: ${props => props.theme.green};
    cursor: pointer;
  }
`;


const Footer = props => (
  <FooterBackground>
    <Wrapper>
      <Author><GreenText>Mark</GreenText> Wilkins &copy; 2019</Author>
      <a href="/"><Logo /></a>
      <Flex>
        <Link href="https://twitter.com/MarkWilkinsWeb" ><SocialIcon icon="twitter" /></Link>
        <Link href="https://github.com/mwilkins91" ><SocialIcon icon="github" /></Link>
        <Link href="https://www.linkedin.com/in/markwilkinsweb/" ><SocialIcon icon="linkedin" /></Link>
        <Link href="mailto:contactme@markwilkins.co?Subject=Hello!" ><SocialIcon icon="envelope" /></Link>
      </Flex>
    </Wrapper>
  </FooterBackground>
)

export default Footer;