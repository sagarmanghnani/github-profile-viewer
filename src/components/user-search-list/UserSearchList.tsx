import { useEffect, useRef, useState } from 'react';
import { IListItems, ISearchUserDetail } from '../../interfaces';
import List from '../list/List';
import './user-search-list.css';

interface IUserSearchListProps {
  userList: ISearchUserDetail[];
  onSearchedUserListClick: (searchedUser: ISearchUserDetail) => void;
}

const UserSearchList = ({ userList, onSearchedUserListClick }: IUserSearchListProps) => {
  const userListRef = useRef({
    isListLoading: true,
    listItems: []
  });
  const [triggerReRender, setTriggerReRender] = useState<number>();
  const processUserList = () => {
    const isListLoading = !!userList?.length;
    const listItems: IListItems[] = userList.map((item: ISearchUserDetail) => {
      const listItem: IListItems = {
        title: item.login,
        id: item.id,
        onClick: onSearchedUserListClick
      };
      return listItem;
    });
    if (userListRef.current) {
      userListRef.current = {
        isListLoading,
        listItems
      };

      setTriggerReRender(Math.random());
    }
  };

  useEffect(() => {
    processUserList();
  }, [userList]);

  return (
    <>
      <div className="user-search-list-container">
        <div className="user-search-list-enclose">
          <List
            listItems={userListRef?.current?.listItems}
            isListLoading={!userListRef.current.isListLoading}></List>
        </div>
      </div>
    </>
  );
};

export default UserSearchList;
