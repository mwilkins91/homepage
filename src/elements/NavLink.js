import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: block;
    padding: 20px;
    font-size: 2rem;
    font-family: ${props => props.theme.contentFont};
    text-transform: uppercase;
    font-weight: bold;
    color: #151515;
    text-decoration: none;
    transition: color 0.3s, background 0.3s;
    @media all and (max-width: 775px) {
        width: 100%;
        text-align: center;
    } 
`;

export default StyledLink;
