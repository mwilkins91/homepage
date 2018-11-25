import React from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import SocialIcon from '../elements/SocalIcon';
import Content from '../elements/Content';

const SideBar = styled.aside`
  width: 33.333%;
  background: ${props => props.theme.resume.grey};
  padding: 30px;
  @media screen and (max-width: 775px) {
    width: 100%;
  }
`;

const SideBarHeading = styled.h3`
  font-family: ${props => props.theme.headerFont};
  color: white;
  font-size: 1.8rem;
  letter-spacing: 1px;
`;

const SocialText = styled.p`
  color: white;
  font-size: 1.6rem;
  font-family: ${props => props.theme.contentFont};
`;

const SocialLit = styled.ul`
  margin-bottom: 50px;
`;

const SocialListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const SideBarProfile = styled(Content)`
  color: white;
`;

const JobTitle = styled(SideBarHeading)`
  text-align: center;
  margin-bottom: 50px;
`;

const ResumeSideBar = () => (
  <SideBar>
    <Logo size="150px" />
    <JobTitle>Full-Stack Developer</JobTitle>
    <SocialLit>
      <SocialListItem>
        <SocialIcon color="white" background={props => props.theme.green} icon="home"/><SocialText> https://markwilkins.co</SocialText>
      </SocialListItem>
      <SocialListItem>
        <SocialIcon color="white" background={props => props.theme.green} icon="phone"/><SocialText> (647) - 402 - 5501</SocialText>
      </SocialListItem>
      <SocialListItem>
        <SocialIcon color="white" background={props => props.theme.green} icon="envelope" /><SocialText> contactme@markwilkins.co</SocialText>
      </SocialListItem>
      <SocialListItem>
        <SocialIcon color="white" background={props => props.theme.green} icon="linkedin" /><SocialText> /markwilkinsweb</SocialText>
      </SocialListItem>
    </SocialLit>
    <SideBarHeading> Profile </SideBarHeading>
    <SideBarProfile> 
      <p>
        I am a front-end web developer
        skilled in developing dynamic data
        driven applications using React,
        jQuery, or JavaScript. I work well
        under pressure, and I consistently
        deliver high quality work as efficiently
        as possible.
      </p>
      <p>
        After first being exposed to, then
        subsequently working for over two
        years with Javascript in my role as
        Shelter Supervisor at the Toronto
        Humane Society, I fell in love with the
        language. Ever since, I have been
        working hard to expand my
        understanding and improve my skills
        with Javascript, and to learn new
        languages and skills. I am excited to
        contribute all that I have learned to a
        new employer in the near future. 
      </p>
    </SideBarProfile>
  </SideBar>
)

export default ResumeSideBar;