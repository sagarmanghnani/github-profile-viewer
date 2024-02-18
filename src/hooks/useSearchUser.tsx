import { useState } from 'react';
import { debouncedFetchSearchUsers } from '../utils';
import { ISearchUserDetail } from '../interfaces';

function useSearchUser() {
  const [userList, setUserList] = useState<ISearchUserDetail[]>([]);
  async function handleUserSearchInputChange(e: any) {
    const value = e.target.value;
    if (value) {
      debouncedFetchSearchUsers({
        userSearchStr: value,
        setUserList
      });
    }
  }

  async function handleOnInputBlur(e) {
    setUserList([]);
  }

  return {
    handleUserSearchInputChange,
    userList,
    handleOnInputBlur
  };
}

export default useSearchUser;
