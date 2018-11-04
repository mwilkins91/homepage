import React from 'react';
import styled from 'styled-components';
import {StaticQuery} from 'gatsby';
import SectionTitle from '../components/SectionTitle';
import Project from '../components/Project';

const ProjectsSection = styled.section`
  background: ${props => props.theme.black};
  * {
    color: white;
  }
`;

const Wrapper = styled.div`
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
`

const Profile = (num) => (
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
                  title
                }
              }
            }
          }
          `}
        render={data => {
          const projects = data.allProjectsJson.edges;
          return (
            projects.map(({node}) => <Project {...node} />)
          )
        }}
      />
    </Wrapper>
  </ProjectsSection>
);

export default Profile;
