import API_URL from './constants/constants';
import { IUserSearch, IUserSearchResponse } from './interfaces';

function debounce(func, delay) {
  let timeoutId;
  return function (...args: any) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const debouncedFetchSearchUsers = debounce(fetchSearchUsers, 300);

async function fetchSearchUsers(userSearchData: IUserSearch) {
  try {
    const { userSearchStr, setUserList } = userSearchData;
    const userDataResponse = await fetch(`${API_URL.SEARCH_USER}?q=${userSearchStr}&per_page=${5}`);
    const userData: IUserSearchResponse = await userDataResponse.json();
    if (userData.items.length) {
      setUserList(userData.items);
    }
    if (userData) return userData;
  } catch (err) {
    console.log(err);
  }
}

export { debouncedFetchSearchUsers };
