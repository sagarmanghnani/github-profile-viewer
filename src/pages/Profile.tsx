import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileDetails, getUserRepositories } from './utils';
import {
  IPaginationInfo,
  IRepoDetail,
  IRepositoryDetailWithPagination,
  IUserDetail
} from '../interfaces';
import './profile.css';
import ProfileCard from '../components/profile-card/Profile';
import { Grid } from '@mui/material';
import RepositoryList from '../components/repository-list/RepositoryList';
const Profile = (props) => {
  const { profileId } = useParams();
  const [userProfileId, setUserProfileId] = useState<string>(profileId);
  const [profileDetails, setUserProfile] = useState<IUserDetail>();
  const [repositoryInfo, setRepositoryInfo] = useState<IRepositoryDetailWithPagination>({
    repoList: []
  });

  const [repoPageInfo, setRepoPageInfo] = useState<IPaginationInfo>({
    page: 1,
    size: 10
  });

  const getNewProfileDetails = async () => {
    const profileDetails = await getProfileDetails(userProfileId);
    setUserProfile(profileDetails);
  };

  const getRepoDetails = async () => {
    const repoList: IRepoDetail[] = await getUserRepositories(userProfileId);
    setRepositoryInfo((prevDetails) => {
      return {
        ...prevDetails,
        repoList
      };
    });
  };

  useEffect(() => {
    getNewProfileDetails();
  }, [userProfileId]);

  useEffect(() => {
    getRepoDetails();
  }, [userProfileId, repoPageInfo]);

  return (
    <div className="profile-page">
      <Grid container spacing={4}>
        <Grid item sm={12} xs={12} lg={4} xl={4} spacing={1}>
          <ProfileCard userProfileDetails={profileDetails}></ProfileCard>
        </Grid>

        <Grid item sm={12} xs={12} lg={7} xl={7}>
          <RepositoryList repoList={repositoryInfo?.repoList}></RepositoryList>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
