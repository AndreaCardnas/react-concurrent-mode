import promiseWrapper from './promiseWrapper';
import * as endpoints from './fetchers';

export default (userId = 1) => {
  const userPromise = endpoints.fetchUser(userId);
  const postPromise = endpoints.fetchPost(userId);

  return {
    user: promiseWrapper(userPromise),
    posts: promiseWrapper(postPromise),
  };
};
