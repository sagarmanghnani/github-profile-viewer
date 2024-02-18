import API_URL from '../constants/constants';
import { ISearchUserDetail, IUserDetail } from '../interfaces';

async function getProfileDetails(profileId: string): Promise<IUserDetail> {
  const userDetailResponse = await fetch(`${API_URL.PROFILE_DETAILS}/${profileId}`);
  const userDetail: IUserDetail = await userDetailResponse.json();
  return userDetail;
}

export { getProfileDetails };
