import styled from 'styled-components';

const Content = styled.div`
    color: ${props => props.theme.grey};
    line-height: 2.3rem;
    font-family: ${props => props.theme.contentFont};
    font-size: 1.6rem;
    p {
      margin: 15px 0;
    }
`;


export default Content;
