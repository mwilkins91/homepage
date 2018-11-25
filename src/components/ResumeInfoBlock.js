import React from 'react';
import styled from 'styled-components';
import GreenTriangleUL from '../elements/GreenTriangleUL';
import dayjs from 'dayjs';

const Heading = styled.h3`
  font-size: 1.2rem;
  font-family: ${props => props.theme.headerFont};
  font-weight: bold;
  color: ${props => props.theme.black};
  margin-bottom: 2px;
`;

const SubHeading = styled.h3`
  font-size: 1rem;
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.black};
  font-style: italic;
`;

const DescriptionLi = styled.li`
  margin: 3px 0 ;
`;

const Description = styled.p`
  font-family: ${props => props.theme.contentFont};
`;

const getPrintableDate = str => {
  const dateFormat = 'MMMM YYYY'
  const date = dayjs(str);
  return date.isValid() ? date.format(dateFormat) : str;
}

const ResumeInfoBlock = ({data}) => {
  const {
    id,
    company,
    description = [],
    end,
    title,
    start
  } = data;
 
  return (
    <>
      <Heading>{title}</Heading>
      <SubHeading>{company} | {getPrintableDate(start)} - {getPrintableDate(end)}</SubHeading>
      <GreenTriangleUL>
        {description.map((line, i) => (
          <DescriptionLi key={`${id}-line-${i}`}>
            <Description>{line}</Description>
          </DescriptionLi>
        ))}
      </GreenTriangleUL>
    </>
  );
}

export default ResumeInfoBlock;
