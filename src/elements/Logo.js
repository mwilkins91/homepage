import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const size = '80px';

const WhiteCircleBackground = styled.div`
  position: relative;
  width: ${size};
  height: ${size};
  &:after {
    content: "";
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 9%;
    right: 9%;
    top: 9%;
    bottom: 9%;
  }
  img {
    position: relative;
    z-index: 2;
    width: ${size};
    height: ${size};
  }
`;

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: {eq: "logo.svg"}) {
          publicURL
        }
      }
    `}
    render={data => (
      <WhiteCircleBackground>
        <img src={data.logo.publicURL} alt="M.W. (Mark Wilkins)" />
      </WhiteCircleBackground>
    )}
  />
);
export default Logo;
