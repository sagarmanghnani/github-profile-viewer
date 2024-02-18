import { error } from 'console';
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
      console.log(userSearchData.userSearchStr, 'userSearchStr', 'userdata', userData.items);
      setUserList(userData.items);
    }
  } catch (err) {
    console.log(err);
    showError('Something went wrong');
  }
}

function showError(errorMsg) {
  const alertStateUpdater = window['alert_state_update'];
  alertStateUpdater({
    isActive: true,
    severity: 'error',
    message: errorMsg
  });

  const clearAlert = setTimeout(() => {
    alertStateUpdater({
      isActive: false
    });
  }, 2000);
}

export { debouncedFetchSearchUsers, showError };
