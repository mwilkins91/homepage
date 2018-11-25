import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProfilePicture from '../elements/ProfilePicture';
import ProfileDescription from '../components/ProfileDescription';

const ProfileSection = styled.section`
  max-width: ${props => props.theme.wrapper};
  margin: 0 auto;
  padding: 0 0 50px 0;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 30px;
  @media all and (max-width: 775px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  } 
`;

const Profile = () => (
  <ProfileSection id="profile">
    <SectionTitle
      title="Mark Wilkins"
      subtitle="Fullstack Web Application Developer"
    />
    <FlexContainer>
      <ProfilePicture />
      <ProfileDescription />
    </FlexContainer>
  </ProfileSection>
);

export default Profile;
