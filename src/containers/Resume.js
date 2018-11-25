import React from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import SocialIcon from '../elements/SocalIcon';
import Content from '../elements/Content';
import GreenText from '../elements/GreenText';
import { StaticQuery, graphql } from 'gatsby';
import ResumeInfoBlock from '../components/ResumeInfoBlock';
import dayjs from 'dayjs';

const ResumeTitle = styled.h1`
    color: ${props => props.theme.black};
    font-size: 4.2rem;
    font-family: ${props => props.theme.headerFont};
    text-transform: capitalize;
    font-weight: bold;
    padding: 35px 0;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 50px;
`;

const ResumeSectionHeading = styled.h2`
  font-size: 1.6rem;
  font-family: ${props => props.theme.headerFont};
  font-weight: bold;
  padding: 15px 0;
  color: ${props => props.theme.green};
`;

const InfoBlockLi = styled.li`
  margin: 10px 0;
`;

const presentFirst = ({node:a},{node:b}) => {
  if (
      a.end.toLowerCase() === 'present' &&
      b.end.toLowerCase() !== 'present'
    ) {
      return -1;
    }

    if (
      a.end.toLowerCase() !== 'present' &&
      b.end.toLowerCase() === 'present'
    ) {
      return 1;
    }

    if (
      a.end.toLowerCase() === 'present' &&
      b.end.toLowerCase() === 'present'
    ) {
      return 0;
    }

    return dayjs(b.end).valueOf() - dayjs(a.end).valueOf();
}

const Resume = () => (
  <StaticQuery
    query={graphql`
      query resumeQuery {
        allWorkHistoryJson {
          edges {
            node {
              id
              company
              title
              start
              end
              description
            }
          }
        }
        allEducationJson {
          edges {
            node {
              id
              company
              title
              start
              end
            }
          }
        }
      }
    `}
    render={data => {
      const workExperienceArr = data.allWorkHistoryJson.edges;
      const educationExperienceArr = data.allEducationJson.edges;
      return (
      <Main>
        <ResumeTitle>
          <GreenText>Mark</GreenText> Wilkins
        </ResumeTitle>
        <ResumeSectionHeading>Experience</ResumeSectionHeading>
        <ul>
          {workExperienceArr.sort(presentFirst).map(({node}) => (
              <InfoBlockLi>
                <ResumeInfoBlock key={node.id} data={node}/>
              </InfoBlockLi>
            ))}
        </ul>
        <ResumeSectionHeading>Education</ResumeSectionHeading>
        <ul>
          {educationExperienceArr.map(({node}) => (
              <InfoBlockLi>
                <ResumeInfoBlock key={node.id} data={node}/>
              </InfoBlockLi>
            ))}
        </ul>
      </Main>
    )
    }}
  />
);

export default Resume;