import { Avatar, Divider, Grid } from '@mui/material';
import { IUserDetail } from '../../interfaces';
import './profile.css';
import GitHubIcon from '@mui/icons-material/GitHub';

interface IProfileCardProps {
  userProfileDetails: IUserDetail;
}

interface IOtherDetailsProps {
  label: string;
  value: string | number;
}
const OtherDetails = ({ label, value }: IOtherDetailsProps) => {
  return (
    <Grid container className="pc-other-details-container">
      <Grid item xs={6} sm={6} lg={12}>
        <h3 className="pc-other-details-label"> {label} </h3>
      </Grid>
      <Grid item xs={6} sm={6} lg={12}>
        <p className="pc-other-details-value"> {value} </p>
      </Grid>
    </Grid>
  );
};

const ProfileCard = ({ userProfileDetails }: IProfileCardProps) => {
  return userProfileDetails ? (
    <>
      <div className="profile-card">
        <div className="pc-main-details">
          <div className="pc-avatar-container">
            <Avatar
              alt="Remy Sharp"
              src={userProfileDetails?.avatar_url}
              sx={{ width: 56, height: 56 }}
            />
          </div>
          <div className="pc-identifier">
            <h1> {userProfileDetails?.name} </h1>
            <a target="_blank" href={userProfileDetails?.html_url}>
              <GitHubIcon></GitHubIcon>
              {userProfileDetails?.login}{' '}
            </a>
          </div>
        </div>

        <Divider></Divider>

        <OtherDetails label={'Location'} value={userProfileDetails?.location}></OtherDetails>

        <Divider></Divider>

        <OtherDetails label={'Following'} value={userProfileDetails?.following}></OtherDetails>

        <Divider></Divider>

        <OtherDetails label={'Followers'} value={userProfileDetails?.followers}></OtherDetails>
        <Divider></Divider>

        <OtherDetails label={'Repos'} value={userProfileDetails?.public_repos}></OtherDetails>
      </div>
    </>
  ) : null;
};

export default ProfileCard;
