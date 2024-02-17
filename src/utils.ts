import API_URL from './constants/constants';
import { IUserSearch } from './interfaces';

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
  const userDataResponse = await fetch(
    `${API_URL.SEARCH_USER}?q=${userSearchData.userSearchStr}&per_page=${5}`
  );
  const userData = await userDataResponse.json();
  console.log(userData, 'userDataResponse');
  return userData;
}

export { debouncedFetchSearchUsers };
