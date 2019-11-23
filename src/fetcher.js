const fetchUser = () => {
  console.log('fetching user');

  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .catch((error) => console.trace(error));
};

const fetchPost = () => {
  console.log('fetching posts');

  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .catch((error) => console.trace(error));
};

const promiseWrapper = (promise) => {
  // set initial status
  let status = 'pending';

  // store result
  let result;

  // wait for promise
  let suspender = promise
    .then((response) => {
      status = 'success';
      result = response;
    })
    .catch((error) => {
      status = 'error';
      result = error;
    });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

export default () => {
  const userPromise = fetchUser();
  const postPromise = fetchPost();

  return {
    user: promiseWrapper(userPromise),
    posts: promiseWrapper(postPromise),
  };
};
