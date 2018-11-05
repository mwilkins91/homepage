import React from 'react';
import Hexagon from 'react-hexagon';
import styled from 'styled-components';

const HexImg = styled(Hexagon)`
  min-width: 250px;
  max-height: 350px;
`;

const ProjectTitle = styled.h3`
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Montserrat", sans-serif;
`;

const ProjectDescription = styled.p`
    font-size: 1.6rem;
    padding: 0 10px;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    margin: 16px 0;
    line-height: normal;
`;

const VerticalColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 33.333%;
`;

const Spacer = styled.div`
  margin: 16px 0;
`;

const Icon = styled.i`
  font-size: 2rem;
  margin: 0 10px;
`;

const Project = ({ title, links, image, description }) => {
  const imgSrc = image.childImageSharp.fluid.src;
  return (
  <VerticalColumn> 
    <Spacer>
      <HexImg 
        style={{stroke: ''}}
        backgroundImage={imgSrc}
        href={links.demo}
      />
    </Spacer>
    <div>
      <ProjectTitle><a href={links.demo}>{title}</a></ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </div>
    <Spacer>
      <a href={links.demo}><Icon className="fas fa-mouse-pointer"></Icon></a>
      <a href={links.git}><Icon className="fab fa-github"></Icon></a>
    </Spacer>
  </VerticalColumn>
)
  }

export default Project;