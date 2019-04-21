import React from 'react';
import Layout from '../containers/layout';
import { ThemeProvider } from 'styled-components';
import theme from '../util/theme';
import ResumeSideBar from '../containers/ResumeSideBar';
import Resume from '../containers/Resume/Resume';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Project from '../components/Project'
import { StaticQuery, graphql } from 'gatsby';
import SectionTitle from '../components/SectionTitle';

const Background = styled.section`
  background: ${props => props.theme.black};
  padding: 50px 0;
  * {
    color: white;
  } 
`;

const Wrapper = styled.div`
  display: flex;
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
  @media screen and (max-width: 775px) {
    flex-direction: column;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media all and (max-width: 775px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } 
`;


const projectsPage = () => (
  <ThemeProvider theme={theme}>
    <Layout className="projects">
      <Heading>Projects</Heading>
      <StaticQuery
        query={graphql`
          query {
            allOngoingProjectsJson {
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
          const projects = data.allOngoingProjectsJson.edges;
          return (
            <Background>
              <SectionTitle
                title="Personal Projects"
                subtitle="A sample of my ongoing projects"
                backgroundColor="black"
              />
              <Wrapper>
                <Flex>
                  {projects.map(({ node }) => <Project key={`project-${node.id}`} {...node} />)}
                </Flex>
              </Wrapper>
            </Background>
          );
        }}
      />
    </Layout>
  </ThemeProvider>
);

export default projectsPage;
