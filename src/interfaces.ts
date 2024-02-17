interface IUserSearch {
  userSearchStr: string;
  setUserList: React.Dispatch<React.SetStateAction<unknown[]>>;
}

interface IUserDetail {
  avatar_url: string;
  login: string;
  id: string;
  url: string;
}
interface IUserSearchResponse {
  items: IUserDetail[];
}

interface IListItems {
  title: string;
  id: string;
  onClick?: () => void;
}

export type { IUserSearch, IUserSearchResponse, IUserDetail, IListItems };
