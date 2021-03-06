import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import SectionTitle from '../components/SectionTitle';
import Project from '../components/Project';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
    font-size: 1.6rem;
    padding: 0 10px;
    text-align: center;
    font-family: "Open Sans",sans-serif;
    margin: 16px 0;
    line-height: normal;
    text-align: center;
    display: block;
    &:hover, &:hover i {
      color: ${props => props.theme.green};
    }
    i {
      margin: 0 5px
    }
`;

const ProjectsSection = styled.section`
  background: ${props => props.theme.black};
  padding: 50px 0;
  * {
    color: white;
  } 
`;

const Wrapper = styled.div`
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 775px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } 
`;

const Projects = () => (
  <ProjectsSection id="projects">
    <Wrapper>
      <SectionTitle
        title="Personal Projects"
        subtitle="Some of my favorites"
        backgroundColor="black"
      />
      <StaticQuery
        query={graphql`
          query {
            allProjectsJson {
              edges {
                node {
                  id
                  title
                  links {
                    demo
                    git
                  }
                  description
                  image {
                    id
                    absolutePath
                    childImageSharp {
                      fluid(cropFocus: CENTER, maxWidth: 250, maxHeight: 300) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
          `}
        render={data => {
          const projects = data.allProjectsJson.edges;
          return (
            <Flex>
              {projects.map(({ node }) => <Project key={`project-${node.id}`} {...node} />)}
            </Flex>
          );
        }}
      />
      <StyledLink to="/projects#nav">More Projects<i class="fas fa-chevron-right"></i></StyledLink>
    </Wrapper>
  </ProjectsSection>
);

export default Projects;
