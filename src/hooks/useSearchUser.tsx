import { useState } from 'react';
import { debouncedFetchSearchUsers } from '../utils';

function useSearchUser() {
  const [userList, setUserList] = useState([]);
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
    handleUserSearchInputChange
  };
}

export default useSearchUser;
