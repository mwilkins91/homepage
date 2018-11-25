import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ContactIcon from '../elements/ContactIcon';

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 775px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      * {
        margin-bottom: 10px;
      }
    } 
`;

const Wrapper = styled.div`
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
    padding: 0 0 50px 0;
`;

const ContactMe = () => (
  <Wrapper id="contact">
    <SectionTitle
      title="Contact Me"
      subtitle="Let's get in touch"
      backgroundColor="white"
    />
    <Flex>
      <ContactIcon
        link="tel:647-402-5501"
        text="647-402-5501"
        icon="fa fa-phone-square"
      />
      <ContactIcon
        link="mailto:contactme@markwilkins.co?Subject=Hello!"
        text="ContactMe@markwilkins.co"
        icon="fa fa-envelope"
      />
      <ContactIcon
        link="https://www.linkedin.com/in/markwilkinsweb/"
        text="MarkWilkinsWeb"
        icon="fab fa-linkedin"
      />
    </Flex>
  </Wrapper>
);

export default ContactMe;
