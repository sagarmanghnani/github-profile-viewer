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
  onClick?: () => void;
}

interface IUserDetail extends ISearchUserDetail {
  name: string;
  followers: number;
  following: number;
  location: string;
  html_url: string;
  public_repos: number;
}

export type { IUserSearch, IUserSearchResponse, ISearchUserDetail, IListItems, IUserDetail };
