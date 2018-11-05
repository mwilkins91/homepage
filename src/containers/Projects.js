import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import SectionTitle from '../components/SectionTitle';
import Project from '../components/Project';

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
                    childImageSharp {
                      fluid(maxWidth: 250, maxHeight: 300) {
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
    </Wrapper>
  </ProjectsSection>
);

export default Projects;
