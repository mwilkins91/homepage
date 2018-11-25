import React from 'react';
import Hexagon from 'react-hexagon';
import styled from 'styled-components';

const HexImg = styled(Hexagon)`
  min-width: 250px;
  max-height: 350px;
  image {
    x: 50%;
    y: 50%;
    transform: translate(-50%, -50%);
  }
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
  @media all and (max-width: 775px) {
    max-width: 100%;
    padding: 0 30px;
  } 
`;

const Spacer = styled.div`
  margin: 16px 0;
`;

const Icon = styled.i`
  font-size: 2rem;
  margin: 0 10px;
`;

const Link = styled.a`
  &, i {
   transition: 0.3s color;
  }
  
  &:hover, &:hover i {
    color: ${props => props.theme.green}
  }
`;

const Project = ({ title, links, image, description }) => {
  const imgSrc = image.childImageSharp ? image.childImageSharp.fluid.src : image.absolutePath;
 
  return (
    <VerticalColumn>
      <Spacer>
        <HexImg
          style={{ stroke: '' }}
          backgroundImage={imgSrc}
          href={links.demo}
        />
      </Spacer>
      <div>
        <ProjectTitle><Link href={links.demo}>{title}</Link></ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </div>
      <Spacer>
        <Link href={links.demo}><Icon className="fas fa-mouse-pointer" /></Link>
        <Link href={links.git}><Icon className="fab fa-github" /></Link>
      </Spacer>
    </VerticalColumn>
  );
};

export default Project;
