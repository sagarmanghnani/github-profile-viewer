import { useState } from 'react';
import { debouncedFetchSearchUsers } from '../utils';
import { IUserDetail } from '../interfaces';

function useSearchUser() {
  const [userList, setUserList] = useState<IUserDetail[]>([]);
  async function handleUserSearchInputChange(e: any) {
    const value = e.target.value;
    if (value) {
      debouncedFetchSearchUsers({
        userSearchStr: value,
        setUserList
      });
    }
  }

  return {
    handleUserSearchInputChange,
    userList
  };
}

export default useSearchUser;
