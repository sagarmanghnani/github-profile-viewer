import Skeleton from '@mui/material/Skeleton';
import './repository-card.css';
const RepoSkeleton = () => {
  return (
    <>
      <div className="repo-card-container">
        <Skeleton className="repo-skeleton-heading" variant="rectangular" width="40%" />
        <Skeleton variant="rectangular" width="100%"></Skeleton>
      </div>
    </>
  );
};

export default RepoSkeleton;
