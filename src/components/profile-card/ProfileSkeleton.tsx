import { Divider } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const ProfileSkeleton = () => {
  return (
    <div className="profile-card">
      <div className="avatar-skeleton">
        <Skeleton className="pc-avatar-skeleton" variant="circular" width={56} height={56} />
        <Skeleton className="pc-gh-link" variant="rectangular" width={250}></Skeleton>
        <Skeleton className="pc-gh-link" variant="rectangular" width={200}></Skeleton>
      </div>
      <Divider></Divider>

      <div className="pc-identifier">
        <div className="pc-identifier-skeleton">
          <Skeleton className="pc-other-details-label" variant="rectangular"></Skeleton>
          <Skeleton className="pc-other-details-value" variant="rectangular"></Skeleton>
        </div>
      </div>

      <Divider></Divider>

      <div className="pc-identifier">
        <div className="pc-identifier-skeleton">
          <Skeleton className="pc-other-details-label" variant="rectangular"></Skeleton>
          <Skeleton className="pc-other-details-value" variant="rectangular"></Skeleton>
        </div>
      </div>

      <Divider></Divider>

      <div className="pc-identifier">
        <div className="pc-identifier-skeleton">
          <Skeleton className="pc-other-details-label" variant="rectangular"></Skeleton>
          <Skeleton className="pc-other-details-value" variant="rectangular"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
