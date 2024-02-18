import { IRepoDetail } from '../../interfaces';
import './repository-card.css';

interface IRepositoryCardProps {
  repoDetail: IRepoDetail;
}

const RepositoryCard = ({ repoDetail }: IRepositoryCardProps) => {
  return (
    <>
      <div className="repo-card-container">
        <h4> {repoDetail.name} </h4>
        <p className="repo-card-description"> {repoDetail.description} </p>
      </div>
    </>
  );
};

export default RepositoryCard;
