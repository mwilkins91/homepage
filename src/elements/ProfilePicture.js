import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Hexagon from 'react-hexagon';
import styled from 'styled-components';
import theme from '../util/theme';

const query = graphql`
query {
  profilePicture: file(relativePath: { eq: "mwilkins.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

const HexImg = styled(Hexagon)`
  min-width: 250px;
  max-width: 250px;
  flex-grow: 1;
  margin-right: 40px;
  @media all and (max-width: 775px) {
    margin-right: 0;
  } 
  image {
    transform: translateX(-40px);
  }
`;

const ProfilePicture = () => (
  <StaticQuery
    query={query}
    render={data => (
      <HexImg
        backgroundImage={data.profilePicture.childImageSharp.fluid.src}
        style={{ stroke: theme.green }}
        backgroundScale={1.1}
      />
    )}
  />
);
export default ProfilePicture;
