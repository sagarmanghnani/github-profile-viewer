import { IRepoDetail } from '../../interfaces';
import RepositoryCard from '../repository-card/RepositoryCard';
import './repository-list.css';

interface IRepositoryListProps {
  repoList: IRepoDetail[];
  isLoading?: boolean;
}
const RepositoryList = ({ repoList, isLoading }: IRepositoryListProps) => {
  return (
    <>
      <div className="repo-list-container">
        {repoList.map((repoDetail) => {
          return <RepositoryCard repoDetail={repoDetail} isLoading={isLoading}></RepositoryCard>;
        })}
      </div>
    </>
  );
};

export default RepositoryList;
