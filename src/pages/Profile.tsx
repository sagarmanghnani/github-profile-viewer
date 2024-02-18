import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileDetails } from './utils';
import { IUserDetail } from '../interfaces';
import './profile.css';
import ProfileCard from '../components/profile-card/Profile';
const Profile = (props) => {
  const { profileId } = useParams();
  const [userProfileId, setUserProfileId] = useState<string>(profileId);
  const [profileDetails, setUserProfile] = useState<IUserDetail>();

  const getNewProfileDetails = async () => {
    const profileDetails = await getProfileDetails(userProfileId);
    setUserProfile(profileDetails);
  };

  useEffect(() => {
    getNewProfileDetails();
  }, []);

  return (
    <div className="profile-page">
      <ProfileCard userProfileDetails={profileDetails}></ProfileCard>
    </div>
  );
};

export default Profile;
