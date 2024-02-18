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
import usePagination from '../hooks/usePagination';
const Profile = (props) => {
  const { profileId } = useParams();
  const [userProfileId, setUserProfileId] = useState<string>(profileId);
  const [profileDetails, setUserProfile] = useState<IUserDetail>();
  const [repositoryInfo, setRepositoryInfo] = useState<IRepositoryDetailWithPagination>({
    repoList: []
  });

  function handleOnPageChange(pageInfo: IPaginationInfo) {
    console.log(pageInfo, 'pageInfo....');
  }

  const { AugmentedPagination, pageInfo } = usePagination({
    totalItemCount: profileDetails?.public_repos | 0,
    pageSize: 10,
    initialPage: 1,
    onPageChange: handleOnPageChange
  });

  const getNewProfileDetails = async () => {
    const profileDetails = await getProfileDetails(userProfileId);
    setUserProfile(profileDetails);
  };

  const getRepoDetails = async () => {
    const repoPage = pageInfo?.page ?? 1;
    const repoList: IRepoDetail[] = await getUserRepositories(userProfileId, repoPage);
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
  }, [userProfileId, pageInfo]);

  return (
    <div className="profile-page">
      <Grid container spacing={4}>
        <Grid item sm={12} xs={12} lg={4} xl={4} spacing={1}>
          <ProfileCard userProfileDetails={profileDetails}></ProfileCard>
        </Grid>

        <Grid item sm={12} xs={12} lg={7} xl={7}>
          <RepositoryList repoList={repositoryInfo?.repoList}></RepositoryList>
          {AugmentedPagination}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
