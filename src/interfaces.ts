interface IUserSearch {
  userSearchStr: string;
  setUserList: React.Dispatch<React.SetStateAction<unknown[]>>;
}

interface ISearchUserDetail {
  avatar_url: string;
  login: string;
  id: string;
  url: string;
}
interface IUserSearchResponse {
  items: ISearchUserDetail[];
}

interface IListItems {
  title: string;
  id: string;
  onClick?: (searchedUser: ISearchUserDetail) => void;
}

interface IUserDetail extends ISearchUserDetail {
  name: string;
  followers: number;
  following: number;
  location: string;
  html_url: string;
  public_repos: number;
}

interface IRepoDetail {
  name: string;
  description: string;
}

interface IPaginationInfo {
  page: number;
  size: number;
}

interface IRepositoryDetailWithPagination {
  repoList: IRepoDetail[];
}

export type {
  IUserSearch,
  IUserSearchResponse,
  ISearchUserDetail,
  IListItems,
  IUserDetail,
  IRepoDetail,
  IRepositoryDetailWithPagination,
  IPaginationInfo
};
