import styled from 'styled-components';

const indentSize = 1.3;

const GreenTriangleUL = styled.ul`
  li {
    padding-left: ${indentSize}em;
    margin-left: 10px;
  }
  li:before {
    content: "\f0da"; /* FontAwesome Unicode */
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display: inline-block;
    color: ${props => props.theme.green};
    margin-left: -${indentSize}em;
    width: ${indentSize}em;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    position: absolute;
  }
`;

export default GreenTriangleUL;