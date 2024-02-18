import { IRepoDetail } from '../../interfaces';
import './repository-card.css';
import RepoSkeleton from './Skeleton';

interface IRepositoryCardProps {
  repoDetail: IRepoDetail;
  isLoading?: boolean;
}

const RepositoryCard = ({ repoDetail, isLoading }: IRepositoryCardProps) => {
  return (
    <>
      {isLoading ? (
        <RepoSkeleton></RepoSkeleton>
      ) : (
        <>
          <div className="repo-card-container">
            <h4> {repoDetail.name} </h4>
            <p className="repo-card-description"> {repoDetail.description} </p>
          </div>
        </>
      )}
    </>
  );
};

export default RepositoryCard;
