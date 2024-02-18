import API_URL, { PAGINATION_SIZE } from '../constants/constants';
import { IRepoDetail, ISearchUserDetail, IUserDetail } from '../interfaces';

async function getProfileDetails(profileId: string): Promise<IUserDetail> {
  try {
    const userDetailResponse = await fetch(`${API_URL.PROFILE_DETAILS}/${profileId}`);
    const userDetail: IUserDetail = await userDetailResponse.json();
    return userDetail;
  } catch (err) {
    console.log(err);
  }
}

async function getUserRepositories(userId: string, page: number = 1): Promise<IRepoDetail[]> {
  try {
    const repoDetailresponse = await fetch(
      `${API_URL.USER_REPOS_GET}${userId}/repos?per_page=${PAGINATION_SIZE}&page=${page}`
    );
    const repoDetail: IRepoDetail[] = await repoDetailresponse.json();
    console.log(repoDetail);
    return repoDetail;
  } catch (err) {}
}

export { getProfileDetails, getUserRepositories };
