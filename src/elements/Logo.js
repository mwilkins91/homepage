import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';




const Logo = ({size = "80px", mediaQuerySize = "80px"}) => {
  const WhiteCircleBackground = styled.div`
  position: relative;
  width: ${size};
  height: ${size};
  margin: 0 auto;
  ${mediaQuerySize ? `
    @media all and (max-width: 900px) {
        width: ${mediaQuerySize};
        height: ${mediaQuerySize};
    }
    ` : ''}
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
    ${mediaQuerySize ? `
    @media all and (max-width: 900px) {
        width: ${mediaQuerySize};
        height: ${mediaQuerySize};
    }
    ` : ''}
  }
`;

return (
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
}

export default Logo;
