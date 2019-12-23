const BASE_URL = 'https://jsonplaceholder.typicode.com';

function fetcher(path, options = {}) {
  return fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { ...(options.headers || {}) },
  }).then((response) => response.json());
}

export function fetchUser(userId) {
  return fetcher(`/users/${userId}`).catch((error) => console.trace(error));
}

export function fetchPost(userId) {
  return fetcher(`/posts?userId=${userId}`).catch((error) => console.trace(error));
}
