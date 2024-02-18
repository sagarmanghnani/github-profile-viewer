import { useEffect, useRef } from 'react';
import { IListItems, ISearchUserDetail } from '../../interfaces';
import List from '../list/List';
import './user-search-list.css';

interface IUserSearchListProps {
  userList: ISearchUserDetail[];
}

const UserSearchList = ({ userList }: IUserSearchListProps) => {
  const userListRef = useRef({
    isListLoading: true,
    listItems: []
  });
  const processUserList = () => {
    const isListLoading = !!userList?.length;
    const listItems: IListItems[] = userList.map((item: ISearchUserDetail) => {
      const listItem: IListItems = {
        title: item.login,
        id: item.id
      };
      return listItem;
    });
    if (userListRef.current) {
      userListRef.current = {
        isListLoading,
        listItems
      };
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
