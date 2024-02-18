import { IRepoDetail } from '../../interfaces';
import RepositoryCard from '../repository-card/RepositoryCard';
import './repository-list.css';

interface IRepositoryListProps {
  repoList: IRepoDetail[];
}
const RepositoryList = ({ repoList }: IRepositoryListProps) => {
  return (
    <>
      <div className="repo-list-container">
        {repoList.map((repoDetail) => {
          return <RepositoryCard repoDetail={repoDetail}></RepositoryCard>;
        })}
      </div>
    </>
  );
};

export default RepositoryList;
